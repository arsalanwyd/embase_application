import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-students',
  templateUrl: './super-students.component.html',
  styleUrls: ['./super-students.component.scss']
})
export class SuperStudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onIdCardSubmit($event) {
    console.log("IDCARD_SUBMIT button is clicked!", $event);
  }
  onReportSubmit($event) {
    console.log("Report_SUBMIT button is clicked!", $event);
  }
  onStudentSubmit($event) {
    console.log("Student_SUBMIT button is clicked!", $event);
  }
}
