import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.REPORT, locator, route);
  }

  populateForm(form, data) {
    form.id = data.id;
    form.reportCode = data.reportCode;
    form.reportType = data.reportType;
    form.generatedDate = data.generatedDate;
    form.remarks = data.remarks;


    console.log('Populated Form', form);
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
}