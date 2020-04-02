import { Component, OnDestroy, OnInit, AfterViewInit, ViewChild, Renderer2 } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  userTitle: string = 'Users';
  formdata: FormGroup;
  message: string = "hi"
  employeeInfo: {};
  empDetails: {}
  empId;
  empfName;
  emplName;
  empEmail;
  constructor(private _commonService: CommonService, private http: HttpClient,
    private renderer: Renderer2, private router: Router) {
    this._commonService.pageTitle.subscribe(newtitle => {
      this.userTitle = newtitle
      this.dtTrigger.next();
    })
    this._commonService.pageTitle.next(this.userTitle)
  }
  someClickHandler(info: any): void {
    console.log(info.id + ' - ' + info.firstname + ' - ' + info.lastname + ' - ' + info.email);
  }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          self.someClickHandler(data);
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
    this._commonService.getUsers().subscribe(data => {
      this.employeeInfo = data;
      this.dtTrigger.next();
    })


  }
  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (event.target.hasAttribute("view-person-id")) {
        this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
      }
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }


  viewDetaisl() {
  }

}
