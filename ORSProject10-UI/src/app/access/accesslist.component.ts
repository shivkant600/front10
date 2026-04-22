import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-accesslist',
  templateUrl: './accesslist.component.html',
  styleUrls: ['./accesslist.component.css']
})
export class AccesslistComponent extends BaseListCtl implements OnInit {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
       super(locator.endpoints.ACCESS, locator, route);
     }

}