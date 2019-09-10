import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {

  public ntypes: any[] = [
    { value: 'Casual Leave', viewValue: 'Casual Leave' },
    { value: 'Sick Leave or Medical Leave', viewValue: 'Sick Leave or Medical Leave' },
    { value: 'Earned Leave or Privileged Leave', viewValue: 'Earned Leave or Privileged Leave' },
    { value: 'Paid Leave or Loss of Pay', viewValue: 'Paid Leave or Loss of Pay' }
  ];

  public days: any[] = [
    { value: 'Full Day', viewValue: 'Full Day' },
    { value: 'FN', viewValue: 'FN' },
    { value: 'AN', viewValue: 'AN' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
