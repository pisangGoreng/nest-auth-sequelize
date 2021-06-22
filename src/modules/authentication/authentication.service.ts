import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken'
import { IUser } from '../user/interfaces/IUser';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService
  ) {}

  createToken(user: IUser) { // ttl => time to live
    delete user.password
    const token = this.jwtService.sign(user)
    return [{message: 'ok', data: {token}}, null]
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne({
      where: { email, password }
    })

    return !!user;
  }
}
