import { Component } from '@angular/core';
import { IHero } from '../../models/hero';
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent {
  title = 'Tour of Heroes';
  selectedHeroValue: string;

  constructor(private heroService: HeroService) { }

  selectedHero(event) {
    this.selectedHeroValue = event;
  }
}