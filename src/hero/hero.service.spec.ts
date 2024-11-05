// hero.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { HeroService } from './hero.service';
import { PrismaService } from '../database/prisma.service';
import { HeroDto } from './dto/hero.dto';

describe('HeroService', () => {
    let service: HeroService;
    let prismaService: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [HeroService, PrismaService],
        }).compile();

        service = module.get<HeroService>(HeroService);
        prismaService = module.get<PrismaService>(PrismaService);
    });

    it('should create a hero', async () => {
        // Simulando um herói que será criado
        const heroDto: HeroDto = {civilName: 'Clark Kent', heroName: "Superman", age:21, team: "Liga da justiça" };
        const createHeroDto = { id: 1, ...heroDto } as { id: number; civilName: string; heroName: string; age: number; team: string };

        // Mocking do Prisma para garantir que ele retorne o resultado esperado
        jest.spyOn(prismaService.hero, 'create').mockResolvedValue(createHeroDto);

        // Chamando o método `create` e verificando o resultado
        const result = await service.create(heroDto);
        expect(result).toEqual(createHeroDto);
    });
});
