import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChecklistsModule } from './checklists/checklists.module';

console.log(process.env.MONGODB_CONNECTION_URI);
@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGODB_CONNECTION_URI}`),
    ChecklistsModule,
  ],
})
export class AppModule {}
