import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v6 as uuid } from 'uuid';
import { CreateTaskDTO } from './dto/create-task.dto';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  public getAllTasks() {
    return this.tasks;
  }

  public createTask(createTaskDTO:CreateTaskDTO): Task {
    const { title, description } = createTaskDTO;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
