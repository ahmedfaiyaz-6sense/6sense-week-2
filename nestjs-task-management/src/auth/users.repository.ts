import { Repository } from 'typeorm';
import { User } from './users.entity';

//@Injectable()
export class TasksRepository extends Repository<User> {}
