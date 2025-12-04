import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  template: `
    <div class="home-page">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-overlay"></div>
        <div class="container">
          <div class="hero-content">
            <h1>საპროექტო სახელოსნო</h1>
            <h2>Project Workshop</h2>
            <p class="hero-subtitle">
              პროფესიონალური საინჟინრო სისტემების დაპროექტება და მონტაჟი
            </p>
            <div class="hero-buttons">
              <button mat-raised-button color="primary" routerLink="/services">
                ჩვენი სერვისები
              </button>
              <button mat-stroked-button routerLink="/contact" class="contact-btn">
                კონტაქტი
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Preview -->
      <section class="services-preview">
        <div class="container">
          <div class="section-header">
            <h2>ჩვენი სერვისები</h2>
            <p>ვთავაზობთ საინჟინრო სისტემების სრულ სპექტრს</p>
          </div>

          <div class="services-grid">
            <mat-card class="service-card" *ngFor="let service of services">
              <mat-icon class="service-icon">{{ service.icon }}</mat-icon>
              <mat-card-content>
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
              </mat-card-content>
            </mat-card>
          </div>

          <div class="view-all">
            <button mat-raised-button routerLink="/services">
              ყველა სერვისი
              <mat-icon>arrow_forward</mat-icon>
            </button>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="why-us">
        <div class="container">
          <div class="section-header">
            <h2>რატომ ჩვენ?</h2>
          </div>

          <div class="features-grid">
            <div class="feature-item" *ngFor="let feature of features">
              <mat-icon>{{ feature.icon }}</mat-icon>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta">
        <div class="container">
          <h2>მზად ხართ დაიწყოთ თქვენი პროექტი?</h2>
          <p>დაგვიკავშირდით და მიიღეთ უფასო კონსულტაცია</p>
          <button mat-raised-button color="primary" routerLink="/contact">
            დაგვიკავშირდით
            <mat-icon>arrow_forward</mat-icon>
          </button>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./home.scss']
})
export class Home {
  services = [
    {
      icon: 'ac_unit',
      title: 'გათბობა/გაგრილება',
      description: 'HVAC სისტემების დაპროექტება და მონტაჟი'
    },
    {
      icon: 'water_drop',
      title: 'წყალმომარაგება',
      description: 'წყლის მიწოდების სისტემების სრული დაპროექტება'
    },
    {
      icon: 'home',
      title: 'კანალიზაცია',
      description: 'საკანალიზაციო სისტემების პროექტირება'
    },
    {
      icon: 'engineering',
      title: 'საინჟინრო კონსულტაცია',
      description: 'სრული საინჟინრო მხარდაჭერა'
    }
  ];

  features = [
    {
      icon: 'verified',
      title: 'პროფესიონალიზმი',
      description: 'გამოცდილი სპეციალისტები და თანამედროვე ტექნოლოგიები'
    },
    {
      icon: 'schedule',
      title: 'ვადების დაცვა',
      description: 'პროექტების დროული და ხარისხიანი შესრულება'
    },
    {
      icon: 'support_agent',
      title: '24/7 მხარდაჭერა',
      description: 'ხელმისაწვდომი ვართ ნებისმიერ დროს'
    },
    {
      icon: 'workspace_premium',
      title: 'ხარისხის გარანტია',
      description: 'ვიძლევით გარანტიას შესრულებულ სამუშაოებზე'
    }
  ];
}