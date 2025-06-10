import {Component, Input, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DxTabPanelModule, DxTabsModule} from "devextreme-angular";

@Component({
  selector: "base-crud",
  templateUrl: "./base.crud.html",
  styleUrls: ["./base.crud.scss"]
})
export class BaseCrud{


  @Input() titulo:string;


}

@NgModule({
  imports: [CommonModule, DxTabPanelModule, DxTabsModule],
  declarations: [BaseCrud],
  exports: [BaseCrud]
})
export class BaseCrudModule{ }
