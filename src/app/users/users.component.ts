import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  userTitle: string = 'Users';
  formdata: FormGroup;
  employeeInfo: {};
  constructor(private _commonService: CommonService, private http:HttpClient) {
    this._commonService.pageTitle.subscribe(newtitle => {
      this.userTitle = newtitle
      this.dtTrigger.next();
    })
    this._commonService.pageTitle.next(this.userTitle)
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this._commonService.getUsers().subscribe(data => {
      this.employeeInfo = data;
      this.dtTrigger.next();
    })

  
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
  
  }

  
  viewDetaisl() {
  }

}
