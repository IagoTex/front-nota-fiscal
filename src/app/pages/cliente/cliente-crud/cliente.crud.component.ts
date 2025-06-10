import {Component} from "@angular/core";
import {Cliente} from "../../../entitys/cliente";

@Component({
  selector: "cliente-crud",
  templateUrl: "./cliente.crud.component.html",
  styleUrls: ["./cliente.crud.component.scss"]
})
export class ClienteCrudComponent{

  dataSource:Cliente[];



}
