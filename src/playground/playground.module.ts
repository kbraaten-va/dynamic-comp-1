import { NgModule } from '@angular/core'
import { MaterialModule } from '@angular/material'
import {PlaygroundComponent} from './playground.component'

@NgModule({
  imports: [MaterialModule.forRoot()],
  declarations: [PlaygroundComponent],
  exports: [PlaygroundComponent],
})
export class PlaygroundModule {}
