import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from '../components/heroes/heroes.component'
import { HeroDetailsComponent } from '../components/hero-details/hero-detail.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component'

import { NgModule } from '@angular/core'

var routes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'hero-details/:id',
        component: HeroDetailsComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }