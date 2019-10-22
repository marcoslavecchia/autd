import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  validations_form: FormGroup;
  
  item: any;
  load: boolean = false;

  constructor(
    
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    
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
      nome: new FormControl(this.item.nome, Validators.required),
      posologia: new FormControl(this.item.posologia, Validators.required),
      quantidade: new FormControl(this.item.quantidade, Validators.required),
      hora: new FormControl(this.item.hora, Validators.required),
      gramagem: new FormControl (this.item.gramagem, Validators.required)
    });
  }



  onSubmit(value){
    let data = {
      nome: value.nome,
      posologia: value.posologia,
      quantidade: value. quantidade,
      hora: value.hora,

    }
    this.firebaseService.updateTask(this.item.id,data)
    .then(
      res => {
        this.router.navigate(["/tabs/home"]);
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
            this.firebaseService.deleteTask(this.item.id)
            .then(
              res => {
                this.router.navigate(["/tabs/home"]);
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
