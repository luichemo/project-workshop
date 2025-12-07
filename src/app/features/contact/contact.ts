import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Email } from '../../core/services/email';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  template: `
    <div class="contact-page">
      <div class="container">
        <div class="page-header">
          <h1>დაგვიკავშირდით</h1>
          <p>ჩვენ მზად ვართ, დაგეხმაროთ თქვენი პროექტის განხორციელებაში</p>
        </div>

        <div class="contact-content">
          <div class="contact-form-wrapper">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
              <mat-form-field appearance="outline">
                <mat-label>სახელი და გვარი</mat-label>
                <input matInput formControlName="name" placeholder="თქვენი სახელი">
                <mat-icon matPrefix>person</mat-icon>
                <mat-error *ngIf="contactForm.get('name')?.hasError('required')">
                  სახელი სავალდებულოა
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>ელ. ფოსტა</mat-label>
                <input matInput formControlName="email" type="email" placeholder="example@mail.com">
                <mat-icon matPrefix>email</mat-icon>
                <mat-error *ngIf="contactForm.get('email')?.hasError('required')">
                  ელ. ფოსტა სავალდებულოა
                </mat-error>
                <mat-error *ngIf="contactForm.get('email')?.hasError('email')">
                  არასწორი ფორმატი
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>ტელეფონი</mat-label>
                <input matInput formControlName="phone" placeholder="+995 XXX XX XX XX">
                <mat-icon matPrefix>phone</mat-icon>
                <mat-error *ngIf="contactForm.get('phone')?.hasError('required')">
                  ტელეფონი სავალდებულოა
                </mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>შეტყობინება</mat-label>
                <textarea matInput formControlName="message" rows="5" 
                          placeholder="დაწერეთ თქვენი შეტყობინება..."></textarea>
                <mat-icon matPrefix>message</mat-icon>
                <mat-error *ngIf="contactForm.get('message')?.hasError('required')">
                  შეტყობინება სავალდებულოა
                </mat-error>
              </mat-form-field>

              <button mat-raised-button color="primary" type="submit" 
                      [disabled]="!contactForm.valid || isSubmitting">
                {{ isSubmitting ? 'იგზავნება...' : 'გაგზავნა' }}
              </button>
            </form>
          </div>

          <div class="contact-info">
            <div class="info-card">
              <mat-icon>phone</mat-icon>
              <h3>ტელეფონი</h3>
              <p>+995 577 788 098</p>
            </div>

            <div class="info-card">
              <mat-icon>email</mat-icon>
              <h3>ელ. ფოსტა</h3>
              <p>projectworkshopltd@gmail.com</p>
            </div>

            <div class="info-card">
              <mat-icon>location_on</mat-icon>
              <h3>მისამართი</h3>
              <p>თბილისი, საქართველო</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./contact.scss']
})
export class Contact {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private emailService: Email,
    private snackBar: MatSnackBar
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      this.emailService.sendEmail(this.contactForm.value).subscribe({
        next: () => {
          this.snackBar.open('შეტყობინება წარმატებით გაიგზავნა!', 'დახურვა', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          this.contactForm.reset();
          this.isSubmitting = false;
        },
        error: (error) => {
          this.snackBar.open('დაფიქსირდა შეცდომა. გთხოვთ სცადოთ მოგვიანებით.', 'დახურვა', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
          this.isSubmitting = false;
        }
      });
    }
  }
}