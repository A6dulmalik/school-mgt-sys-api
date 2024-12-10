/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [UsersModule, SchoolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
