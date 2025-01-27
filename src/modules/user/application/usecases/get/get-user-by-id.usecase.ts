import { HttpException, Inject } from "@nestjs/common";
import { IUseCase } from "src/core/generics/usecase.generic";
import { User } from "src/modules/user/domain/entities/user.entity";
import { IUserRepository } from "src/modules/user/domain/interfaces/user-repository.interface";
import { RepositoriesNames } from "src/shared/constants/repositories-names.constant";
import { Result } from "src/shared/patterns/result.pattern";

export class GetUserByIdUseCase implements IUseCase<Promise<Result<User, HttpException>>, number> {
  constructor(
    @Inject(RepositoriesNames.USER_REPOSITORY)
    private readonly repository: IUserRepository
  ) { }

  public execute(id: number): Promise<Result<User, HttpException>> {
    return this.repository.getUserById(id)
  }
}
