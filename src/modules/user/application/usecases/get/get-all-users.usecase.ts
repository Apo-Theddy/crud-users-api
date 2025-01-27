import { HttpException, Inject } from "@nestjs/common"
import { IUseCase } from "src/core/generics/usecase.generic"
import { User } from "src/modules/user/domain/entities/user.entity"
import { IUserRepository } from "src/modules/user/domain/interfaces/user-repository.interface"
import { Result } from "src/shared/patterns/result.pattern"
import { QueryFilterDTO } from "../../dtos/query-filter.dto"
import { RepositoriesNames } from "src/shared/constants/repositories-names.constant"
import { DisplayUsersDTO } from "../../dtos/display-users.dto"

export class GetAllUsersUseCase implements IUseCase<Promise<Result<DisplayUsersDTO, HttpException>>, QueryFilterDTO> {
  constructor(
    @Inject(RepositoriesNames.USER_REPOSITORY)
    private readonly repository: IUserRepository
  ) { }

  public execute(params: QueryFilterDTO): Promise<Result<DisplayUsersDTO, HttpException>> {
    return this.repository.getAllUsers(params)
  }
}
