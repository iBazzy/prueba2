import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TiendaService } from 'src/app/servicio/tienda.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm:  FormGroup;
  constructor(private http: HttpClient, private TiendaApi: TiendaService,
    private builder: FormBuilder, private router: Router) {

      this.loginForm=this.builder.group({
        username: ['',Validators.required,Validators.minLength(5),Validators.maxLength(10)],
        password:['',Validators.required,Validators.minLength(8),Validators.maxLength(16)]
      })

    }
  ngOnInit() {
  }

  public verificar(){

  }
}
