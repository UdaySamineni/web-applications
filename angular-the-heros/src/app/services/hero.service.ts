import { Injectable } from '@angular/core'
import { HEROES } from '../mock-data/mock-heroes'
import { IHero } from '../models/hero'

@Injectable()
export class HeroService {

    getHeroes(): Promise<IHero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowely(): Promise<IHero[]> {
        var results: Promise<IHero[]> = new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.getHeroes());
            }, 5000);
        });
        return results;
    }

    getHeroDetails(id: number): Promise<IHero> {
        var hero = HEROES.find((hero) => {
            return hero.id === id;
        });
        return Promise.resolve(hero);
    }
}