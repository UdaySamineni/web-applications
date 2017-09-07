import { Component, Input } from '@angular/core'
import { IHero } from '../../models/hero';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Location } from '@angular/common'
import { HeroService } from '../../services/hero.service'
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
    selector: 'hero-details'
})

export class HeroDetailsComponent {
    hero: IHero;

    constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHeroDetails(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    }

    goBackPreviousPage() {
        this.location.back();
    }
}