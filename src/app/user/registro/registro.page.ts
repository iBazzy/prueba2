import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TiendaService } from 'src/app/servicio/tienda.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public regForm: FormGroup;
  constructor(private builder:FormBuilder,private http: HttpClient,
    private router: Router, private TienditaApi:TiendaService ) {

      this.regForm= this.builder.group({
        firstName:['',[Validators.required,Validators.maxLength(15),Validators.minLength(1)]],
        lastName:['',[Validators.required,Validators.maxLength(20),Validators.minLength(4)]],
        age:[,[Validators.required,Validators.maxLength(98),Validators.minLength(18)]],
        username:['',[Validators.required,Validators.maxLength(10),Validators.minLength(5)]],
        password:[,[Validators.required,Validators.maxLength(16),Validators.minLength(8)]],
        birthDate:[,[Validators.required,Validators.minLength(1991)]],
        gender:[]
      })

    }

    ngOnInit() {
      this.regForm
    }
    registro(){
      this.http.post<any>(this.TienditaApi.urlUser,this.regForm.value).subscribe(
        res =>{
          alert("Usuario Registrado!");
          this.regForm.reset();
          this.router.navigate(['login'])
        },err=>{
          alert("Uusario no Registrado");
        }
      )
    }
}
