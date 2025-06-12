import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {Cliente} from "../../../entitys/cliente";
import {ClienteService} from "../../../shared/services/cliente.service";
import {DxFormComponent} from "devextreme-angular";

type TipoFormulario = 'create' | 'update' | 'delete';

@Component({
  selector: "cliente-form",
  templateUrl: "./cliente.form.component.html"
})
export class ClienteFormComponent implements OnInit{

  @ViewChild('formulario') formCliente: DxFormComponent;

  @Input() cliente: Cliente;
  @Input() titulo: string;
  @Input() textoBotao:string;
  @Input() tipoFormulario: TipoFormulario = 'create';

  mostrarPesquisa: boolean = false;

  @Output() submit = new EventEmitter<any>();

  constructor(private clienteService:ClienteService) { }

  ngOnInit() {
    this.cliente = new Cliente();
    this.mostrarPesquisa = this.tipoFormulario != "create" ? true: false;
  }

  onSubmit(){

    if(this.cliente.nomeCliente!= null && this.cliente.codCliente !=null){
      switch (this.tipoFormulario){

        case "create":
          this.save();
          break

        case "update":
          this.save();
          break

        case "delete":
          this.delete()
          break

      }
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.')
    }

  }

  save(){
    this.clienteService.save(this.cliente).subscribe(
      response => {
        this.submit.emit(response);
      }, error => {
        this.submit.emit(error);
      }
    )
  }

  delete(){
    if(this.cliente.id != null){
      this.clienteService.save(this.cliente).subscribe(
        response => {
          this.submit.emit(response);
        }, error => {
          this.submit.emit(error);
        }
      )
    }
  }
}
