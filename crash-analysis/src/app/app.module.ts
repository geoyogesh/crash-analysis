import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbModule, ButtonModule, CheckboxModule, DropdownModule, GridModule,
  IconModule, Label, LinkModule, PaginationModule, TableModule, TabsModule, TilesModule, UIShellModule } from 'carbon-components-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { AddModule, ApplicationModule, ChartAreaModule, FadeModule, GlobeModule, PersonFavoriteModule } from '@carbon/icons-angular';
import { CarbonModule } from '@carbon/icons-angular';
import { MapCanvasComponent } from './components/common/map-canvas/map-canvas.component';
import { CrashMapComponent } from './components/map-pages/crash-map/crash-map.component';
import { JurisMapComponent } from './components/map-pages/juris-map/juris-map.component';
import { CrashInfoComponent } from './components/details/crash-info/crash-info.component';
import { RouteInfoComponent } from './components/details/route-info/route-info.component';
import { IntersectionInfoComponent } from './components/details/intersection-info/intersection-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrashDashboardComponent } from './components/crash-dashboard/crash-dashboard.component';
import { ChartsModule } from '@carbon/charts-angular';
import { RepoPageComponent } from './components/repositories/repo-page/repo-page.component';
import { RepoTableComponent } from './components/repositories/repo-table/repo-table.component';
import { InfoSectionComponent } from './components/common/info/info-section/info-section.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { InfoCardComponent } from './components/common/info/info-card/info-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapCanvasComponent,
    CrashMapComponent,
    JurisMapComponent,
    CrashInfoComponent,
    RouteInfoComponent,
    IntersectionInfoComponent,
    CrashDashboardComponent,
    RepoTableComponent,
    RepoPageComponent,
    InfoSectionComponent,
    LandingPageComponent,
    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    IconModule,
    AddModule,
    CarbonModule,
    FadeModule,
    GridModule,
    DropdownModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    CheckboxModule,
    TilesModule,
    TableModule,
    ChartAreaModule,
    ChartsModule,
		ButtonModule,
		TabsModule,
    PersonFavoriteModule,
		GlobeModule,
		ApplicationModule,
		LinkModule,
		PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
