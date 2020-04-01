import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userTitle: string = 'Users';
  formdata: FormGroup;
  constructor(private _commonService: CommonService) {
    this._commonService.pageTitle.subscribe(newtitle => {
      this.userTitle = newtitle
    })
    this._commonService.pageTitle.next(this.userTitle)
  }

  ngOnInit() {
    this.formdata = new FormGroup({
      'email': new FormControl("", [Validators.required, Validators.email]),
    });
  }
  viewDetails(){
    
  }
}
