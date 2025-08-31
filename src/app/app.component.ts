import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet
],
})
export class AppComponent {








}
