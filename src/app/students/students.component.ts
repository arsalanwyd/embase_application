import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public years: any[]=[
    {value: '2019-20', viewValue: '2019-20'},
    {value: '2020-21', viewValue: '2020-21'},
    {value: '2021-22', viewValue: '2021-22'}
  ];
  public courses: any[]=[
    {value: 'BCA', viewValue: 'BCA'},
    {value: 'B.Com', viewValue: 'B.com'},
    {value: 'BA Economics', viewValue: 'BA Economics'}
  ];
  public papers: any[]=[
    {value: 'Object Oriented Programming', viewValue: 'Object Oriented ProgrammingObject Oriented Programming'},
    {value: 'Marketting Management', viewValue: 'Marketting Management'},
    {value: 'Bussiness Economics', viewValue: 'Bussiness Economics'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
