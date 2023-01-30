import { Exclude } from 'class-transformer';
import { Checklist } from '../schemas/checklist.schema';

export class ChecklistEntity {
  id: string;
  name: string;
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;

  @Exclude()
  created_by: string;

  @Exclude()
  updated_by: string;

  constructor(checklist: Checklist) {
    this.id = checklist._id;
    this.name = checklist.name;
    this.isDone = checklist.isDone;
    this.createdAt = checklist.createdAt;
    this.updatedAt = checklist.updatedAt;
  }
}
