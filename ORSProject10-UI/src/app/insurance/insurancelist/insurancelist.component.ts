import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../../base-list.component';
import { ServiceLocatorService } from '../../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insurancelist',
  templateUrl: './insurancelist.component.html',
  styleUrls: ['./insurancelist.component.css']
})
export class InsurancelistComponent extends BaseListCtl implements OnInit {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
       super(locator.endpoints.INSURANCE, locator, route);
     }

}