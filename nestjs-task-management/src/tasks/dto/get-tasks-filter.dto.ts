import { TaskStatus } from '../tasks.model';
import { IsEnum, IsOptional, IsString } from 'class-validator';
export class GetTaskFilterDTO {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
  @IsOptional()
  @IsString()
  search?: string;
}
