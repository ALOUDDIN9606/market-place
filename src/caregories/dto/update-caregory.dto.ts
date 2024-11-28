import { PartialType } from '@nestjs/mapped-types';
import { CreateCaregoryDto } from './create-caregory.dto';

export class UpdateCaregoryDto extends PartialType(CreateCaregoryDto) {}
