import { Controller, Get, HttpStatus, Post, Res, UseGuards, Body, Param, Put, Delete } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('/users')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Get()
  // @UseGuards(CheckLoggedInUserGuard)
  public async index(@Res() res) {
    const users = await this.userService.findAll();
    return res.status(HttpStatus.OK).json(users);
  }

  @Get(':id')
  // @UseGuards(CheckLoggedInUserGuard)
  public async show(@Param() param, @Res() res) {
    if (!param.id) throw new Error('Missing id.');

    const userId = Number(param.id)
    const user = await this.userService.findById(userId);
    return res.status(HttpStatus.OK).json(user);
  }

  @Post()
  public async create(@Body() body: any, @Res() res) {
    if (!body || (body && Object.keys(body).length === 0)) throw new Error('Missing some information.');

    await this.userService.create(body);
    return res.status(HttpStatus.CREATED).send()
  }

  @Put(':id')
  // @UseGuards(CheckLoggedInUserGuard)
  public async update(@Param() param, @Body() body, @Res() res) {
    if (!param.id) throw new Error('Missing id.');

    const userId = Number(param.id)
    await this.userService.update(userId, body);
    return res.status(HttpStatus.OK).send();
  }

  @Delete(':id')
  // @UseGuards(CheckLoggedInUserGuard)
  public async delete(@Param() param, @Res() res) {
    if (!param.id) throw new Error('Missing id.');

    const userId = Number(param.id)
    await this.userService.delete(userId);
    return res.status(HttpStatus.OK).send();
  }
}