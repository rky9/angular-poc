import { Component } from '@angular/core';
import { CommonService } from './shared/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
pageTitle;
  constructor(private _commonService: CommonService) {
    this._commonService.pageTitle.subscribe(title => {
      this.pageTitle = title
    })
  }
  
  

}
