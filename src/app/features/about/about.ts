import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  template: `
    <div class="about-page">
      <div class="page-header">
        <div class="container">
          <h1>ჩვენს შესახებ</h1>
          <p>პროფესიონალიზმი და ხარისხი - ჩვენი მთავარი პრინციპები</p>
        </div>
      </div>

      <div class="container">
        <!-- Company Info -->
        <section class="company-info">
          <div class="info-content">
            <h2>საპროექტო სახელოსნო - Project Workshop</h2>
            <p class="lead">
              ჩვენ ვართ პროფესიონალთა გუნდი, რომელიც სპეციალიზირებულია საინჟინრო 
              სისტემების დაპროექტებასა და მონტაჟში. წლების განმავლობაში შეგროვებული 
              გამოცდილება და თანამედროვე ტექნოლოგიები საშუალებას გვაძლევს, მივაწოდოთ 
              უმაღლესი ხარისხის სერვისი ჩვენს კლიენტებს.
            </p>
          </div>
        </section>

        <!-- Stats -->
        <section class="stats-section">
          <div class="stats-grid">
            <div class="stat-card" *ngFor="let stat of stats">
              <mat-icon>{{ stat.icon }}</mat-icon>
              <h3>{{ stat.value }}</h3>
              <p>{{ stat.label }}</p>
            </div>
          </div>
        </section>

        <!-- Values -->
        <section class="values-section">
          <h2>ჩვენი ღირებულებები</h2>
          <div class="values-grid">
            <mat-card class="value-card" *ngFor="let value of values">
              <mat-icon>{{ value.icon }}</mat-icon>
              <h3>{{ value.title }}</h3>
              <p>{{ value.description }}</p>
            </mat-card>
          </div>
        </section>

        <!-- Team -->
        <section class="team-section">
          <h2>ჩვენი გუნდი</h2>
          <p class="section-subtitle">
            პროფესიონალები, რომლებიც ზრუნავენ თქვენი პროექტის წარმატებაზე
          </p>
          <div class="team-grid">
            <mat-card class="team-member" *ngFor="let member of team">
              <div class="member-avatar">
                <mat-icon>person</mat-icon>
              </div>
              <h3>{{ member.name }}</h3>
              <p class="position">{{ member.position }}</p>
              <p class="bio">{{ member.bio }}</p>
            </mat-card>
          </div>
        </section>
      </div>
    </div>
  `,
  styleUrls: ['./about.scss']
})
export class About {
  stats = [
    { icon: 'engineering', value: '10+', label: 'წლიანი გამოცდილება' },
    { icon: 'workspace_premium', value: '200+', label: 'დასრულებული პროექტი' },
    { icon: 'groups', value: '150+', label: 'კმაყოფილი კლიენტი' },
    { icon: 'verified', value: '100%', label: 'ხარისხის გარანტია' }
  ];

  values = [
    {
      icon: 'star',
      title: 'ხარისხი',
      description: 'ვიყენებთ მხოლოდ მაღალი ხარისხის მასალებსა და თანამედროვე ტექნოლოგიებს'
    },
    {
      icon: 'handshake',
      title: 'სანდოობა',
      description: 'ვართ საიმედო პარტნიორი, რომელსაც შეუძლია გიგზავნოთ ნდობა'
    },
    {
      icon: 'psychology',
      title: 'ინოვაცია',
      description: 'ვამუშავებთ ინოვაციურ გადაწყვეტილებებს თითოეული პროექტისთვის'
    },
    {
      icon: 'support_agent',
      title: 'მხარდაჭერა',
      description: 'მუდმივი მხარდაჭერა პროექტის დაწყებიდან დასრულებამდე და მის შემდეგაც'
    }
  ];

  team = [
    {
      name: 'მათე ჩემია',
      position: 'დირექტორი / მთავარი ინჟინერი',
      bio: '15 წლიანი გამოცდილება საინჟინრო სისტემების დაპროექტებაში'
    },
    {
      name: 'ზვიად ჩემია',
      position: 'პროექტების მენეჯერი',
      bio: 'პროექტების წარმატებული მართვა და კოორდინაცია'
    },
    {
      name: 'ბესარიონ მელიქიშვილი',
      position: 'მთავარი კონსტრუქტორი',
      bio: 'სპეციალიზაცია HVAC სისტემების დაპროექტებაში'
    },
    {
      name: 'ანა გელაშვილი',
      position: 'ტექნიკური კონსულტანტი',
      bio: 'ტექნიკური მხარდაჭერა და კლიენტებთან კომუნიკაცია'
    }
  ];
}