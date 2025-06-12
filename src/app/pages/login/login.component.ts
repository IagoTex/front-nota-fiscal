import {Component, NgModule, OnInit, ViewChild} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DxButtonModule, DxFormComponent, DxFormModule, DxTextBoxModule, DxValidatorModule} from "devextreme-angular";
import {AuthRequest} from "../../entitys/security/authRequest";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/services/security/auth.service";

@Component({
  selector: "login-component",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit{

  @ViewChild('form') formulario: DxFormComponent;

  user: AuthRequest;
  possuiLogin: boolean = true;
  textoBtn:string;
  textoTroca:string;

  constructor(private router: Router,
              private service: AuthService){
    this.user = new AuthRequest();
  }

  ngOnInit() {
    this.trocaTexto()
  }

  onSubmit(){
    const result = this.formulario.instance.validate();
    if(result.isValid){
      if(this.possuiLogin == true){
        this.login();
      }else {
        this.cadastro();
      }

    }else{
      alert("Preencha todos os campos!")
    }
  }

  cadastro(){
    this.service.register(this.user).subscribe(response =>{
      console.log("Registro realizado com sucesso!", response)
    }, error => {
      alert("Erro no cadastro!");
      console.log(error)
    })
  }

  login(){
    this.service.login(this.user).subscribe(response =>{
      console.log("Login bem-sucedido!", response);
      this.router.navigate(['/home']);
    }, error => {
      alert("Erro no login");
      console.log(error);
    })
  }

  trocaLoginCadastro(){
    this.possuiLogin = !this.possuiLogin;
    this.trocaTexto();
    this.user.password = null;
    this.user.username = null;
  }

  trocaTexto(){
    if(this.possuiLogin == true){
      this.textoBtn = "Login"
      this.textoTroca = "Não tem uma conta? Faça o cadastro!"
    }else{
      this.textoBtn = "Cadastrar";
      this.textoTroca = "Voltar para a tela de login!"
    }
  }



}

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [CommonModule, DxFormModule, DxTextBoxModule, DxButtonModule, DxValidatorModule]
})
export class LoginComponentModule{ }
