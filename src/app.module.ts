import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroService } from './hero/hero.service';
import { HeroController } from './hero/hero.controller';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [HeroModule],
  controllers: [AppController, HeroController],
  providers: [AppService, HeroService],
})
export class AppModule {}
