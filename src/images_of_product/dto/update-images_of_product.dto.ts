import { PartialType } from '@nestjs/swagger';
import { CreateImagesOfProductDto } from './create-images_of_product.dto';

export class UpdateImagesOfProductDto extends PartialType(CreateImagesOfProductDto) {}
