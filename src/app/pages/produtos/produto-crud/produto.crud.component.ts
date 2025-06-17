import {Component, OnInit} from "@angular/core";
import {Cliente} from "../../../entitys/cliente";
import {ClienteService} from "../../../shared/services/cliente.service";
import {Produto} from "../../../entitys/produto";
import {ProdutoService} from "../../../shared/services/produto.service";

@Component({
  selector: 'produto-crud',
  templateUrl: './produto.crud.component.html',
  styleUrls: ['./produto.crud.component.scss']
})
export class ProdutoCrudComponent implements OnInit{

  dataSource:Produto[];

  model: Produto;

  constructor(private service: ProdutoService) {
  }

  ngOnInit() {
 this.populaDataSource();
  }

  mostrarLog(log: any){
    console.log(log)
  }

  populaDataSource(){
    this.service.findAll().subscribe(produtos => {
      this.dataSource = produtos;
    }, error => {
      console.log("Erro ao trazer a lista de clientes", error);
    })

  }

}
