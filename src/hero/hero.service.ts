import { Injectable } from '@nestjs/common';
import { HeroDto } from './dto/hero.dto';
import { PrismaService } from 'src/database/prisma.service';
import { error } from 'console';

@Injectable()
export class HeroService {

    constructor(private prisma: PrismaService){}
    async create (data: HeroDto) {
        const hero = await this.prisma.hero.create({
            data
        })

        return hero;
    }

    async findAll(){
        return await this.prisma.hero.findMany();
    }

    async update(id: number, data: HeroDto){
        const heroExist = this.prisma.hero.findUnique({
            where : {
                id,
            }
        });

        if(!heroExist){
            throw new error("Herói não encontrado!")
        }

        return await this.prisma.hero.update({
            where: {
                id,
            },
            data
        })
    }

    async delete(id: number){
        const heroExist = this.prisma.hero.findUnique({
            where:{
                id,
            }
        })
        if(!heroExist){
            throw new error("Herói não encontrado")
        }
        return await this.prisma.hero.delete({
            where:{
                id,
            }
        })
    }

    async getById(id: number, data: HeroDto){

        const heroExist = this.prisma.hero.findUnique({
            where : {
                id,
            }
        });
        if(!heroExist){
            throw new error("Herói não encontrado")
        }

        return await heroExist

    }
}


