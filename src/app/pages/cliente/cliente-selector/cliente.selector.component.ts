import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {Cliente} from "../../../entitys/cliente";
import {ClienteService} from "../../../shared/services/cliente.service";
import {DxSelectBoxComponent} from "devextreme-angular";

@Component({
  selector: "cliente-selector",
  templateUrl: "./cliente.selector.component.html"
})
export class ClienteSelectorComponent implements OnInit{

  dataSource: Cliente[];
  clientePesquisado: string;
  pesquisando: boolean = false;

  @Input() clienteSelecionado: Cliente;
  @Output() valueChange = new EventEmitter<Cliente>();

  @ViewChild('resultados') resultados: DxSelectBoxComponent;

  constructor(private service:ClienteService) { }

  ngOnInit() {
    this.clienteSelecionado = new Cliente();
  }

  onValueChange(event: string){
    this.clientePesquisado = event;
    if(this.clientePesquisado.length % 2 == 0){
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
    if(this.clientePesquisado.length > 1){
      this.pesquisando = true;
    }
    else{
      this.pesquisando = false;
    }
  }


  nomeVlaueChange(cliente: Cliente) {
    this.clienteSelecionado = cliente;
    console.log(cliente);
    this.clientePesquisado = `[${cliente.codCliente}] - ${cliente.nomeCliente}`;
    this.valueChange.emit(this.clienteSelecionado);

  }

  formataCliente(clienteFormatado: any){
    return clienteFormatado ? `[${clienteFormatado.codCliente}] - ${clienteFormatado.nomeCliente}` : '';
  }
}

