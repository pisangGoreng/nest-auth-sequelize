import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './passports/jwt.strategy';
import { LocalStrategy } from './passports/local.strategy';
@Module({
    // module: AuthenticationModule,
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: '6000s' },
          }),
    ],
    providers: [AuthenticationService, JwtStrategy, LocalStrategy],
    controllers: [AuthenticationController],
    exports: [AuthenticationService, JwtModule]
})
export class AuthenticationModule {}