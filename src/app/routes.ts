import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes =
[
    { path: 'home'            , component: HomeComponent },
    { path: '**'              , redirectTo: 'home' }
];

@NgModule
    (
    {
        exports: [RouterModule],
        imports: [RouterModule.forRoot(routes)],
    }
    )
export class AppRoutingModule { }
