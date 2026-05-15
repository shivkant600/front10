import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-smartparking',
  templateUrl: './smartparking.component.html',
  styleUrls: ['./smartparking.component.css']
})
export class SmartparkingComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
          super(locator.endpoints.SMARTPARKING, locator, route);
     }
  
     populateForm(form, data) {
      form.id = data.id;
      form.parkingCode = data.parkingCode;
      form.vehicleNumber = data.vehicleNumber;
       form.slotNumber = data.slotNumber;
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
