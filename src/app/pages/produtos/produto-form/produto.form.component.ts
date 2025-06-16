import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {Produto} from "../../../entitys/produto";
import {DxFormComponent} from "devextreme-angular";
import {ProdutoService} from "../../../shared/services/produto.service";

type TipoFormulario = 'create' | 'update' | 'delete';

@Component({
  selector: 'produto-form',
  templateUrl: './produto.form.component.html',
  styleUrls: ['./produto.form.component.scss']
})
export class ProdutoFormComponent implements OnInit{

  @ViewChild('formulario') formCliente: DxFormComponent;

  @Input() produto: Produto;
  @Input() titulo: string;
  @Input() textoBotao:string;
  @Input() tipoFormulario: TipoFormulario = 'create';

  mostrarPesquisa: boolean = false;

  @Output() submit = new EventEmitter<any>();

  constructor(private service:ProdutoService) { }

  ngOnInit() {
    this.produto = new Produto();
    this.mostrarPesquisa = this.tipoFormulario != "create" ? true: false;
  }

  onSubmit(){

    if(this.produto.codProduto!= null && this.produto.descricao !=null && this.produto.preco !=null){
      switch (this.tipoFormulario){

        case "create":
          this.save();
          break

        case "update":
          this.save();
          break

        case "delete":
          this.delete()
          break

      }
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.')
    }

  }

  save(){
    this.service.save(this.produto).subscribe(
      response => {
        this.submit.emit(response);
      }, error => {
        this.submit.emit(error);
      }
    )
  }

  delete(){
    if(this.produto.id != null){
      this.service.save(this.produto).subscribe(
        response => {
          this.submit.emit(response);
        }, error => {
          this.submit.emit(error);
        }
      )
    }
  }

  apagaProduto(){
    this.produto.preco = null;
    this.produto.codProduto = null;
    this.produto.descricao = null;
    this.produto.id = null;
  }

}
