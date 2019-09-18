import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  notes: any;
  constructor(private _httpService: HttpService){
    this.notes = [];
  }

  ngOnInit() {
    this.get_all();
  }

  get_all(){
    let obs = this._httpService.get_notes();
    obs.subscribe((data) => {
      console.log('Back from get_notes', data);
      this.notes= data['info']

    } )

  }


}
