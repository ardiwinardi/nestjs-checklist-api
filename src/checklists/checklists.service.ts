import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChecklistDto } from './dto/create-checklist.dto';
import { QueryChecklistDto } from './dto/query-checklist.dto';
import { UpdateChecklistDto } from './dto/update-checklist.dto';
import { Checklist, ChecklistDocument } from './schemas/checklist.schema';

@Injectable()
export class ChecklistsService {
  constructor(
    @InjectModel(Checklist.name)
    private checklistModel: Model<ChecklistDocument>,
  ) {}

  create(createChecklistDto: CreateChecklistDto): Promise<Checklist> {
    const createdChecklist = new this.checklistModel({
      name: createChecklistDto.name,
      isDone: false,
      createdAt: new Date(),
      createdBy: 'user',
    });
    return createdChecklist.save();
  }

  findAll(queryChecklistDto: QueryChecklistDto): Promise<Checklist[]> {
    return this.checklistModel.find(queryChecklistDto).exec();
  }

  async update(
    id: string,
    updateChecklistDto: UpdateChecklistDto,
  ): Promise<Checklist> {
    const item = await this.checklistModel.findByIdAndUpdate(id, {
      name: updateChecklistDto.name,
      isDone: updateChecklistDto.isDone,
      updatedAt: new Date(),
      updatedBy: 'user',
    });

    if (!item) throw new NotFoundException();
    return item;
  }

  async remove(id: string): Promise<Checklist> {
    const item = await this.checklistModel.findByIdAndRemove(id);
    if (!item) throw new NotFoundException();
    return item;
  }
}
