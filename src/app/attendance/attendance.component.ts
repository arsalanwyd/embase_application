import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  year: any;
  course: any;
  paper: any;
  public years =
    [
      {
        id: '2019-20',
        name: '2019-20'
      },
      {
        id: '2018-19',
        name: '2018-19'
      },
      {
        id: '2017-18',
        name: '2017-18'
      },
    ];
  courses = [
    {
      course_id: '11',
      course_name: 'B.A English',
      course_programme: 'U.G',
      dep_id: '113',
      nick: 'B.A Eng'
    },
    {
      course_id: '14',
      course_name: 'B.C.A',
      course_programme: 'U.G',
      dep_id: '112',
      nick: 'B.C.A'
    },
    {
      course_id: '17',
      course_name: 'B.Sc Computer Science',
      course_programme: 'U.G',
      dep_id: '112',
      nick: 'B.Sc CS'
    },
  ];
  papers = [
    {
      paper_code: 'BCA3B04',
      paper_id: '26',
      paper_name: 'Data Structures Using C',
      status: '1'
    },
    {
      paper_code: 'MAL1A07',
      paper_id: '125',
      paper_name: 'Malayala Sahithyam',
      status: '9'
    },
    {
      paper_code: 'BCA2B02',
      paper_id: '179',
      paper_name: 'Problem solving using C',
      status: '1'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
