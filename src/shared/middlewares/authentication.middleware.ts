import { Injectable, NestMiddleware, HttpStatus } from "@nestjs/common";
// import * as passport from 'passport';
import { Request, Response, NextFunction } from 'express';

import { UserService } from "src/modules/user/user.service";

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(
    private userService: UserService
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    next()
  }

  // async resolve(strategy: string) {
  //   // use(req: Request, res: Response, next: NextFunction) {
  //   //   console.log('Request...');
  //   //   next();
  //   // }

  //   return (req, res, next) => {
  //     return passport.authenticate(strategy, async (...args: any[]) => {
  //       const [, payload, err] = args;
  //       if (err) {
  //           return res
  //               .status(HttpStatus.BAD_REQUEST)
  //               .send('Unable to authenticate the user.');
  //       }

  //       const user = await this.userService.findOne({
  //           where: { email: payload.email }
  //       });
  //       req.user = user;
  //       return next();
  //     })(req, res, next);
  //   }
  // }
}