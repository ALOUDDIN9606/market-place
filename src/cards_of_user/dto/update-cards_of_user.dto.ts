import { PartialType } from '@nestjs/swagger';
import { CreateCardsOfUserDto } from './create-cards_of_user.dto';

export class UpdateCardsOfUserDto extends PartialType(CreateCardsOfUserDto) {}
