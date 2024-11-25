import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
//import { Task } from './tasks.model';
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  /*@Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.tasksService.createTask(title, description);
  }*/
  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDTO) {
    return this.tasksService.createTask(createTaskDTO);
  }
}
