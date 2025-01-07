/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ClassroomModule } from './classroom/classroom.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
// import { User } from './users/user.entity';
import { ClassroomModule } from './classroom/classroom.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    UsersModule, 
    ClassroomModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'school-mgt-sys',
      // entities: [User],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TeacherModule,
    StudentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { 
  constructor (private dataSoure: DataSource) {}
}
