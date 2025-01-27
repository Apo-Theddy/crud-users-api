import { Controller, Get, Post, Delete, Put, Param, Query, Body, ParseIntPipe, HttpCode, HttpStatus, NotFoundException } from "@nestjs/common";
import { UserService } from "../../application/services/user.service";
import { QueryFilterDTO } from "../../application/dtos/query-filter.dto";
import { UpdateUserDTO } from "../../application/dtos/update-user.dto";
import { CreateUserDTO } from "../../application/dtos/create-user.dto";
import { ApiBody, ApiTags, ApiResponse, ApiParam, ApiOperation, ApiQuery } from "@nestjs/swagger";

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    private readonly service: UserService
  ) { }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users' })
  @HttpCode(HttpStatus.OK)
  @Get("/all")
  public async getAllUsers(@Query() dto: QueryFilterDTO) {
    const response = await this.service.getAllUsers(dto);
    return response;
  }

  @ApiOperation({ summary: 'Get user by id' })
  @ApiParam({ name: 'id', required: true, type: Number, description: 'The id of the user' })
  @ApiResponse({ status: 200, description: 'Return a user' })
  @HttpCode(HttpStatus.OK)
  @Get("/by-id/:id")
  public async getUserById(@Param('id') id: number) {
    const response = await this.service.getUserById(id);
    return response;
  }

  @ApiOperation({ summary: 'Search users' })
  @ApiQuery({ name: 'query', required: true, type: String, description: 'The query to search users' })
  @ApiResponse({ status: 200, description: 'Return users' })
  @HttpCode(HttpStatus.OK)
  @Get("/search")
  public async search(@Query('query') query: string) {
    const response = await this.service.search(query);
    return response;
  }

  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateUserDTO, required: true, description: 'The user to be created' })
  @ApiResponse({ status: 201, description: 'User created' })
  @HttpCode(HttpStatus.CREATED)
  @Post("/")
  public async createUser(@Body() dto: CreateUserDTO) {
    const response = await this.service.createUser(dto);
    return response;
  }

  @ApiOperation({ summary: 'Update a user' })
  @ApiBody({ type: UpdateUserDTO, required: true, description: 'The user to be updated' })
  @ApiResponse({ status: 201, description: 'User updated' })
  @HttpCode(HttpStatus.CREATED)
  @Put("/")
  public async updateUser(@Body() dto: UpdateUserDTO) {
    const response = await this.service.updateUser(dto);
    return response;
  }

  @ApiOperation({ summary: 'Delete a user' })
  @ApiParam({ name: 'id', required: true, type: Number, description: 'The id of the user to be deleted' })
  @ApiResponse({ status: 200, description: 'User deleted' })
  @HttpCode(HttpStatus.OK)
  @Delete("/:id")
  public async deleteUser(@Param('id', ParseIntPipe) id: number) {
    const response = await this.service.deleteUser(id);
    return response;
  }

}
