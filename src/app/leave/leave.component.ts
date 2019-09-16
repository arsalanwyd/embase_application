import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {
  leave: any;
  leave_details=[
  {
    'id': 52,
    'faculty_id': 1001,
    'date': '2019-01-10',
    'type': 'CL',
    'days': 1,
    'reason': 'gyhuj',
    'timestamp': '2019-01-25 08:27:25',
    'approved_id': null,
    'approved_date': '2019-01-25 08:27:25',
    'status': 1,
    'daysv': 'Full Day',
    'statusv': 'Applied',
    'leave_date': '10/01/2019'
},
{
    'id': 46,
    'faculty_id': 1001,
    'date': '2019-01-23',
    'type': 'CL',
    'days': 1,
    'reason': '24-1-19 sports',
    'timestamp': '2019-01-24 15:32:22',
    'approved_id': null,
    'approved_date': '2019-01-24 15:32:22',
    'status': 1,
    'daysv': 'Full Day',
    'statusv': 'Applied',
    'leave_date': '23/01/2019'
},
{
    'id': 44,
    'faculty_id': 1001,
    'date': '2019-01-24',
    'type': 'CL',
    'days': 1,
    'reason': 'test 24-1-19',
    'timestamp': '2019-01-24 15:29:41',
    'approved_id': null,
    'approved_date': '2019-01-24 15:29:41',
    'status': 1,
    'daysv': 'Full Day',
    'statusv': 'Applied',
    'leave_date': '24/01/2019'
},
{
    'id': 51,
    'faculty_id': 1001,
    'date': '2019-01-25',
    'type': 'CL',
    'days': 1,
    'reason': 'yu',
    'timestamp': '2019-01-25 08:26:02',
    'approved_id': null,
    'approved_date': '2019-01-25 08:26:02',
    'status': 1,
    'daysv': 'Full Day',
    'statusv': 'Applied',
    'leave_date': '25/01/2019'
}];

  constructor() { }

  ngOnInit() {
  }

}
