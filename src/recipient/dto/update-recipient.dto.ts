import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipientDto } from './create-recipient.dto';

export class UpdateRecipientDto extends PartialType(CreateRecipientDto) {
    full_name: string
    email: string
    password: string
    address: string
    token: string
}
