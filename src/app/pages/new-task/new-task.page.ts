import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {

  validations_form: FormGroup;
  image: any;

  constructor(
    
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
   
  ) { }

  ngOnInit() {
    this.resetFields();
  }

  resetFields(){
    
    this.validations_form = this.formBuilder.group({
      nome: new FormControl('', Validators.required),
      posologia: new FormControl('', Validators.required),
      quantidade: new FormControl('', Validators.required),
      hora: new FormControl('', Validators.required),
      gramagem: new FormControl('', Validators.required)
      
    });
  }

  onSubmit(value){
    let data = {
        nome: value.nome,
        posologia: value.posologia,
        quantidade: value. quantidade,
        hora: value.hora,
        gramagem: value.gramagem,
    
    }
    this.firebaseService.createTask(data)
    .then(
      res => {
        this.router.navigate(["/tabs/home"]);
      }
    )
  }

  

  async presentLoading(loading) {
    return await loading.present();
  }

}
