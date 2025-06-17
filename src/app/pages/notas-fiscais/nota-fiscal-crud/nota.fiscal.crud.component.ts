import {Component} from "@angular/core";
import {Nota} from "../../../entitys/nota";
import {Itens} from "../../../entitys/itens";

@Component({
  selector:'nota-fiscal-crud',
  templateUrl: './nota.fiscal.crud.component.html'
})
export class NotaFiscalCrudComponent{

  model: Nota;

  mostrarPopUp: boolean = false;

  dataSource: Nota[];

  itens: Itens[];



  abrirPopUp(){
    this.mostrarPopUp = true;
  }
}
