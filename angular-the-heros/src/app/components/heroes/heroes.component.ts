import { Component, Output, EventEmitter } from '@angular/core';
import { IHero } from '../../models/hero';

@Component({
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    selector: 'heroes'
})

export class HeroesComponent {
    heroes = HEROES;
    selectedHero: IHero;
    @Output() selectedHeroValue: EventEmitter<any> = new EventEmitter();
    showHeroDetails(hero: IHero) {
        this.selectedHero = hero;
        this.selectedHeroValue.emit(this.selectedHero);
    }
}

const HEROES: IHero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
]