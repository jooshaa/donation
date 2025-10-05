import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentDto } from './create-payment.dto';
import { paymentMehtod } from '../model/enum_method';

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {
        userId: number
        donateId: number
        orderId: number
        payment_method: paymentMehtod
    
}

