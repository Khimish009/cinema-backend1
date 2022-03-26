import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';

@Injectable()
export class AuthService {
  constructor(
    @Injectable(UserModel) private readonly UserModel: ModelType<UserModel>
  ) {}

  async register(dto:any) {
    return this
  }

}
