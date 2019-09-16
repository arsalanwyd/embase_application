import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  selectedOption: string;
  options: string[] = ['1', '2', '3', '4'];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  subject: any;
  subjects = [{
  is_selected: false,
  subject: "English",
  ​​subject_id: "3"
  },
  {
  is_selected: false,​​
  subject: "General",​​
  subject_id: "1"
  },
  {
  is_selected: false,​​
  subject: "hindi",​​
  subject_id: "4"
  },
  {
  is_selected: false,​​
  subject: "Malayalam",​​
  subject_id: "2"
  },
  ];


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}



