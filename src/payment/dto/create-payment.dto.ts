import { paymentMehtod } from "../model/enum_method"

export class CreatePaymentDto {
        userId: number
        donateId: number
        orderId: number
        payment_method: paymentMehtod
    }

