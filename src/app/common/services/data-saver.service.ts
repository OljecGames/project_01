import { Injectable } from '@angular/core';
import {DataSaverModel} from "./data-saver-model";

@Injectable({
  providedIn: 'root'
})
export class DataSaverService {
  data: Array<DataSaverModel> = [];
  rawData: DataSaverModel = {key: '', value: 0};


  constructor() { }

  saveData(key: string, value: number) {
    const index = this.data.findIndex(el => el.key === key);
    if (index === -1) {
      this.data.push({
        key: key,
        value: value
      });
    } else {
      this.data[index].value = value;
    }

    console.log('You save data:');
    console.log(key, value);
    console.log('All data now:');
    console.log(this.data);
  }

  saveRawData(key: string, value: number) {
    this.rawData = {key: key, value: value};
  }
}
