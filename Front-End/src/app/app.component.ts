import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularyComponent } from './components/formulary/formulary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularyComponent],
  template: `<router-outlet></router-outlet>`,  // Use the component selector
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VentasDesde0';
}
