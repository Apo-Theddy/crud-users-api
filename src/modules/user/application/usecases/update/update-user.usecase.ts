import { HttpException, Inject } from "@nestjs/common";
import { IUseCase } from "src/core/generics/usecase.generic";
import { User } from "src/modules/user/domain/entities/user.entity";
import { Result } from "src/shared/patterns/result.pattern";
import { UpdateUserDTO } from "../../dtos/update-user.dto";
import { IUserRepository } from "src/modules/user/domain/interfaces/user-repository.interface";
import { RepositoriesNames } from "src/shared/constants/repositories-names.constant";

export class UpdateUserUseCase implements IUseCase<Promise<Result<User, HttpException>>, UpdateUserDTO> {
  constructor(
    @Inject(RepositoriesNames.USER_REPOSITORY)
    private readonly repository: IUserRepository
  ) { }

  public execute(dto: UpdateUserDTO): Promise<Result<User, HttpException>> {
    return this.repository.updateUser(dto)
  }
}
