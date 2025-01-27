import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./domain/entities/user.entity";
import { UserImplementationRepository } from "./infrastructure/repositories/user-implementation.repository";
import { UserService } from "./application/services/user.service";
import { GetAllUsersUseCase, GetUserByIdUseCase, CreateUserUseCase, UpdateUserUseCase, DeleteUserUseCase, SearchUseCase } from "./application/usecases";
import { RepositoriesNames } from "src/shared/constants/repositories-names.constant";
import { UserController } from "./infrastructure/controllers/user.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User
    ])
  ],
  providers: [
    { provide: RepositoriesNames.USER_REPOSITORY, useClass: UserImplementationRepository },
    UserService,
    GetAllUsersUseCase,
    GetUserByIdUseCase,
    SearchUseCase,
    CreateUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase
  ],
  controllers: [
    UserController
  ],
  exports: [
    UserService
  ]
})
export class UserModule { }
