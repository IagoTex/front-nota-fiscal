import {Component, OnInit} from "@angular/core";
import {Cliente} from "../../../entitys/cliente";
import {ClienteService} from "../../../shared/services/cliente.service";

@Component({
  selector: "cliente-crud",
  templateUrl: "./cliente.crud.component.html",
  styleUrls: ["./cliente.crud.component.scss"]
})
export class ClienteCrudComponent implements OnInit{

  dataSource:Cliente[];

  model: Cliente;

  constructor(private service: ClienteService) {
  }

  ngOnInit() {
    this.service.findAll().subscribe(clientes => {
      this.dataSource = clientes;
    }, error => {
      console.log("Erro ao trazer a lista de clientes", error);
    })
  }

  mostrarLog(log: any){
    console.log(log)
  }
}
