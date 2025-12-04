import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule
  ],
  template: `
    <div class="projects-page">
      <div class="page-header">
        <div class="container">
          <h1>ჩვენი პროექტები</h1>
          <p>წარმატებით განხორციელებული პროექტების პორტფოლიო</p>
        </div>
      </div>

      <div class="container">
        <div class="projects-grid">
          <mat-card class="project-card" *ngFor="let project of projects">
            <div class="project-image">
              <div class="image-placeholder">
                <mat-icon>apartment</mat-icon>
              </div>
              <div class="project-overlay">
                <span class="project-category">{{ project.category }}</span>
              </div>
            </div>
            <mat-card-content>
              <h3>{{ project.title }}</h3>
              <div class="project-info">
                <div class="info-item">
                  <mat-icon>location_on</mat-icon>
                  <span>{{ project.location }}</span>
                </div>
                <div class="info-item">
                  <mat-icon>calendar_today</mat-icon>
                  <span>{{ project.year }}</span>
                </div>
                <div class="info-item">
                  <mat-icon>square_foot</mat-icon>
                  <span>{{ project.area }}</span>
                </div>
              </div>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tags">
                <mat-chip *ngFor="let tag of project.tags">{{ tag }}</mat-chip>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./projects.scss']
})
export class Projects {
  projects = [
    {
      title: 'საცხოვრებელი კომპლექსი "ვაკის პარკი"',
      location: 'თბილისი, ვაკე',
      year: '2024',
      area: '15,000 მ²',
      category: 'საცხოვრებელი',
      description: 'თანამედროვე საცხოვრებელი კომპლექსის სრული საინჟინრო სისტემების დაპროექტება და მონტაჟი',
      tags: ['HVAC', 'წყალმომარაგება', 'კანალიზაცია', 'ხანძარსაწინააღმდეგო']
    },
    {
      title: 'ოფისის შენობა "BTC"',
      location: 'თბილისი, საბურთალო',
      year: '2023',
      area: '8,500 მ²',
      category: 'კომერციული',
      description: 'A კლასის ოფისის შენობის საინჟინრო სისტემები',
      tags: ['VRV სისტემა', 'ვენტილაცია', 'წყალმომარაგება']
    },
    {
      title: 'კერძო საცხოვრებელი სახლი',
      location: 'თბილისი, დიღომი',
      year: '2024',
      area: '450 მ²',
      category: 'კერძო',
      description: 'პრემიუმ კლასის კერძო სახლის სრული საინჟინრო სისტემები',
      tags: ['იატაკის გათბობა', 'სმარტ სისტემა', 'გაწმენდა']
    },
    {
      title: 'სავაჭრო ცენტრი "East Point"',
      location: 'რუსთავი',
      year: '2023',
      area: '25,000 მ²',
      category: 'კომერციული',
      description: 'მასშტაბური სავაჭრო ცენტრის საინჟინრო ინფრასტრუქტურა',
      tags: ['HVAC', 'ვენტილაცია', 'ხანძარსაწინააღმდეგო', 'კანალიზაცია']
    },
    {
      title: 'სასტუმრო "Rooms Hotel"',
      location: 'თბილისი, ვერა',
      year: '2024',
      area: '12,000 მ²',
      category: 'HoReCa',
      description: 'ბუტიკ სასტუმროს საინჟინრო სისტემების მოდერნიზაცია',
      tags: ['ცენტრალური გათბობა', 'ცხელი წყალი', 'ვენტილაცია']
    },
    {
      title: 'საგანმანათლებლო კომპლექსი',
      location: 'თბილისი, გლდანი',
      year: '2023',
      area: '10,000 მ²',
      category: 'საჯარო',
      description: 'თანამედროვე საგანმანათლებლო დაწესებულების საინჟინრო სისტემები',
      tags: ['ენერგოეფექტური', 'ვენტილაცია', 'წყალმომარაგება']
    }
  ];
}
