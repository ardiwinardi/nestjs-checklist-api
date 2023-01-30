import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import { CreateChecklistDto } from './create-checklist.dto';

export class UpdateChecklistDto extends CreateChecklistDto {
  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  isDone: boolean;
}
