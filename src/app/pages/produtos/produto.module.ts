import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProdutoCrudComponent} from "./produto-crud/produto.crud.component";
import {ProdutoFormComponent} from "./produto-form/produto.form.component";
import {ClienteModule} from "../cliente/cliente.module";
import {
  DxButtonModule, DxDataGridModule,
  DxFormModule,
  DxNumberBoxModule, DxSelectBoxModule,
  DxTemplateModule,
  DxTextBoxModule, DxToastModule,
  DxValidatorModule
} from "devextreme-angular";
import {DxiColumnModule, DxiItemModule, DxiValidationRuleModule} from "devextreme-angular/ui/nested";
import {BaseCrudModule} from "../../shared/components/base-crud/base.crud";
import {ProdutoSelectorComponent} from "./produto-selector/produto.selector.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [ProdutoCrudComponent, ProdutoFormComponent, ProdutoSelectorComponent],
  imports: [CommonModule, ClienteModule, DxButtonModule, DxFormModule, DxTemplateModule, DxTextBoxModule, DxValidatorModule, DxiItemModule, DxiValidationRuleModule, DxNumberBoxModule, BaseCrudModule, DxDataGridModule, DxiColumnModule, DxToastModule, DxSelectBoxModule, ReactiveFormsModule, FormsModule],
  exports: [ProdutoCrudComponent, ProdutoFormComponent, ProdutoSelectorComponent]
})
export class ProdutoModule{ }
