import { Injectable } from '@nestjs/common';
import { HeroDto } from './dto/hero.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class HeroService {

    constructor(private prisma: PrismaService){}
    async create (data: HeroDto) {
        const hero = await this.prisma.hero.create({
            data
        })

        return hero;
    }

}


