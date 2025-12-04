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
          <img src="logo.jpg" alt="Project Workshop Logo" />
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
  styleUrls: ['./header.scss']
})
export class Header {}