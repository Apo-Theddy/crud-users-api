import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, Min } from "class-validator";

export class QueryFilterDTO {
  @ApiProperty({
    description: 'The page number',
    type: Number,
    required: false,
    example: 1
  })
  @IsNumber()
  @IsOptional()
  @Min(1)
  page?: number = 1;
}
