import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material'
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemDataService} from './in-memory-data.service';
import {PlaygroundComponent} from './playground.component';
import {RiddleComponent} from './playground.component';

import {DataService} from './data.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemDataService, {delay: 1000})
  ],
  declarations: [PlaygroundComponent, RiddleComponent],
  exports: [PlaygroundComponent],
  providers: [DataService]
})
export class PlaygroundModule {}
