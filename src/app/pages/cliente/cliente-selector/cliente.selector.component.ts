import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {Cliente} from "../../../entitys/cliente";
import {ClienteService} from "../../../shared/services/cliente.service";

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

  constructor(private service:ClienteService) { }

  ngOnInit() {
    this.clienteSelecionado = new Cliente();
  }

  onValueChange(event: string){
    this.clientePesquisado = event;
    console.log(this.clientePesquisado)
    if(this.clientePesquisado.length % 2 == 0){
      this.service.findByNome(this.clientePesquisado).subscribe(clientes => {
        this.dataSource = clientes;
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
    this.clientePesquisado = '';
    this.valueChange.emit(this.clienteSelecionado);

  }
}

