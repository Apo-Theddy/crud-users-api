import { HttpException, Injectable } from "@nestjs/common";
import { IUserRepository } from "../../domain/interfaces/user-repository.interface";
import { IsNull, Like, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../domain/entities/user.entity";
import { Fail, Ok, Result } from "src/shared/patterns/result.pattern";
import { UserNotFoundException } from "../../domain/exceptions/user-not-found.exception";
import { CreateUserDTO } from "../../application/dtos/create-user.dto";
import { UpdateUserDTO } from "../../application/dtos/update-user.dto";
import { EmailAlreadyExistsException } from "../../domain/exceptions/email-already-exists";
import { QueryFilterDTO } from "../../application/dtos/query-filter.dto";
import { DisplayUsersDTO } from "../../application/dtos/display-users.dto";

@Injectable()
export class UserImplementationRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly provider: Repository<User>
  ) { }

  public async getAllUsers(dto?: QueryFilterDTO): Promise<Result<DisplayUsersDTO, HttpException>> {
    const [users, total] = await this.provider.findAndCount({
      where: { deletedAt: IsNull() },
      skip: (dto?.page - 1) * 10,
      take: 10,
    });

    return Ok({
      total,
      users,
    });
  }

  public async getUserById(id: number): Promise<Result<User, HttpException>> {
    const user = await this.provider.findOne({ where: { id, deletedAt: IsNull() } });
    if (!user) return Fail(new UserNotFoundException());
    return Ok(user);
  }

  public async search(query: string): Promise<Result<DisplayUsersDTO, HttpException>> {
    const [users, total] = await this.provider.findAndCount({
      where: [
        { name: Like(`%${query}%`), deletedAt: IsNull() },
        { email: Like(`%${query}%`), deletedAt: IsNull() }
      ], take: 10
    });

    return Ok({
      total,
      users,
    });
  }

  public async createUser(dto: CreateUserDTO): Promise<Result<User, HttpException>> {
    const emailExists = await this.provider.findOne({ where: { email: dto.email } });
    if (emailExists) return Fail(new EmailAlreadyExistsException());
    const user = this.provider.create(dto);
    const savedUser = await this.provider.save(user);
    return Ok(savedUser);
  }

  public async updateUser(dto: UpdateUserDTO): Promise<Result<User, HttpException>> {
    const { isFail, error, data } = await this.getUserById(dto.id);
    if (isFail) return Fail(error);

    if (dto.email) {
      const emailExists = await this.provider.findOne({ where: { email: dto.email, deletedAt: IsNull() } });
      if (emailExists && emailExists.id !== dto.id) return Fail(new EmailAlreadyExistsException());
    }
    Object.assign(data, dto);
    const savedUser = await this.provider.save(data);
    return Ok(savedUser);
  }

  public async deleteUser(id: number): Promise<Result<User, HttpException>> {
    const { isFail, error, data } = await this.getUserById(id);
    if (isFail) return Fail(error);
    data.deletedAt = new Date();
    const savedUser = await this.provider.save(data);
    return Ok(savedUser);
  }
}
