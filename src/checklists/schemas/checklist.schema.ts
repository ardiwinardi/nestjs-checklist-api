import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChecklistDocument = HydratedDocument<Checklist>;

@Schema()
export class Checklist {
  _id: string;

  @Prop()
  name: string;

  @Prop()
  isDone: boolean;

  @Prop()
  createdBy: string;

  @Prop()
  updatedBy: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const ChecklistSchema = SchemaFactory.createForClass(Checklist);
