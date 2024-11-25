import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { Task } from './tasks.model';
import { GetTaskFilterDTO } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDTO } from './dto/update-tasks-status.dto';
//import { Task } from './tasks.model';
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  /*@Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }*/
  @Get()
  getAllTasks(@Query() filterData: GetTaskFilterDTO): Task[] {
    if (Object.keys(filterData).length) {
      return this.tasksService.getTasksWithFilter(filterData);
    } else {
      return this.tasksService.getAllTasks();
    }
  }
  @Get(':id')
  getTask(@Param('id') id: string): Task {
    return this.tasksService.getTaskByID(id);
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

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTaskById(id);
  }

  @Patch(':id/status')
  updateTaskStatusById(
    @Param('id') id: string,
    //@Body('status') status: TaskStatus,
    @Body() updateTaskStatusDTO: UpdateTaskStatusDTO,
  ) {
    return this.tasksService.updateTaskStatusById(id, updateTaskStatusDTO);
  }
}
