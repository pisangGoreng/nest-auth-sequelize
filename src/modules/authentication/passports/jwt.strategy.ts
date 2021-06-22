import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy as StrategyJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(StrategyJwt) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // ! method to extract the token from the request
      ignoreExpiration: true,
      secretOrKey: 'secret'
    });
  }

  async validate(payload: any) {
    return { user: payload };
  }
}