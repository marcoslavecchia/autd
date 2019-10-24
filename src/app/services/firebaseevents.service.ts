import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseeventsService {

  private snapshotChangesSubscription: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ){}

  getEvent(){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if(currentUser){
          this.snapshotChangesSubscription = this.afs.collection('usuarios').doc(currentUser.uid).collection('eventos').snapshotChanges();
          resolve(this.snapshotChangesSubscription);
        }
      })
    })
  }

  getEvents(eventId){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if(currentUser){
          this.snapshotChangesSubscription = this.afs.doc<any>('usuarios/' + currentUser.uid + '/eventos/' + eventId).valueChanges()
          .subscribe(snapshots => {
            resolve(snapshots);
          }, err => {
            reject(err)
          })
        }
      })
    });
  }

  unsubscribeOnLogOut(){
    //remember to unsubscribe from the snapshotChanges
    this.snapshotChangesSubscription.unsubscribe();
  }

  updateEvent(eventKey, value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('usuarios').doc(currentUser.uid).collection('eventos').doc(eventKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  deleteEvent(eventKey){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('usuarios').doc(currentUser.uid).collection('eventos').doc(eventKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  createEvent(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('usuarios').doc(currentUser.uid).collection('eventos').add({
        tipo: value.tipo,
        data: value.data,
        observacoes: value.observacoes,
        hora: value.hora,
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

 
}