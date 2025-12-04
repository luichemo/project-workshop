import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { Observable, from } from 'rxjs';

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class Email {
  private serviceId = 'YOUR_SERVICE_ID';
  private templateId = 'YOUR_TEMPLATE_ID';
  private publicKey = 'YOUR_PUBLIC_KEY';

  constructor() {
    emailjs.init(this.publicKey);
  }

  sendEmail(formData: ContactForm): Observable<any> {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      to_name: 'Project Workshop'
    };

    return from(
      emailjs.send(this.serviceId, this.templateId, templateParams)
    );
  }
}