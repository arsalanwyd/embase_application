import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from 'app/auth/authservice.service';
import { MessageService } from 'app/services/message.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  registrationform: FormGroup


  constructor(private formBuilder: FormBuilder,  private authservice: AuthserviceService, private message: MessageService) { }

  ngOnInit() {
    this.registrationform = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
    })
  }
  onSubmit() {

    console.log(this.registrationform);
    if (this.registrationform.invalid) {
      return;
    } else {
      this.authservice.register(this.registrationform.value)
        .subscribe(success => {
          if (success) {            
            console.log(success);
            this.message.showNotification('success', 'User Registered Successfully ');
          } else {            
            this.message.showNotification('danger', 'Something Went Wrong ');
          }
        });
    }
  }

}
