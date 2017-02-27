import { Component } from '@angular/core'
import '../../public/css/styles.css'

@Component({
  selector: 'app',
  styleUrls: ['./app.component.css'],
  template: `
  <div class="container">
    <h1>Playground</h1>
    <div class="card">
      <playground></playground>
    </div>
  </div>
  `
})
export class AppComponent {}
