import { Component, OnInit } from '@angular/core';
import { FirebaseeventsService } from '../../services/firebaseevents.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-eventsnewtask',
  templateUrl: './eventsnewtask.page.html',
  styleUrls: ['./eventsnewtask.page.scss'],
})
export class EventsnewtaskPage implements OnInit {

  validations_form: FormGroup;
  image: any;

  constructor(
    
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseeventsService : FirebaseeventsService ,
   
  ) { }

  ngOnInit() {
    this.resetFields();
  }

  resetFields(){
    
    this.validations_form = this.formBuilder.group({
      tipo: new FormControl('', Validators.required),
      data: new FormControl('', Validators.required),
      observacoes: new FormControl('', Validators.required),
      hora: new FormControl('', Validators.required)
    });
  }

  onSubmit(value){
    let data = {
      tipo: value.tipo,
      data: value.data,
      observacoes: value.observacoes,
      hora: value.hora,
    }
    this.firebaseeventsService.createEvent(data)
    .then(
      res => {
        this.router.navigate(["/tabs/eventshome"]);
      }
    )
  }

  

  async presentLoading(loading) {
    return await loading.present();
  }

}
