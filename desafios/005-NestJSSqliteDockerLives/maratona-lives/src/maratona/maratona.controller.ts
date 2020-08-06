import { Controller, Get, Req, Post, Request } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Maratona } from './maratona.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Controller('maratona')
export class MaratonaController {
    constructor(
        @InjectRepository(Maratona)
        private maratonaRepo: Repository<Maratona>
    ) { }

    @Get()
    index() {
        return this.maratonaRepo.find()
    }

    // @Get("create")
    // async create_maratona() {
    //     const ref = await this.maratonaRepo.create({
    //         name: "O universo do desenvolvimento no Mercado Livre - Daniel Ambrosio",
    //         link: "https://youtu.be/MRSZAfU1oT0",
    //         created_at: new Date()
    //     });
    //     return this.maratonaRepo.save(ref);
    // }

    @Post("create")
    async store(@Req() request: Request) {
        const ref = await this.maratonaRepo.create({
            ...request.body,
            created_at: new Date()
        });
        return this.maratonaRepo.save(ref);
    }
}
