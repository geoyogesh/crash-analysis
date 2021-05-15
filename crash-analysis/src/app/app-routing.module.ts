import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrashDashboardComponent } from './components/crash-dashboard/crash-dashboard.component';
import { CrashInfoComponent } from './components/details/crash-info/crash-info.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CrashMapComponent } from './components/map-pages/crash-map/crash-map.component';
import { JurisMapComponent } from './components/map-pages/juris-map/juris-map.component';
import { RepoPageComponent } from './components/repositories/repo-page/repo-page.component';

const routes: Routes = [
  {
		path: '',
		component: LandingPageComponent
	},
  {
		path: 'home',
		component: LandingPageComponent
	},
  {
		path: 'map',
		redirectTo: 'map/crash-map',
		pathMatch: 'full'
	},
  {
    path: 'dashboard',
    component: CrashDashboardComponent
  },
  {
    path: 'map/crash-map',
    component: CrashMapComponent
  },
  {
    path: 'map/juris-map',
    component: JurisMapComponent
  },
  {
    path: 'details/crash-info',
    component: CrashInfoComponent
  },
	{
		path: 'repos',
		component: RepoPageComponent
	},
  {
		path: 'summary',
		component: RepoPageComponent
	},
  {
		path: 'juris-map',
		component: RepoPageComponent
	},
  {
		path: 'crash-info',
		component: RepoPageComponent
	},
  {
		path: 'route-info',
		component: RepoPageComponent
	},
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
