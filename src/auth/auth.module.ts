import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from 'src/users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'your_jwt_secret_key',
      signOptions: {expiresIn: '1hr'},
    }),],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
