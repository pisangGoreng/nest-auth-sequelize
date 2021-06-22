import * as crypto from 'crypto';
import { AuthGuard } from '@nestjs/passport';
import { Body, Controller, HttpCode, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UserService } from '../user/user.service';
import { IUser } from '../user/interfaces/IUser';

@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly userService: UserService
  ) {}

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  public async login(
    @Body() body:any,
    @Res() res
  ):  Promise<any> {
    if (!body.email || !body.password) {
      return res.status(HttpStatus.BAD_REQUEST).send('Missing email or password')
    }

    const user = await this.userService.findOne({
      where: {
        email: body.email,
        // password: crypto.createHmac('sha256', body.password).digest('hex')
        password: body.password
      }
    })

    if (!user) {
      return res
          .status(HttpStatus.NOT_FOUND)
          .send('No user found with this email and password.');
    }

    const result = this.authenticationService.createToken(user['dataValues']);
    return res.json(result);
  }

  @Post('/register')
  @HttpCode(HttpStatus.OK)
  public async register(
    @Body() body : IUser,
    @Res() res
    ) {
    const user = await this.userService.create(body)
    return res.json(user);
    }
}
