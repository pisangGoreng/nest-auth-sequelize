import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AuthenticationController } from './modules/authentication/authentication.controller';
import { UserModule } from './modules/user/user.module';
import { UserService } from './modules/user/user.service';
import { AuthenticationService } from './modules/authentication/authentication.service';
import { DatabaseModule } from './modules/database/database.module'
@Module({
  imports: [
    DatabaseModule,
    AuthenticationModule.forRoot('jwt'),
    UserModule
  ],
  controllers: [AppController, AuthenticationController],
  providers: [AppService, UserService, AuthenticationService],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    // consumer
    //   .apply(AuthenticationMiddleware)
    //   .with(strategy)
    //   .forRoutes(
    //     { path: '/users', method: RequestMethod.GET },
    //     { path: '/users/:id', method: RequestMethod.GET },
    //     { path: '/users/:id', method: RequestMethod.PUT },
    //     { path: '/users/:id', method: RequestMethod.DELETE }
    //   )
  }
}
