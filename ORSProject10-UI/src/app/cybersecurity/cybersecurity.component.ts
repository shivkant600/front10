import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cybersecurity',
  templateUrl: './cybersecurity.component.html',
  styleUrls: ['./cybersecurity.component.css']
})
export class CybersecurityComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
          super(locator.endpoints.CYBERSECURITY, locator, route);
     }
  
     populateForm(form, data) {
      form.id = data.id;
      form.attackType = data.attackType;
      form.severity = data.severity;
       form.detected = data.detected;
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
