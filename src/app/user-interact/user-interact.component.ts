import {Component, Input, OnInit} from '@angular/core';
import {DataSaverService} from "../common/services/data-saver.service";

@Component({
  selector: 'app-user-interact',
  templateUrl: './user-interact.component.html',
  styleUrls: ['./user-interact.component.scss']
})
export class UserInteractComponent implements OnInit {

  @Input() increaseValue = 1;
  @Input() key: string = '';
  currentValue: number = 0;

  constructor(private dataSaver: DataSaverService) {}

  ngOnInit(): void {}

  increaseCounter() {
    this.currentValue += this.increaseValue;
  }

  resetCounter() {
    this.currentValue = 0;
  }

  sendCounter(value: any) {
    this.dataSaver.saveData(this.key, value)
  }

}
