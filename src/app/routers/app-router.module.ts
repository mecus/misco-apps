import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const route: Route = {
    path: "", redirectTo: 'home', pathMatch: 'full'
}
const routes = [
    {path: 'home', component: HomeComponent},
    route
]

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class AppRouterModule {}