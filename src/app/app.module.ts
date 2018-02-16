import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { MaterialsModule } from './share/materials/materials.module';
import { HomeComponent } from './home/home.component';
import { AppRouterModule } from './routers/app-router.module';
import { MainNavComponent } from './navigations/main-nav/main-nav.component';
import { SideNavComponent } from './navigations/side-nav/side-nav.component';
import { FooterComponent } from './navigations/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    SideNavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    MaterialsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
