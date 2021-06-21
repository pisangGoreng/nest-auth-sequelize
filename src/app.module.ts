import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/authentication/authentication.module';
import { AuthenticationController } from './modules/authentication/authentication.controller';

@Module({
  imports: [AuthModule],
  controllers: [AppController, AuthenticationController],
  providers: [AppService],
})
export class AppModule {}
