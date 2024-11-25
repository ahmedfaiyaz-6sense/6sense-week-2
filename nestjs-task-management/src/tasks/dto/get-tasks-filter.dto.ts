import { TaskStatus } from '../tasks.model';
import { IsNotEmpty } from 'class-validator';
export class GetTaskFilterDTO {
  @IsNotEmpty()
  status?: TaskStatus;
  @IsNotEmpty()
  search?: string;
}
