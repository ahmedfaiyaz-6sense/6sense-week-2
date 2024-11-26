import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTaskFilterDTO } from './dto/get-tasks-filter.dto';
//import { UpdateTaskStatusDTO } from './dto/update-tasks-status.dto';
import { Task } from './tasks.entity';
import { TaskStatus } from './tasks.status.enum';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/users.entity';
import { GetUser } from 'src/auth/get-user.decorator';
//import { AppDataSource } from 'src/db';
@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private tasksService: TasksService) {}
  /*@Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }*/
  /*@Get()
  getAllTasks(@Query() filterData: GetTaskFilterDTO): Task[] {
    if (Object.keys(filterData).length) {
      return this.tasksService.getTasksWithFilter(filterData);
    } else {
      return this.tasksService.getAllTasks();
    }
  }*/
  @Get()
  getAllTasks(
    @Query() filterDTO: GetTaskFilterDTO,
    @GetUser() user: User,
  ): Promise<Task[]> {
    return this.tasksService.getAllTasks(filterDTO,user);
  }

  @Get(':id')
  getTask(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  /*@Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.tasksService.createTask(title, description);
  }*/
  @Post()
  createTask(
    @Body() createTaskDTO: CreateTaskDTO,
    @GetUser() user: User,
  ): Promise<Task> {
    return this.tasksService.createTask(createTaskDTO,user);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTaskById(id);
  }

  @Patch(':id/status')
  updateTaskStatusById(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
    //@Body() updateTaskStatusDTO: UpdateTaskStatusDTO,
  ) {
    return this.tasksService.updateTaskStatusById(id, status);
  }
}
