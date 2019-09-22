import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.scss']
})
export class SyllabusComponent implements OnInit {
  year: any;
  admsnYear = [
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
    {
      id: '2016-17',
      name: '2016-17'
    }
  ];
  course: any;
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
    }
  ];
  paper: any;
  papers = [
    {
      adm_year: '2018-19',
      assignment: '5',
      attendance: '5',
      attendance_status: '1',
      course_id: '11',
      external: '',
      faculty_name: 'Name 2',
      internal1: '5',
      internal2: '5',
      is_selected: false,
      paper_code: 'testfirst',
      paper_id: '282',
      paper_name: 'test first sem',
      semester: '1',
      status: '1',
      statusv: 'Active',
      user_id: '1003',
    },
    {
      adm_year: '2018-19',
      assignment: '0',
      attendance: '0',
      attendance_status: '1',
      course_id: '11',
      external: '',
      faculty_name: 'Name 1',
      internal1: '0',
      internal2: '0',
      is_selected: false,
      paper_code: 'testsecond',
      paper_id: '282',
      paper_name: 'test first sem',
      semester: '1',
      status: '0',
      statusv: 'Active',
      user_id: '1003',
    },
    {
      adm_year: '2018-19',
      assignment: '5',
      attendance: '0',
      attendance_status: '1',
      course_id: '23',
      external: '',
      faculty_name: 'Name 3',
      internal1: '0',
      internal2: '5',
      is_selected: false,
      paper_code: 'testthird',
      paper_id: '282',
      paper_name: 'test first sem 2',
      semester: '1',
      status: '8',
      statusv: 'Mark Entry',
      user_id: '1003',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
