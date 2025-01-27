import { Result } from "src/shared/patterns/result.pattern";
import { User } from "../entities/user.entity";
import { HttpException } from "@nestjs/common";
import { CreateUserDTO } from "../../application/dtos/create-user.dto";
import { UpdateUserDTO } from "../../application/dtos/update-user.dto";
import { QueryFilterDTO } from "../../application/dtos/query-filter.dto";
import { DisplayUsersDTO } from "../../application/dtos/display-users.dto";

export interface IUserRepository {
  getAllUsers(dto: QueryFilterDTO): Promise<Result<DisplayUsersDTO, HttpException>>;
  search(query: string): Promise<Result<DisplayUsersDTO, HttpException>>;
  getUserById(id: number): Promise<Result<User, HttpException>>;
  createUser(dto: CreateUserDTO): Promise<Result<User, HttpException>>;
  updateUser(dto: UpdateUserDTO): Promise<Result<User, HttpException>>;
  deleteUser(id: number): Promise<Result<User, HttpException>>;
}
