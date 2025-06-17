import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NotaFiscalCrudComponent} from "./nota-fiscal-crud/nota.fiscal.crud.component";
import {
  DxButtonModule,
  DxDataGridModule, DxDateBoxModule,
  DxFormModule, DxNumberBoxModule,
  DxPopupModule, DxSelectBoxModule,
  DxTextBoxModule, DxTreeListModule,
  DxValidatorModule
} from "devextreme-angular";
import {BaseCrudModule} from "../../shared/components/base-crud/base.crud";
import {NotaFiscalFormComponent} from "./nota-fiscal-form/nota.fiscal.form.component";
import {ClienteModule} from "../cliente/cliente.module";

@NgModule({
  imports: [CommonModule, DxDataGridModule, BaseCrudModule, DxButtonModule, DxPopupModule, ClienteModule, DxFormModule, DxTextBoxModule, DxValidatorModule, DxDateBoxModule, DxTreeListModule, DxSelectBoxModule, DxNumberBoxModule],
  declarations:[NotaFiscalCrudComponent, NotaFiscalFormComponent],
  exports: [NotaFiscalCrudComponent, NotaFiscalFormComponent]
})
export class NotasFiscaisModule{ }
