// whatsapp-float.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule],
  template: `
    <a 
      href="https://wa.me/995577788098" 
      target="_blank" 
      rel="noopener noreferrer"
      class="whatsapp-float"
      matTooltip="დაგვიკავშირდით WhatsApp-ზე"
      matTooltipPosition="left"
      aria-label="Chat on WhatsApp"
    >
      <svg class="whatsapp-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.203 1.393 1.402-5.237-0.322-0.527c-1.315-2.163-2.008-4.653-2.008-7.203 0-7.51 6.11-13.62 13.62-13.62s13.62 6.11 13.62 13.62-6.11 13.62-13.62 13.62zM21.305 18.56c-0.227-0.115-1.347-0.662-1.555-0.738-0.21-0.075-0.362-0.115-0.515 0.115s-0.595 0.738-0.727 0.89c-0.132 0.152-0.265 0.17-0.492 0.057s-0.96-0.353-1.828-1.13c-0.677-0.607-1.133-1.357-1.267-1.583s-0.015-0.353 0.1-0.467c0.103-0.103 0.227-0.265 0.34-0.398s0.152-0.227 0.227-0.378c0.075-0.152 0.038-0.283-0.018-0.398s-0.515-1.242-0.705-1.698c-0.185-0.442-0.372-0.383-0.515-0.39-0.133-0.007-0.285-0.008-0.438-0.008s-0.398 0.057-0.607 0.283c-0.21 0.227-0.795 0.775-0.795 1.89s0.813 2.192 0.927 2.343c0.113 0.152 1.598 2.437 3.87 3.418 0.54 0.233 0.963 0.372 1.292 0.477 0.543 0.173 1.037 0.148 1.427 0.090 0.435-0.065 1.347-0.55 1.537-1.082s0.19-0.987 0.133-1.082c-0.057-0.095-0.21-0.152-0.438-0.265z"/>
      </svg>
      <span class="pulse-ring"></span>
      <span class="pulse-ring pulse-ring-delay"></span>
    </a>
  `,
  styles: [`
    .whatsapp-float {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
      cursor: pointer;
      z-index: 999;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      text-decoration: none;
      animation: slideInUp 0.6s ease-out;

      @media (max-width: 768px) {
        bottom: 20px;
        right: 20px;
        width: 56px;
        height: 56px;
      }

      &:hover {
        transform: scale(1.1) translateY(-3px);
        box-shadow: 0 8px 30px rgba(37, 211, 102, 0.5);

        .whatsapp-icon {
          transform: scale(1.1) rotate(10deg);
        }
      }

      &:active {
        transform: scale(0.95);
      }

      .whatsapp-icon {
        width: 32px;
        height: 32px;
        transition: transform 0.3s ease;
        position: relative;
        z-index: 2;

        @media (max-width: 768px) {
          width: 28px;
          height: 28px;
        }
      }

      .pulse-ring {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 3px solid #25d366;
        border-radius: 50%;
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        opacity: 0.6;
      }

      .pulse-ring-delay {
        animation-delay: 1s;
      }
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
        opacity: 0.6;
      }
      50% {
        transform: scale(1.5);
        opacity: 0;
      }
      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(100px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    // Dark mode adjustments
    [data-theme="dark"] {
      .whatsapp-float {
        box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);

        &:hover {
          box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
        }
      }
    }
  `]
})
export class WhatsappFloatComponent {
  // You can customize the phone number here
  // Format: country code + number without + or spaces
  // Example: 995577788098 for +995 577 788 098
}