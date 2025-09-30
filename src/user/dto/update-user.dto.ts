import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    full_name: string
    email: string
    password: string
    card_number: string
    is_active: boolean
    token: string
}
