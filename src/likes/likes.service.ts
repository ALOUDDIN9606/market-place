import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Like } from './models/like.model';

@Injectable()
export class LikesService {
  constructor(@InjectModel(Like) private likeModel: typeof Like){}
  create(createLikeDto: CreateLikeDto) {
    return this.likeModel.create(createLikeDto);
  }

  findAll() {
    return this.likeModel.findAll({include: {all:true}});
  }

  findOne(id: number) {
    return this.likeModel.findOne({where: {id}});
  }

  async update(id: number, updateLikeDto: UpdateLikeDto): Promise<Like> {
    const likes = await this.likeModel.update(updateLikeDto, {
      where: {id},
      returning: true
    })
    return likes[1][0];
  }

  remove(id: number) {
    return this.likeModel.destroy({where: {id}});
  }
}
