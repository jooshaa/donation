import { PartialType } from '@nestjs/mapped-types';
import { CreateDonateDto } from './create-donate.dto';

export class UpdateDonateDto extends PartialType(CreateDonateDto) {
    recipientId: number
    userId: number
    notification: string
    is_anonimPay: boolean
}
