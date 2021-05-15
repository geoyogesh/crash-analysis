import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbModule, CheckboxModule, DropdownModule, GridModule,
  IconModule, Label, TableModule, TilesModule, UIShellModule } from 'carbon-components-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { AddModule, ChartAreaModule, FadeModule } from '@carbon/icons-angular';
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
    CrashDashboardComponent
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
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
