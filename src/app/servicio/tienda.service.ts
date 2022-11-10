import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../modelos/usuario';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/producto';
@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  public urlUser="https://dummyjson.com/users/add";
  public urlProducts=" https://dummyjson.com/auth/products?skip=0";
  public urlLogin=" https://dummyjson.com/auth/login ";


  public lista: Observable<Producto>
  constructor(private http:HttpClient) {


  //Uso de API USER--->
  }
  public agregarUsuario(){
    this.http.post(`${this.urlUser}`,{

    })


  }
  public obternerTodo(){
    return this.http.get<Array<Producto>>(`${this.urlProducts}?
    _page=1`)
    .subscribe(datos =>{

    })}

  public obtenerUsuario(){
    this.http.get(this.urlUser);
  }

  /// TERMINO DE USO API USER

  public obtenerLogin(){
    this.http.get(`${this.urlLogin}`)
  }
 }




