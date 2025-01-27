import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDTO } from "./create-user.dto";
import { IsNotEmpty, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDTO extends PartialType(CreateUserDTO) {
  @ApiProperty({
    description: 'The id of the user',
    type: Number,
    required: true,
    example: 1
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
