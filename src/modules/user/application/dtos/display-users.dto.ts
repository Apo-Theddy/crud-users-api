import { User } from "../../domain/entities/user.entity";

export interface DisplayUsersDTO {
  total: number;
  users: User[];
}
