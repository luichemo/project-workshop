import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { WhatsappFloatComponent } from './shared/components/whatsapp-float/whatsapp-float';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, WhatsappFloatComponent],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
    <app-whatsapp-float></app-whatsapp-float>
  `,
  styles: [`
    main {
      min-height: calc(100vh - 180px);
    }
  `]
})
export class App {}