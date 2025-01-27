import { Injectable } from "@nestjs/common";
import { GetAllUsersUseCase, GetUserByIdUseCase, CreateUserUseCase, UpdateUserUseCase, DeleteUserUseCase, SearchUseCase } from "../usecases";
import { User } from "../../domain/entities/user.entity";
import { CreateUserDTO } from "../dtos/create-user.dto";
import { UpdateUserDTO } from "../dtos/update-user.dto";
import { QueryFilterDTO } from "../dtos/query-filter.dto";
import { DisplayUsersDTO } from "../dtos/display-users.dto";

@Injectable()
export class UserService {
  constructor(
    private readonly getAllUsersUseCase: GetAllUsersUseCase,
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
    private readonly searchUseCase: SearchUseCase,
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase
  ) { }

  public async getAllUsers(dto: QueryFilterDTO): Promise<DisplayUsersDTO> {
    const { isFail, error, data } = await this.getAllUsersUseCase.execute(dto)
    if (isFail) throw error
    return data;
  }

  public async getUserById(id: number): Promise<User> {
    const { isFail, error, data } = await this.getUserByIdUseCase.execute(id)
    if (isFail) throw error
    return data;
  }

  public async search(query: string): Promise<DisplayUsersDTO> {
    const { isFail, error, data } = await this.searchUseCase.execute(query)
    if (isFail) throw error
    return data;
  }

  public async createUser(user: CreateUserDTO): Promise<User> {
    const { isFail, error, data } = await this.createUserUseCase.execute(user)
    if (isFail) throw error
    return data;
  }

  public async updateUser(user: UpdateUserDTO): Promise<User> {
    const { isFail, error, data } = await this.updateUserUseCase.execute(user)
    if (isFail) throw error
    return data;
  }

  public async deleteUser(id: number): Promise<User> {
    const { isFail, error, data } = await this.deleteUserUseCase.execute(id)
    if (isFail) throw error
    return data;
  }

}
