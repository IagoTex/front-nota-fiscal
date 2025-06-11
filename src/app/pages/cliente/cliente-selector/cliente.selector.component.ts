import {Component} from "@angular/core";
import {Cliente} from "../../../entitys/cliente";

@Component({
  selector: "cliente-selector",
  templateUrl: "./cliente.selector.component.html"
})
export class ClienteSelectorComponent{

  dataSource: Cliente[];
  clienteSelecionado: Cliente;

  onValueChange(){

  }



}

