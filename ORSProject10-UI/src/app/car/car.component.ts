import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.CAR, locator, route);
  }

  populateForm(form, data) {
    form.id = data.id;
    form.customerName = data.customerName;
    form.carModel = data.carModel;
    form.rentperDay = data.rentperDay;
    form.fuelType = data.fuelType;


    console.log('Populated Form', form);
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
}