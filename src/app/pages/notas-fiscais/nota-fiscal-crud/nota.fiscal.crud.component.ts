import {Component} from "@angular/core";
import {Nota} from "../../../entitys/nota";
import {Itens} from "../../../entitys/itens";

@Component({
  selector:'nota-fiscal-crud',
  templateUrl: './nota.fiscal.crud.component.html'
})
export class NotaFiscalCrudComponent{

  dataSource: Nota[];

  itens: Itens[];

  model: Nota;

  mostrarPopUp: boolean = false;



  abrirPopUp(){
    this.mostrarPopUp = true;
  }
}
