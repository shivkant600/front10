import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobileverification',
  templateUrl: './mobileverification.component.html',
  styleUrls: ['./mobileverification.component.css']
})
export class MobileverificationComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
          super(locator.endpoints.MOBILEVERIFICATION, locator, route);
     }
  
     populateForm(form, data) {
      form.id = data.id;
      form.verificationCode = data.verificationCode;
      form.mobileNumber = data.mobileNumber;
       form.otp = data.otp;
      form.status = data.status;
      
      
      console.log('Populated Form', form);
     }
  
     parseDate(dateString: string): Date {
      if (dateString) {
        return new Date(dateString);
      }
      return null;
    }
  }