import { Component, OnInit, Output } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  public names !: String;
  public mobileNumber: any = '';
  searchText: string = '';

  constructor() { }

  ngOnInit(): void {

  }
  
  onSearch(): void {
    let resultdata: any = localStorage.getItem('userData');
    //let data : string = JSON.parse(resultdata) !== null? '';
    if (resultdata !== null) {
      let data = JSON.parse(resultdata);
      this.mobileNumber = parseInt(data.mobileNumber);

      console.log(data.name);
      console.log(data.mobileNumber);
    }
  }

}
