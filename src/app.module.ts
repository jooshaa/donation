import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { RecipientModule } from './recipient/recipient.module';
import { AuthModule } from './auth/auth.module';
import { CardsModule } from './cards/cards.module';
import { SocialMediaModule } from './social_media/social_media.module';
import { RecipientSocialModule } from './recipient_social/recipient_social.module';
import { CategoryModule } from './category/category.module';
import { ShopModule } from './shop/shop.module';
import { OrderModule } from './order/order.module';
import { DonateModule } from './donate/donate.module';
import { PaymentModule } from './payment/payment.module';



@Module({
  imports: [
    
    ConfigModule.forRoot({envFilePath: ".env", isGlobal: true}),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      autoLoadModels: true,
      logging: false,
      sync: { force: true }
    }),
    AdminModule,
    UserModule,
    RecipientModule,
    AuthModule,
    CardsModule,
    SocialMediaModule,
    RecipientSocialModule,
    CategoryModule,
    ShopModule,
    OrderModule,
    DonateModule,
    PaymentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
