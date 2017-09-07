import { Component } from '@angular/core'
import { HeroService } from '../../services/hero.service'
import { IHero } from '../../models/hero'

@Component({
    templateUrl: `./dashboard.component.html`,
    styleUrls: ["./dashboard.component.css"],
    selector: 'dashboard'
})

export class DashboardComponent {
    constructor(private heroService: HeroService) { }
    topHeroes: IHero[];

    ngOnInit() {
        this.heroService.getHeroes().then((result) => {
            this.topHeroes = result.filter(x => x.id < 15);
        });
    }
}