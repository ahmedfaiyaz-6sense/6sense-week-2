import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';
//console.log(process.env.host);

@Module({
  imports: [
    TasksModule,

    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    /*TypeOrmModule.forRoot({
      type: 'postgres',
      host: String(process.env.host),
      port: Number(process.env.port),
      username: process.env.username,
      password: process.env.password,
      database: process.env.database,
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
    }),*/
  ],
})
export class AppModule {}
