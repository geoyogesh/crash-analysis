import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoSectionComponent } from './info-section/info-section.component';
import { InfoCardComponent } from './info-card/info-card.component';

import { PersonFavoriteModule } from '@carbon/icons-angular';
import { GlobeModule } from '@carbon/icons-angular';
import { ApplicationModule } from '@carbon/icons-angular';

import { GridModule } from 'carbon-components-angular';


@NgModule({
	declarations: [InfoSectionComponent, InfoCardComponent],
	imports: [
		CommonModule,
		GridModule,
		PersonFavoriteModule,
		GlobeModule,
		ApplicationModule
	],
	exports: [ InfoSectionComponent, InfoCardComponent]
})
export class InfoModule { }
