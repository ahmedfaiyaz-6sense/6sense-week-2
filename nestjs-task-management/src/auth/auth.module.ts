import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { JWTStrategy } from './jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      //envFilePath: ['.env'],
      isGlobal: true,
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([User]),
  ],

  providers: [AuthService, JWTStrategy],
  controllers: [AuthController],
  exports: [JWTStrategy, PassportModule],
})
export class AuthModule {}
