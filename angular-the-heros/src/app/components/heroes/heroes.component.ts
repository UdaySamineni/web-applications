import { Component, Output, EventEmitter } from '@angular/core';
import { IHero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    selector: 'heroes',
    providers: [HeroService]
})

export class HeroesComponent {
    heroes: IHero[];
    selectedHero: IHero;
    @Output() selectedHeroValue: EventEmitter<any> = new EventEmitter();

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes().then((result) => {
            this.heroes = result;
        });
    }

    showHeroDetails(hero: IHero): void {
        this.selectedHero = hero;
        this.selectedHeroValue.emit(this.selectedHero);
    }
}