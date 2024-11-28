import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Store } from './models/store.model';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileService } from '../file/file.service';

@ApiTags("Store")
@Injectable()
export class StoresService {
  constructor(@InjectModel(Store) private storesModel: typeof Store, private readonly fileService: FileService
){}
  @ApiOperation({ summary: "Store add"})
  async create(createStoreryDto: CreateStoreDto, image: any): Promise<Store> {
    const fileName = await this.fileService.saveFile(image)
    return this.storesModel.create({
      ...createStoreryDto,
      image: fileName
    });
  }

  @ApiOperation({summary: "Get All Store."})
  @ApiResponse({
    status: 200,
    description: "List of store.",
    type: [Store]
  })
  findAll() {
    return this.storesModel.findAll({include: {all:true}})
  }

  @ApiOperation({summary: "Get store by ID."})
  @ApiResponse({
    status: 200,
    description: "Get store by ID.",
    type: Store
  })
  findOne(id: number) {
    return this.storesModel.findOne({where: {id}});
  }

  @ApiOperation({summary: "Update One store."})
  @ApiResponse({
    status: 200,
    description: "update by ID.",
    type: Store
  })
  async update(id: number, updateStoreDto: UpdateStoreDto): Promise<Store> {
    const store = await this.storesModel.update(updateStoreDto, {
      where: {id},
      returning: true
    })

    return store[1][0];
  }

  @ApiOperation({summary: "Delete store By ID."})
  @ApiResponse({
    status: 200,
    description: "Delete By ID.",
    type: Store
  })
  remove(id: number) {
    return this.storesModel.destroy({where: {id}});
  }
}
