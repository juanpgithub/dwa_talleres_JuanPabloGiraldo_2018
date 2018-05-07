import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
    { path:'', component:HomeComponent },
    { path:'home', component:HomeComponent },
    { path:'main', component:MainComponent },
    { path:'main/:ident', component:MainComponent }
    // { path:'**', component:FrutasComponent }
];

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders = RouterModule.forRoot (appRoutes);
