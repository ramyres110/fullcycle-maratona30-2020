import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaratonaController } from './maratona/maratona.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Maratona } from './maratona/maratona.entity';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      //@ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      database: process.env.TYPEORM_DATABASE,
      entities: [Maratona]
    }),
    TypeOrmModule.forFeature([Maratona])
  ],
  controllers: [AppController, MaratonaController],
  providers: [AppService],
})
export class AppModule { }
