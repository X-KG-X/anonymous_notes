import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  new_data: any;
  error: any;
  constructor(private _httpService: HttpService, private _router: Router, private location: Location){
    this.new_data = {note : '' };
    this.error = '';
  }

  ngOnInit(){

  }

  pageRefresh() {
    location.reload();
 }

  new_note(){
    let obs =  this._httpService.add_note(this.new_data)
    obs.subscribe((data)=>{
      console.log('Back from add_note', data)
      if (data['msg'] == 'failure'){
        this.error=data['info']['message']
      } else {
        this.new_data = {note: '' };
        this.pageRefresh()
      }
    })
  }



}
