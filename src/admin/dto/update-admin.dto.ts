import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
    full_name: string
    email: string
    password: string
    is_creator: boolean
    is_active: boolean
    token: string
}

