import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
          super(locator.endpoints.MOVIE, locator, route);
     }
  
     populateForm(form, data) {
      form.id = data.id;
      form.movieName = data.movieName;
      form.heroName = data.heroName;
       form.rating = data.rating;
      
      
      
      console.log('Populated Form', form);
     }
  
     parseDate(dateString: string): Date {
      if (dateString) {
        return new Date(dateString);
      }
      return null;
    }
  }