import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDTO } from './dto/auth.credentials.dto';
import { User } from './users.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: UsersRepository,
  ) {}
  async signUp(authCreds: AuthCredentialsDTO): Promise<User> {
    const { username, password } = authCreds;

    const salt = await bcrypt.genSalt();
    const hashed_password = await bcrypt.hash(password, salt);

    const user = this.usersRepository.create({
      username: username,
      password: hashed_password,
    });
    try {
      const created_user = await this.usersRepository.save(user);
      return created_user;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException('Server error.');
      }
    }
  }
  async signIn(authCreds: AuthCredentialsDTO): Promise<string> {
    const { username, password } = authCreds;
    const user = await this.usersRepository.findOne({
      where: { username: username },
    });

    const verify = await bcrypt.compare(password, user.password);
    if (user && verify) {
      return 'success';
    }
    throw new UnauthorizedException('CHeck your authentication credentials');
  }
}
