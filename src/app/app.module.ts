import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {SecondComponent} from './second/second.component';


const appRoutes: Routes = [
    {path: 'second', component: SecondComponent},
    {path: 'home', component: HomeComponent},
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {path: '**', component: HomeComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        HomeComponent,
        SecondComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
