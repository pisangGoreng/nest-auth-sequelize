import { Controller, Get, HttpStatus, Post, Res, UseGuards, Body, Param, Put, Delete } from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthGuard } from '@nestjs/passport';

@Controller('/users')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  public async index(@Res() res) {
    const [users, error] = await this.userService.findAll();
    if (error) {
      return res.status(HttpStatus.FORBIDDEN).json(error);
    }

    return res.status(HttpStatus.OK).json(users);
  }


  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  public async show(@Param() param, @Res() res) {
    if (!param.id) throw new Error('Missing id.');

    const userId = Number(param.id)
    const [users, error] = await this.userService.findById(userId);
    if (error) {
      return res.status(HttpStatus.FORBIDDEN).json(error);
    }

    return res.status(HttpStatus.OK).json(users);
  }

  @Post()
  public async create(
    @Body() body: any,
    @Res() res
  ) {
    if (!body || (body && Object.keys(body).length === 0)) throw new Error('Missing some information.');
    const [users, error] = await this.userService.create(body)
    if (error) {
      return res.status(HttpStatus.FORBIDDEN).json(error);
    }

    return res.status(HttpStatus.OK).json(users);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  public async update(
    @Param() param,
    @Body() body,
    @Res() res
  ) {
    if (!param.id) throw new Error('Missing id.');

    const userId = Number(param.id)
    const [users, error] = await this.userService.update(userId, body);
    if (error) {
      return res.status(HttpStatus.FORBIDDEN).json(error);
    }

    return res.status(HttpStatus.OK).json(users);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  public async delete(
    @Param() param,
    @Res() res
  ) {
    if (!param.id) throw new Error('Missing id.');

    const userId = Number(param.id)
    const [users, error] = await this.userService.delete(userId);
    if (error) {
      return res.status(HttpStatus.FORBIDDEN).json(error);
    }

    return res.status(HttpStatus.OK).json(users);
  }
}