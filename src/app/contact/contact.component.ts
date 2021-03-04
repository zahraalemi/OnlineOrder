import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  formGroup: FormGroup;
  textSuccess='';
  isActive = true;

  check(mail, comment){
    mail.valid && comment.valid ? this.isActive = false : this.isActive =true;
    
  }

  onclick(email){
    this.textSuccess = `thank you for contact us, we will contact you with ${email.value}`
    
  }
 
}
