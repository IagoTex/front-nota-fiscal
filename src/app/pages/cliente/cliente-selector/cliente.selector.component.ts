import {Component, EventEmitter, Input, Output, ViewChild} from "@angular/core";
import {Cliente} from "../../../entitys/cliente";
import {ClienteService} from "../../../shared/services/cliente.service";

@Component({
  selector: "cliente-selector",
  templateUrl: "./cliente.selector.component.html"
})
export class ClienteSelectorComponent{

  dataSource: Cliente[];
  clientePesquisado: string;
  pesquisando: boolean = false;

  @Input() clienteSelecionado: Cliente;
  @Output() valueChange = new EventEmitter<string>();

  constructor(private service:ClienteService) { }

  onValueChange(event: string){
    this.clientePesquisado = event;
    console.log(this.clientePesquisado)
    this.valueChange.emit(event);
    this.searchValidation();
    if(this.clientePesquisado.length % 2 == 0){
      this.service.findByNome(this.clientePesquisado).subscribe(clientes => {
        this.dataSource = clientes;
      })
    }

  }

  searchValidation(){
    if(this.clientePesquisado.length > 1){
      this.pesquisando = true;
    }
    else{
      this.pesquisando = false;
    }
  }



}

