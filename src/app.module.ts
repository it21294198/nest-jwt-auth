import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),   
    TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite', // Database file name
    entities: [__dirname + '/**/*.entity{.ts,.js}'], // Path to entity files
    synchronize: true, // Synchronize the database with the entities
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
