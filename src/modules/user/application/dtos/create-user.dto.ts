import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDTO {
  @ApiProperty({
    description: 'The name of the user',
    type: String,
    required: true,
    example: 'John Doe'
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    type: String,
    required: true,
    example: "johndoe@gmail.com"
  })
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'The age of the user',
    type: Number,
    required: true,
    example: 30
  })
  @IsNumber()
  @IsNotEmpty()
  age: number;

}
