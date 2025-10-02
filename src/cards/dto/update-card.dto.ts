import { PartialType } from '@nestjs/mapped-types';
import { CreateCardDto } from './create-card.dto';

export class UpdateCardDto extends PartialType(CreateCardDto) {
    card_type: string
    card_number: string
    recipientId: number
    expirty_date: string
}
