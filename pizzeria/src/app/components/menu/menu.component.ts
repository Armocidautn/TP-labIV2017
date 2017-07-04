import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AutService } from '../../services/auth/aut.service';
import { WsService } from '../../services/ws/ws.service';
import { AuthHttp, AuthConfig, tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private auth: AutService;
public TipoAdministrador: boolean=false;
 public TipoEncargado: boolean=false;
 public TipoEmpleado: boolean=false;
 public TipoCliente: boolean=false;
  constructor(private router: Router) { 
     
     this.auth = new AutService(this.router);
      
        
 if (this.auth.getToken().perfil == "Administrador")
      {
      this.TipoAdministrador=true;
      }
   
  if (this.auth.getToken().perfil == "Encargado")
      {
      this.TipoEncargado=true;
    }
    if (this.auth.getToken().perfil == "Empleado")
      {
      this.TipoEmpleado=true;
    }
    if (this.auth.getToken().perfil == "Cliente")
      {
      this.TipoCliente=true;
      }



 }

  

  ngOnInit() {
  }
  salir()
  {
    //localStorage.setItem('token', null);
    localStorage.removeItem('token');
    window.alert('Hasta Luego!!!');
    this.router.navigate(['/login']);
  }

}




  
   


