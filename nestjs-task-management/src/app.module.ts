import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
//console.log(process.env.host);

@Module({
  imports: [
    TasksModule,

    ConfigModule.forRoot({
      //envFilePath: ['.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: String(process.env.host),
      port: Number(process.env.port),
      username: process.env.username,
      password: process.env.password,
      database: process.env.database,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
