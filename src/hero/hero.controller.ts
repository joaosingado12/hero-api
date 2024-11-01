import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { HeroDto } from './dto/hero.dto';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {


    constructor(private readonly heroService: HeroService){}
    @Post()

    async create(@Body() data: HeroDto){
        return this.heroService.create(data)
    }

    @Get()

    async findAll(){
        return this.heroService.findAll()
    }

    @Put(":id")

    async update(@Param("id") id: number, @Body() data: HeroDto){
        return this.heroService.update(Number(id), data)
    }

    @Delete(":id")

    async delete(@Param("id") id: number){
        return this.heroService.delete(Number(id))
    }

    @Get(":id")

    async getByid(@Param("id") id: number, data: HeroDto){
        return this.heroService.getById(Number(id), data)
    }
    
}
