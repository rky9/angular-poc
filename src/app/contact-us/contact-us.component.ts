import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactTitle: string = 'Contact Us'
  contactdata:FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
   this.formValidation();
  }

  formValidation(){
    this.contactdata = new FormGroup({
      'fname': new FormControl("", [Validators.required,Validators.minLength(3),Validators.maxLength(10)],),
      'lname': new FormControl("", [Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      'email': new FormControl("", [Validators.required, Validators.email]),
      'mobile': new FormControl("", [Validators.required,Validators.minLength(10),Validators.maxLength(10)])
   });
  }
  
  onSubmit(){
    console.log(this.contactdata.value)
  }
}
