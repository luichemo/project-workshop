import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>საპროექტო სახელოსნო</h3>
            <p>პროფესიონალური საინჟინრო სისტემების დაპროექტება</p>
          </div>

          <div class="footer-section">
            <h4>სწრაფი ბმულები</h4>
            <ul>
              <li><a href="/">მთავარი</a></li>
              <li><a href="/services">სერვისები</a></li>
              <li><a href="/projects">პროექტები</a></li>
              <li><a href="/contact">კონტაქტი</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>კონტაქტი</h4>
            <ul class="contact-list">
              <li>
                <mat-icon>phone</mat-icon>
                <span>+995 577 788 098</span>
              </li>
              <li>
                <mat-icon>email</mat-icon>
                <span>projectworkshopltd@gmail.com</span>
              </li>
              <li>
                <mat-icon>location_on</mat-icon>
                <span>თბილისი, საქართველო</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 საპროექტო სახელოსნო. ყველა უფლება დაცულია.</p>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.scss']
})
export class Footer {}