import * as crypto from 'crypto';
import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    // private readonly userService: UserService
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(
    @Body() body:any,
    @Res() res
  ):  Promise<any> {
    if (!body.email || !body.password) {
      return res.status(HttpStatus.BAD_REQUEST).send('Missing email or password')
    }

    // const user = await this.userService.findOne({
    //   where: {
    //     email: body.email,
    //     password: crypto.createHmac('sha256', body.password).digest('hex') }
    // })
    const user = {
      email: '7ofpentacles@gmail.com'
    }

    if (!user) {
      return res
          .status(HttpStatus.NOT_FOUND)
          .send('No user found with this email and password.');
    }

    const result = this.authenticationService.createToken(user.email);
    return res.json(result);
  }
}
