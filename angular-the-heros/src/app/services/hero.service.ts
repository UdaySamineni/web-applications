import { Injectable } from '@angular/core'
import { HEROES } from '../mock-data/mock-heroes'
import { IHero } from '../models/hero'

@Injectable()
export class HeroService {

    getHeroes(): Promise<IHero[]> {
        return Promise.resolve(HEROES);
    }
}