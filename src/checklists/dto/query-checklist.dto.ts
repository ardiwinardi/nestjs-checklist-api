import { toBoolean } from '@/common/helpers/cast.helper';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class QueryChecklistDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional()
  @Transform(({ value }) => toBoolean(value))
  @IsBoolean()
  @IsOptional()
  isDone?: boolean;
}
