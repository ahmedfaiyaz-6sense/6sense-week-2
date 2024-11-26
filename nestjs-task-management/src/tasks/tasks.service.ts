import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './tasks.status.enum';
//import { v6 as uuid } from 'uuid';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTaskFilterDTO } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDTO } from './dto/update-tasks-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksRepository } from './tasks.repository';
import { Task } from './tasks.entity';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: TasksRepository,
  ) {}
  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!found) {
      throw new NotFoundException(`Task Id "${id}" not found`);
    }
    return found;
  }
  /*private tasks: Task[] = [];
  public getAllTasks() {
    return this.tasks;
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
  /* const foundTask = this.tasks.find((task) => {
      if (task.id == id) {
        return task;
      }
    });
    if (foundTask) {
      return foundTask;
    } else {
      throw new NotFoundException();
    }
  }
  public deleteTaskById(id: string) {
    /*my implementation
    const task = this.getTaskByID(id);
    const task_index = this.tasks.indexOf(task);
    console.log(task_index);
    if (task_index != -1) {
      // const temp = { ...task };
      delete this.tasks[task_index];
      return 'Deleted';
    } else {
      return {};
    }*/
  /*tutorial */
  /*const prev_length = this.tasks.length;
    this.tasks = this.tasks.filter((task) => task.id !== id);
    const current_length = this.tasks.length;
    if (prev_length == current_length) {
      return new NotFoundException();
    }
  }
  public updateTaskStatusById(
    id: string,
    updateTaskStatusDTO: UpdateTaskStatusDTO,
  ) {
    const { status } = updateTaskStatusDTO;
    /*let updated_task = {};
    this.tasks = this.tasks.filter((task) => {
      if (task.id === id) {
        if (status.toUpperCase() == TaskStatus.DONE) {
          task.status = TaskStatus.DONE;
        }
        if (status.toUpperCase() == TaskStatus.IN_PROGRESS) {
          task.status = TaskStatus.IN_PROGRESS;
        }
        if (status.toUpperCase() == TaskStatus.OPEN) {
          task.status = TaskStatus.OPEN;
        }
        updated_task = task;
      }
      return task;
    });
    return updated_task;*/
  /*const task = this.getTaskByID(id);
    let updated_task = {};
    if (task) {
      if (status.toUpperCase() == TaskStatus.DONE) {
        task.status = TaskStatus.DONE;
      }
      if (status.toUpperCase() == TaskStatus.IN_PROGRESS) {
        task.status = TaskStatus.IN_PROGRESS;
      }
      if (status.toUpperCase() == TaskStatus.OPEN) {
        task.status = TaskStatus.OPEN;
      }
      updated_task = task;
    }
    return updated_task;
  }

  public getTasksWithFilter(filterDTO: GetTaskFilterDTO) {
    const { status, search } = filterDTO;
    let all_tasks = this.getAllTasks();
    //console.log(all_tasks)
    if (status) {
      all_tasks = all_tasks.filter((task) => {
        if (task.status == status) {
          return task;
        }
      });
    }

    if (search) {
      all_tasks = all_tasks.filter((task) => {
        if (task.title.includes(search) || task.status.includes(search)) {
          return true;
        }
        return false;
      });
    }
    return all_tasks;
  }*/
}
