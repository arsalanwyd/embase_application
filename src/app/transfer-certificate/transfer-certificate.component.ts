import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-certificate',
  templateUrl: './transfer-certificate.component.html',
  styleUrls: ['./transfer-certificate.component.scss']
})
export class TransferCertificateComponent implements OnInit {
  onSubmit = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmitAdmsnNo($event) {
    this.onSubmit = true;
    console.log("Submit Button Clicked", $event);
  }

}
