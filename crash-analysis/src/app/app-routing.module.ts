import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrashDashboardComponent } from './components/crash-dashboard/crash-dashboard.component';
import { CrashInfoComponent } from './components/details/crash-info/crash-info.component';
import { CrashMapComponent } from './components/map-pages/crash-map/crash-map.component';
import { JurisMapComponent } from './components/map-pages/juris-map/juris-map.component';

const routes: Routes = [
  {
		path: '',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
  {
		path: 'home',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
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
		loadChildren: () => import('./repositories/repositories.module').then(m => m.RepositoriesModule)
	},
  {
		path: 'summary',
		loadChildren: () => import('./repositories/repositories.module').then(m => m.RepositoriesModule)
	},
  {
		path: 'juris-map',
		loadChildren: () => import('./repositories/repositories.module').then(m => m.RepositoriesModule)
	},
  {
		path: 'crash-info',
		loadChildren: () => import('./repositories/repositories.module').then(m => m.RepositoriesModule)
	},
  {
		path: 'route-info',
		loadChildren: () => import('./repositories/repositories.module').then(m => m.RepositoriesModule)
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
