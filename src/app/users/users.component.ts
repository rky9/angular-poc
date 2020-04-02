import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userTitle: string = 'Users';
  formdata: FormGroup;
  dtOptions: DataTables.Settings = {};
  employeeInfo:{};
  persons: Person[];

  constructor(private _commonService: CommonService, private http: HttpClient) {
    this._commonService.pageTitle.subscribe(newtitle => {
      this.userTitle = newtitle
    })
    this._commonService.pageTitle.next(this.userTitle)
  }

  ngOnInit() {
    this.formdata = new FormGroup({
      'email': new FormControl("", [Validators.required, Validators.email]),
    });
    this._commonService.getUsers().subscribe(data=>{
      console.log(data)
      this.employeeInfo = data;
    })
   

    
  }
  viewDetails(){

  }
}
