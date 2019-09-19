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

  constructor() { }

  ngOnInit() {
  }

}
