import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NotaFiscalCrudComponent} from "./nota-fiscal-crud/nota.fiscal.crud.component";
import {DxButtonModule, DxDataGridModule, DxPopupModule} from "devextreme-angular";
import {BaseCrudModule} from "../../shared/components/base-crud/base.crud";

@NgModule({
  imports: [CommonModule, DxDataGridModule, BaseCrudModule, DxButtonModule, DxPopupModule],
  declarations:[NotaFiscalCrudComponent],
  exports: [NotaFiscalCrudComponent]
})
export class NotasFiscaisModule{ }
