import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.scss']
})
export class MarkComponent implements OnInit {
  year: any;
  admsnYear = [
    {
      id: "2019-20",
      name: "2019-20"
    },
    {
      id: "2018-19",
      name: "2018-19"
    },
    {
      id: "2017-18",
      name: "2017-18"
    },
    {
      id: "2016-17",
      name: "2016-17"
    }
  ];
  course: any;
  courses = [
    {
      course_id: "11",
      course_name: "B.A English",
      course_programme: "U.G",
      dep_id: "113",
      nick: "B.A Eng"
    },
    {
      course_id: "14",
      course_name: "B.C.A",
      course_programme: "U.G",
      dep_id: "112",
      nick: "B.C.A"
    },
    {
      course_id: "17",
      course_name: "B.Sc Computer Science",
      course_programme: "U.G",
      dep_id: "112",
      nick: "B.Sc CS"
    }
  ];
  paper: any;
  papers = [
    {
      assignment: "5",
      attendance: "5",
      external: null,
      internal1: "5",
      internal2: "5",
      paper_code: "ENG1A02",
      paper_id: "287",
      paper_name: "Ways with words test",
      status: "9"
    },
    {
      assignment: "5",
      attendance: "5",
      external: null,
      internal1: "5",
      internal2: "5",
      paper_code: "ENG1B1",
      paper_id: "288",
      paper_name: "Reading poetry",
      status: "9"
    },
    {
      assignment: "5",
      attendance: "0",
      external: null,
      internal1: "5",
      internal2: "5",
      paper_code: "ENGAAC1",
      paper_id: "286",
      paper_name: "Transactions essential test",
      status: "9"
    }
  ];
  mark: any;
  marks = [
    {
      assignment: null,
      attendance: null,
      external: null,
      internal1: null,
      internal2: null,
      mark_id: "4037",
      paper_id: "248",
      status: "1",
      std_admissionnumber: "890",
      std_currentsemester: "1",
      std_name: "SOORYA SURENDRAN",
      std_universityregisternumber: "00",
      total: 0,
      updateLog: "Last Updated by  on 12/12/2018 10:12"
    },
    {
      assignment: 5,
      attendance: 5,
      external: 5,
      internal1: 5,
      internal2: 5,
      mark_id: "4038",
      paper_id: "249",
      status: "1",
      std_admissionnumber: "891",
      std_currentsemester: "1",
      std_name: "Shaheer",
      std_universityregisternumber: "001",
      total: 0,
      updateLog: "Last Updated by  on 12/09/2018 08:12"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
