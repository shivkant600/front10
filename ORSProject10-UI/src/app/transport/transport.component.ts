import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
          super(locator.endpoints.TRANSPORT, locator, route);
     }
  
     populateForm(form, data) {
      form.id = data.id;
      form.vehicleType = data.vehicleType;
      form.driverName = data.driverName;
       form.charges = data.charges;
      
      
      
      console.log('Populated Form', form);
     }
  
     parseDate(dateString: string): Date {
      if (dateString) {
        return new Date(dateString);
      }
      return null;
    }
  }