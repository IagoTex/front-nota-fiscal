import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClienteCrudComponent} from "./cliente-crud/cliente.crud.component";
import {BaseCrudModule} from "../../shared/components/base-crud/base.crud";
import {
    DxButtonModule,
    DxDataGridModule,
    DxFormModule,
    DxSelectBoxModule,
    DxTextBoxModule, DxToastModule,
    DxValidatorModule
} from "devextreme-angular";
import {ClienteFormComponent} from "./cliente-form/cliente.form.component";
import {ClienteSelectorComponent} from "./cliente-selector/cliente.selector.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports:
        [CommonModule,
            BaseCrudModule, DxDataGridModule, DxFormModule, DxTextBoxModule, DxButtonModule, DxValidatorModule, DxSelectBoxModule, FormsModule, DxToastModule

        ],
  declarations: [ClienteCrudComponent, ClienteFormComponent, ClienteSelectorComponent],
  exports: [ClienteCrudComponent, ClienteFormComponent, ClienteSelectorComponent]

})
export class ClienteModule{ }
