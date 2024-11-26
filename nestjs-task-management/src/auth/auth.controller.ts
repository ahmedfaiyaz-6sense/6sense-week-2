import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthCredentialsDTO } from './dto/auth.credentials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  signUp(@Body() authCreds: AuthCredentialsDTO) {
    return this.authService.signUp(authCreds);
  }

  @Post('/login')
  login(@Body() authCreds: AuthCredentialsDTO) {
    return this.authService.signIn(authCreds);
  }
  @Get('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log('GUARD WORKING: ');
    console.log(req.status);
    //console.log(req);
  }
}
