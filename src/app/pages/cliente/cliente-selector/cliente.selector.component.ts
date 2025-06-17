import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {Cliente} from "../../../entitys/cliente";
import {ClienteService} from "../../../shared/services/cliente.service";
import {DxSelectBoxComponent, DxTextBoxComponent} from "devextreme-angular";

@Component({
  selector: "cliente-selector",
  templateUrl: "./cliente.selector.component.html"
})
export class ClienteSelectorComponent implements OnInit{

  dataSource: Cliente[];
  clientePesquisado: string;
  pesquisando: boolean = false;

  onFocus: boolean;

  @Input() clienteSelecionado: Cliente;
  @Output() valueChange = new EventEmitter<Cliente>();

  @ViewChild('resultados') resultados: DxSelectBoxComponent;
  @ViewChild('textBox') textBox: DxTextBoxComponent;

  constructor(private service:ClienteService) { }

  ngOnInit() {
    this.clienteSelecionado = new Cliente();
  }

  onValueChange(event: string){
    this.clientePesquisado = event;
    if(this.clientePesquisado == '' || this.clientePesquisado == null){
      this.clienteSelecionado = null;
    }
    if(this.clientePesquisado.length % 2 == 0 && this.clientePesquisado){
      this.service.findByNome(this.clientePesquisado).subscribe(clientes => {
        this.dataSource = clientes;
        this.pesquisando = true;

        setTimeout(() =>{
          if(this.resultados?.instance){
            this.resultados.instance.open()
          }
        })
      })
    }
    this.searchValidation();

  }

  searchValidation(){
    if(this.onFocus == true){
      this.pesquisando = true;
    }
    else{
      this.pesquisando = false;
    }
  }


  nomeVlaueChange(cliente: Cliente) {
    this.clienteSelecionado = cliente;
    if(this.clienteSelecionado.id != null){
      this.pesquisando = false;
    }
    this.clientePesquisado = `[${cliente.codCliente}] - ${cliente.nomeCliente}`;
    console.log(this.clienteSelecionado)
    this.valueChange.emit(this.clienteSelecionado);

  }

  formataCliente(clienteFormatado: any){
    return clienteFormatado ? `[${clienteFormatado.codCliente}] - ${clienteFormatado.nomeCliente}` : '';
  }
}

