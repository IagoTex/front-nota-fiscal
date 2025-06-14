import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {Cliente} from "../../../entitys/cliente";
import {ClienteService} from "../../../shared/services/cliente.service";
import {DxFormComponent, DxTextBoxComponent} from "devextreme-angular";

type TipoFormulario = 'create' | 'update' | 'delete';

@Component({
  selector: "cliente-form",
  templateUrl: "./cliente.form.component.html",
  styleUrls: ['./cliente.form.component.scss']
})
export class ClienteFormComponent implements OnInit{

  @ViewChild('formulario') formCliente: DxFormComponent;

  @ViewChild('codTbx') codTbx: DxTextBoxComponent;

  @ViewChild('nomeTbx') nomeTbx: DxTextBoxComponent;

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
      this.apagaCliente()

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

  selecionaCliente(cliente:Cliente){

    this.cliente = cliente;
  }

  apagaCliente(){
    this.cliente.codCliente = null;
    this.cliente.nomeCliente = null;
    this.cliente.id = null;
  }

  protected readonly Cliente = Cliente;
}
