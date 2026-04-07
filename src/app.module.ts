import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'wongani18',
      database: 'online_store',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Dont use in production!

    }),
    ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
