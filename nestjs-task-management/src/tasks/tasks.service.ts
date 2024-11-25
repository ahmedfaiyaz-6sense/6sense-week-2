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

  public createTask(createTaskDTO: CreateTaskDTO): Task {
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
  public getTaskByID(id: string) {
    /*for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].id === id) {
        return tasks[i];
      }
    }
    return {
      message: 'Found nothing',
    };*/
    return this.tasks.find((task) => {
      if (task.id == id) {
        return task;
      }
    });
  }
  public deleteTaskById(id: string) {
    const task = this.getTaskByID(id);
    const task_index = this.tasks.indexOf(task);
    console.log(task_index);
    if (task_index != -1) {
      // const temp = { ...task };
      delete this.tasks[task_index];
      return 'Deleted';
    } else {
      return {};
    }
  }
}
