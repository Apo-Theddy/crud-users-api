import { IUseCase } from "src/core/generics/usecase.generic";
import { Result } from "src/shared/patterns/result.pattern";
import { DisplayUsersDTO } from "../../dtos/display-users.dto";
import { HttpException, Inject } from "@nestjs/common";
import { IUserRepository } from "src/modules/user/domain/interfaces/user-repository.interface";
import { RepositoriesNames } from "src/shared/constants/repositories-names.constant";

export class SearchUseCase implements IUseCase<Promise<Result<DisplayUsersDTO, HttpException>>, string> {
  constructor(
    @Inject(RepositoriesNames.USER_REPOSITORY)
    private readonly repository: IUserRepository
  ) { }

  public execute(params: string): Promise<Result<DisplayUsersDTO, HttpException>> {
    return this.repository.search(params);
  }
}
