import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { RecipientModule } from './recipient/recipient.module';
import { AuthModule } from './auth/auth.module';


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
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
