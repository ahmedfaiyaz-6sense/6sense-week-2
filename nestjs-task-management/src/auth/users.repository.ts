import { Repository } from 'typeorm';
import { User } from './users.entity';

//@Injectable()
export class UsersRepository extends Repository<User> {}
