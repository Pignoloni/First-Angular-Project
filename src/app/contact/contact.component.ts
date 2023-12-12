import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactMessage} from "../shared/model/contact.message.model";
import {ContactMessageService} from "../shared/service/contact.message.service";
import {observable, subscribeOn} from "rxjs";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {


  form: FormGroup | null = null;

  messageSent = false;

  constructor(private formBuilder: FormBuilder, private contactMessageService: ContactMessageService) {

    this.initFrom();
  }

  private initFrom() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]]
    })
  }

    sendContactMessage() {
      if (this.form) {
        const formValue = this.form.value;
        const message = new ContactMessage();
        message.email = formValue['email'];
        message.message = formValue['message'];
        message.date = new Date;

        console.log(message);


        this.contactMessageService.postMessage(message)
          .subscribe(response => {
            this.messageSent = true;
          });
    }
  }
}
