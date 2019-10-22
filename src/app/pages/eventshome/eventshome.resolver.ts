import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FirebaseeventsService } from '../../services/firebaseevents.service';

@Injectable()
export class EventsHomeResolver implements Resolve<any> {

  constructor(private firebaseeventsService: FirebaseeventsService) {}

  resolve() {
    return this.firebaseeventsService.getEvent();
  }
}
