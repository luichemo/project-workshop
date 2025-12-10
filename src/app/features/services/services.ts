import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  template: `
    <div class="services-page">
      <div class="page-header">
        <div class="container">
          <h1>ჩვენი სერვისები</h1>
          <p>სრული სპექტრი საინჟინრო სისტემების დაპროექტებისა და მონტაჟის</p>
        </div>
      </div>

      <div class="container">
        <div class="services-list">
          <mat-card class="service-detail" *ngFor="let service of services">
            <div class="service-header">
              <mat-icon class="service-icon">{{ service.icon }}</mat-icon>
              <h2>{{ service.title }}</h2>
            </div>
            <mat-card-content>
              <p class="service-description">{{ service.description }}</p>
              <div class="service-features">
                <h3>მოიცავს:</h3>
                <ul>
                  <li *ngFor="let feature of service.features">
                    <mat-icon>check_circle</mat-icon>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </mat-card-content>
            <div class="service-action">
              <button mat-raised-button color="primary" routerLink="/contact">
                მიიღეთ კონსულტაცია
              </button>
            </div>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./services.scss']
})
export class Services{
  services = [
    {
      icon: 'thermostat',
      title: 'გათბობა - გაგრილება - ვენტილაცია',
      description: 'თანამედროვე სათბობი და საკონდიციონერო სისტემების დაპროექტება და მონტაჟი',
      features: [
        'ცენტრალური გათბობის სისტემები',
        'ინოვაციური გათბობის სისტემები',
        'VRV/VRF სისტემები',
        'ვენტილაცია და კონდიცირება',
        'რადიატორული გათბობა',
        'იატაკის გათბობა'
      ]
    },
    {
      icon: 'water_drop',
      title: 'წყალმომარაგება',
      description: 'სასმელი და სამეურნეო წყლის მიწოდების სისტემების პროექტირება',
      features: [
        'საყოფაცხოვრებო წყალმომარაგება',
        'ცხელწყალმომარაგება',
        'წყლის გამწმენდი სისტემები',
        'სატუმბო სადგურები',
        'წყლის აღრიცხვის სისტემები'
      ]
    },
    {
      icon: 'plumbing',
      title: 'კანალიზაცია',
      description: 'საკანალიზაციო სისტემების სრული დაპროექტება და მონტაჟი',
      features: [
        'მიდია საკანალიზაციო სისტემები',
        'წყალარინება',
        'ვაკუუმური კანალიზაცია',
        'გამწმენდი ნაგებობები',
        'სატუმბო სადგურები',
        'სადრენაჟო სისტემები'
      ]
    },
    {
      icon: 'local_fire_department',
      title: 'ხანძარსაწინააღმდეგო სისტემები',
      description: 'ხანძარსაწინააღმდეგო სისტემების დაპროექტება და მონტაჟი',
      features: [
        'სპრინკლერული სისტემები',
        'ჰიდრანტები',
        'სახანძრო სავენტილაციო სისტემები',
  
      ]
    },
    {
      icon: 'pool',
      title: 'საცურაო აუზის სისტემები',
      description: 'აუზის სისტემების დაპროექტება და მონტაჟი',
      features: [
        'ინდივიდუალური საცურაო აუზები',
        'საზოგადოებრივი საცურაო აუზები',
      ]
    },
    {
      icon: 'electric_bolt',
      title: 'ელ. მომარაგება - ავტომატიზაია',
      description: 'ჭკვიანი სახილის სისტემების დაპროექტება და მონტაჟი',
      features: [
        'ელ. მომარაგების სისტემები',
        'სუსტი დენები',
        'ავტომატიზაცია',
        'ჭკვიანი სახლის სისტემები',
      ]
    },
    {
      icon: 'engineering',
      title: 'საინჟინრო კონსულტაცია',
      description: 'პროფესიონალური კონსულტაცია და ტექნიკური მხარდაჭერა',
      features: [
        'ტექნიკური აუდიტი',
        'პროექტების ექსპერტიზა',
        'ენერგოეფექტურობის შეფასება',
        'სამშენებლო ზედამხედველობა',
        'ხარისხის კონტროლი',
        'ავტორული ზედამხედველობა'
      ]
    }
  ];
}