import { ParseObjectIdPipe } from '@/common/pipes/parse-object-id.pipe';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ChecklistsService } from './checklists.service';
import { CreateChecklistDto } from './dto/create-checklist.dto';
import { QueryChecklistDto } from './dto/query-checklist.dto';
import { UpdateChecklistDto } from './dto/update-checklist.dto';
import { ChecklistEntity } from './entities/checklist.entity';

@Controller('checklists')
@ApiTags('checklists')
export class ChecklistsController {
  constructor(private readonly checklistsService: ChecklistsService) {}

  @Post()
  async create(
    @Body() createChecklistDto: CreateChecklistDto,
  ): Promise<ChecklistEntity> {
    const response = await this.checklistsService.create(createChecklistDto);
    return new ChecklistEntity(response);
  }

  @Get()
  async findAll(
    @Query() queryChecklistDto: QueryChecklistDto,
  ): Promise<ChecklistEntity[]> {
    const response = await this.checklistsService.findAll(queryChecklistDto);
    return response.map((item) => new ChecklistEntity(item));
  }

  @Patch(':id')
  async update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateChecklistDto: UpdateChecklistDto,
  ): Promise<ChecklistEntity> {
    const response = await this.checklistsService.update(
      id,
      updateChecklistDto,
    );
    return new ChecklistEntity(response);
  }

  @Delete(':id')
  async remove(
    @Param('id', ParseObjectIdPipe) id: string,
  ): Promise<ChecklistEntity> {
    const response = await this.checklistsService.remove(id);
    return new ChecklistEntity(response);
  }
}
