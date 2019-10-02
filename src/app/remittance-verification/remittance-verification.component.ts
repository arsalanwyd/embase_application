import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remittance-verification',
  templateUrl: './remittance-verification.component.html',
  styleUrls: ['./remittance-verification.component.scss']
})
export class RemittanceVerificationComponent implements OnInit {
  submitChallan = false;
  confirmYes = false;

  constructor() { }

  ngOnInit() {
  }
  onSubmitChallan($event) {
    this.submitChallan = true;
    console.log("Challan_SUBMIT button is clicked!", $event);
  }
  onConfirm($event) {
    console.log("Challan_Confirm button is clicked!", $event);
  }
  onConfirmYes($event) {
    this.confirmYes = true;
    console.log("Challan_Confirm_Yes button is clicked!", $event);
  }

}
