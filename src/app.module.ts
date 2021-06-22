import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

/*  Module */
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './modules/database/database.module'

/*  Controller */
import { AppController } from './app.controller';
import { AuthenticationController } from './modules/authentication/authentication.controller';

/*  Service */
import { AppService } from './app.service';
import { AuthenticationService } from './modules/authentication/authentication.service';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AuthenticationModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
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
