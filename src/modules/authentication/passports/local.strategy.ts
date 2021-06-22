import { Strategy as StrategyLocal } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(StrategyLocal) {
  // constructor(private authenticationService: AuthenticationService) {
  //   super();
  // }

  // async validate(username: string, password: string) {

  //   console.log({
  //     username,
  //     password
  //   })

  //   // const user = await this.authenticationService.validateUser(username, password);
  //   // if (!user) {
  //   //   throw new UnauthorizedException();
  //   // }
  //   // return user;
  // }
}