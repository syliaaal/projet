import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
  imports: [
    ReactiveFormsModule
  ],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
   contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
   });

    afficherName = '';
    afficherEmail = '';
    afficherMessage = '';

    soumettre() {
        this.afficherName = this.contactForm.get('name') ?.value || '';
        this.afficherEmail = this.contactForm.get('email') ?.value || '';
        this.afficherMessage = this.contactForm.get('message') ?.value || '';
    }
}
