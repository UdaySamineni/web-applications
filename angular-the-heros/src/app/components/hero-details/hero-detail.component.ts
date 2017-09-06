import {Component, Input} from '@angular/core'
import {IHero} from '../../models/hero';

@Component({
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
    selector: 'hero-details'
})

export class HeroDetailsComponent{
@Input() hero: IHero = {name: 'Johnny Depp', id: 1};
}