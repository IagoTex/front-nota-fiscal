import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClienteCrudComponent} from "./cliente-crud/cliente.crud.component";
import {BaseCrudModule} from "../../shared/components/base-crud/base.crud";
import {DxDataGridModule} from "devextreme-angular";

@NgModule({
  imports:
    [CommonModule,
      BaseCrudModule, DxDataGridModule

    ],
  declarations: [ClienteCrudComponent],
  exports: [ClienteCrudComponent]

})
export class ClienteModule{ }
