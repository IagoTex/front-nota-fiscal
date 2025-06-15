import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProdutoCrudComponent} from "./produto-crud/produto.crud.component";
import {ProdutoFormComponent} from "./produto-form/produto.form.component";
import {ClienteModule} from "../cliente/cliente.module";
import {
  DxButtonModule, DxDataGridModule,
  DxFormModule,
  DxNumberBoxModule,
  DxTemplateModule,
  DxTextBoxModule,
  DxValidatorModule
} from "devextreme-angular";
import {DxiColumnModule, DxiItemModule, DxiValidationRuleModule} from "devextreme-angular/ui/nested";
import {BaseCrudModule} from "../../shared/components/base-crud/base.crud";

@NgModule({
  declarations: [ProdutoCrudComponent, ProdutoFormComponent],
  imports: [CommonModule, ClienteModule, DxButtonModule, DxFormModule, DxTemplateModule, DxTextBoxModule, DxValidatorModule, DxiItemModule, DxiValidationRuleModule, DxNumberBoxModule, BaseCrudModule, DxDataGridModule, DxiColumnModule],
  exports: [ProdutoCrudComponent, ProdutoFormComponent]
})
export class ProdutoModule{ }
