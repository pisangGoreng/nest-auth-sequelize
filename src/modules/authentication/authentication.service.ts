import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken'


@Injectable()
export class AuthenticationService {
  constructor(
    // private readonly userService: UserService
  ) {}

  createToken(email: string, ttl?: string) { // ttl => time to live
    const expiresIn = ttl || 60 * 60;
    const secretOrKey = 'secret'
    const user = { email }
    const token = jwt.sign(user, secretOrKey, { expiresIn })
    return {
      expires_in: expiresIn,
      access_token: token
    }
  }

  async validateUser(payload: { email: string, password: string}): Promise<boolean> {
    // const user = await this.userService.findOne({
    //   where: { email: payload.email }
    // })
    const user = true

    return !!user;
  }
}
