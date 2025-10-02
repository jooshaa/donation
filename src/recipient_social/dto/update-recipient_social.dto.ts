import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipientSocialDto } from './create-recipient_social.dto';

export class UpdateRecipientSocialDto extends PartialType(CreateRecipientSocialDto) {
    socialMediaId: number
    recipientId: number
    social_url: string
}
