import { Component, OnInit } from '@angular/core';
import { FirebaseeventsService } from '../../services/firebaseevents.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eventsdetails',
  templateUrl: './eventsdetails.page.html',
  styleUrls: ['./eventsdetails.page.scss'],
})
export class EventsdetailsPage implements OnInit {

  validations_form: FormGroup;
  
  item: any;
  load: boolean = false;

  constructor(
    
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private firebaseeventsService: FirebaseeventsService,
    
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.route.data.subscribe(routeData => {
     let data = routeData['data'];
     if (data) {
       this.item = data;
       
     }
    })
    this.validations_form = this.formBuilder.group({
      tipo: new FormControl(this.item.tipo, Validators.required),
      data: new FormControl(this.item.data, Validators.required),
      observacoes: new FormControl(this.item.observacoes, Validators.required),
      hora: new FormControl(this.item.hora, Validators.required),
      
    });
  }

  onSubmit(value){
    let data = {
        tipo: value.tipo,
        data: value.data,
        observacoes: value.observacoes,
        hora: value.hora,
      
    }
    this.firebaseeventsService.updateEvent(this.item.id,data)
    .then(
      res => {
        this.router.navigate(["/tabs/eventshome"]);
      }
    )
  }

  async delete() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm',
      message: 'Do you want to delete ' + this.item.title + '?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        },
        {
          text: 'Yes',
          handler: () => {
            this.firebaseeventsService.deleteEvent(this.item.id)
            .then(
              res => {
                this.router.navigate(["/tabs/eventshome"]);
              },
              err => console.log(err)
            )
          }
        }
      ]
    });
    await alert.present();
  }

  
  async presentLoading(loading) {
    return await loading.present();
  }

}
