import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent implements OnInit {
  selectAction=false;
  private fieldArray: Array<any> = [];
    private newAttribute: any = {};

  constructor() { }

  ngOnInit() {
  }
  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
}

deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
}
onSelectActionClick($event)
{
  this.selectAction=true;
  console.log("Select Action Clicked",$event);
}

}
