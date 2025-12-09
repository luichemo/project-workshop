import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  template: `
    <mat-toolbar class="header">
      <div class="container">
        <div class="logo" routerLink="/">
          <img src="logo.png" alt="საპროექტო სახელოსნო Logo" />
          <span class="logo-text">საპროექტო სახელოსნო</span>
        </div>

        <nav class="desktop-nav">
          <a mat-button routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            მთავარი
          </a>
          <a mat-button routerLink="/services" routerLinkActive="active">
            სერვისები
          </a>
          <a mat-button routerLink="/projects" routerLinkActive="active">
            პროექტები
          </a>
          <a mat-button routerLink="/about" routerLinkActive="active">
            ჩვენ შესახებ
          </a>
          <a mat-button routerLink="/contact" routerLinkActive="active" class="contact-btn">
            კონტაქტი
          </a>
        </nav>

        <button mat-icon-button class="mobile-menu" [matMenuTriggerFor]="menu">
          <mat-icon>menu</mat-icon>
        </button>

        <mat-menu #menu="matMenu">
          <a mat-menu-item routerLink="/">მთავარი</a>
          <a mat-menu-item routerLink="/services">სერვისები</a>
          <a mat-menu-item routerLink="/projects">პროექტები</a>
          <a mat-menu-item routerLink="/about">ჩვენ შესახებ</a>
          <a mat-menu-item routerLink="/contact">კონტაქტი</a>
        </mat-menu>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .header {
      background: var(--white);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
      height: 80px;
    }

    .container {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    }

    .logo {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .logo img {
      height: 80px;
      width: auto;
    }

    .logo-text {
      font-size: 20px;
      font-weight: 600;
      color: var(--primary-brown);
      white-space: nowrap;
    }

    .desktop-nav {
      display: flex;
      gap: 10px;
    }

    .desktop-nav a {
      color: var(--primary-brown);
      font-weight: 500;
      transition: all 0.3s;
    }

    .desktop-nav a:hover {
      color: var(--primary-orange);
    }

    .desktop-nav a.active {
      color: var(--primary-orange);
      border-bottom: 2px solid var(--primary-orange);
    }

    .desktop-nav a.contact-btn {
      background: var(--primary-orange);
      color: var(--white);
      border-radius: 4px;
    }

    .desktop-nav a.contact-btn:hover {
      background: var(--primary-brown);
      color: var(--white);
    }

    .mobile-menu {
      display: none;
    }

    @media (max-width: 1000px) {
      .desktop-nav {
        display: none;
      }

      .mobile-menu {
        display: block;
        color: var(--primary-brown);
      }

      .logo-text {
        font-size: 16px;
      }

      .logo img {
        height: 40px;
      }
    }
  `]
})
export class Header {}