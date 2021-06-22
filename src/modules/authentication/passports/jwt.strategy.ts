import * as passport from 'passport';
import { Injectable } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthenticationService } from '../authentication.service';

@Injectable()
export default class JwtStrategy extends Strategy {
  constructor(
    private readonly authenticationService: AuthenticationService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // ! method to extract the token from the request
      passReqToCallback: true,
      secretOrKey: 'secret'
    }, async (req, payload, next) => await this.verify(req, payload, next));
    passport.use(this);
  }

  public async verify(req, payload, done) {
    // const isValid = await this.authenticationService.validateUser(payload);
    const isValid = true
    if (!isValid) {
      return done('Unauthorized', null);
    } else {
      return done(null, payload);
    }
  }
}