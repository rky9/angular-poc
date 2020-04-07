import { Component, OnDestroy, OnInit, AfterViewInit, ViewChild, Renderer2 } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { UserService } from './user-service/user.service';
declare var $;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit, OnDestroy {
  data$ = new Subject<any>();
  data;


  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  userTitle: string = 'Users';
  formdata: FormGroup;
  employees: any = [];
  filteredemployees: any = [];
  private _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredemployees = this.filterEmployees(value)
    console.log(this.filteredemployees)
  }

  filterEmployees(searchString: string) {
    if (searchString === undefined) return searchString;
    return this.employees.filter(employee => employee.email.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
  }

  empDetails: {}
  empId;
  empfName;
  emplName;
  empEmail;
  sortBy: string = 'email';
  constructor(private http: HttpClient, private _userService: UserService,
    private renderer: Renderer2, private router: Router) {
  }

  ngOnInit() {
    this.userInfodata();
    this.getUserData();
  }
  getUserData() {
    this._userService.getUsers().subscribe(
      data => {
        this.employees = data;
        this.filteredemployees = this.employees;
        console.log(this.filteredemployees)
        this.dtTrigger.next();
      }, err => { console.log('Error occured') })
  }

  userInfodata() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      order: [0, 'asc'],

      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          this.empDetails = data;
          this.empId = this.empDetails[0];
          this.empfName = this.empDetails[1];
          this.emplName = this.empDetails[2];
          this.empEmail = this.empDetails[3];
          console.log(this.empDetails)
        });
        return row;
      }
    };
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
