import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from './UserAuthGuard';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // curl http://localhost:3000/user -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiMTIzQGdtYWlsLmNvbSIsImlhdCI6MTcxNDMzMTI2NSwiZXhwIjoxNzE0MzMxNTY1fQ.0z-LXUjd_g5BnRz4AVA9q6I6Vpx84e7JVVJKrQ_oT30"
  @Get()
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard)
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  signIn(@Body() createUserDto: CreateUserDto) {
    return this.userService.signIn(createUserDto.email, createUserDto.password);
  }

  @Get('users')
  findAllTestUsers() {
    return this.userService.findAll();
  }


}

/**
 {
"email":"",
"password":""
}
 */