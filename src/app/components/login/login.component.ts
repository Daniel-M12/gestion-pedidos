import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private readonly us: UserService,
    private router: Router
    ){}

  loginForm = this.fb.group({
    uid: ['', Validators.required],
    pwd: ['', Validators.required]
  });

  login(data: any){
    this.us.login(data).subscribe((rest:any)=>{
      console.log(rest);
      console.log(rest.data);
      
      if(rest.isSuccess){
        //console.log(rest.data.token);
        sessionStorage.setItem('token',rest.data.token);
        sessionStorage.setItem('user', rest.data.dni);
        console.log(sessionStorage.getItem('token'));

        this.router.navigateByUrl('/admin',{skipLocationChange:false}).then(()=>{
          this.router.navigate(['admin']);
          window.location.reload();
        })
      }else{
        alert('Credenciales Inválidas');
      }
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.login(this.loginForm.value);
    }
    else{
      alert("formulario inválido");
    }
  }
}
