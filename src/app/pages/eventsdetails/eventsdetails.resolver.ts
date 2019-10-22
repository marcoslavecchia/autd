import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseeventsService } from '../../services/firebaseevents.service';

@Injectable()
export class EventsDetailsResolver implements Resolve<any> {

  constructor(public FirebaseeventsService: FirebaseeventsService,) { }

  resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
      let itemId = route.paramMap.get('id');
      this.FirebaseeventsService.getEvents(itemId)
      .then(data => {
        data.id = itemId;
        resolve(data);
      }, err => {
        reject(err);
      })
    })
  }
}
