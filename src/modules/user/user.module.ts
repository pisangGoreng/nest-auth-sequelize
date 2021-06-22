import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from '../database/database.module';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { userProvider } from './user.provider';
import { UserService } from './user.service';

@Module({
  imports: [
    // SequelizeModule.forFeature([User]),
    DatabaseModule
  ],
  controllers: [UserController],
  providers: [UserService, userProvider],
  exports: [
    // SequelizeModule,
    UserService
  ]
})
export class UserModule {}
