import { Component } from '@angular/core';
import {IHero} from '../../models/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  selectedHeroValue: string;

  selectedHero(event){
    this.selectedHeroValue = event; 
  }
}