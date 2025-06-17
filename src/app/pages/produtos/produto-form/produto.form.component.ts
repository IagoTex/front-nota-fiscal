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

  @ViewChild('formulario') formProduto: DxFormComponent;

  @Input() produto: Produto;
  @Input() titulo: string;
  @Input() textoBotao:string;
  @Input() tipoFormulario: TipoFormulario = 'create';

  @Output() submit = new EventEmitter<any>();

  mostrarPesquisa: boolean = false;

  constructor(private service:ProdutoService) { }

  ngOnInit() {
    this.produto = new Produto();
    this.mostrarPesquisa = this.tipoFormulario != "create" ? true: false;
  }

  selecionaProduto(produto:Produto){
    this.produto = produto;
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
      this.apagaProduto();
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.')
    }

  }

  save(){
    this.service.save(this.produto).subscribe(
      response => {
        this.submit.emit(response);
        alert('Produto salvo com sucesso!')
      }, error => {
        this.submit.emit(error);
        alert('Erro ao salvar produto!')
      }
    )
  }

  delete(){
    if(this.produto.id != null){
      this.service.delete(this.produto.id).subscribe(
        response => {
          this.submit.emit(response);
          alert('Produto deletado com sucesso!')
        }, error => {
          this.submit.emit(error);
          alert('Erro ao deletar cliente')
        }
      )
    }
  }

  apagaProduto(){
    this.produto.id = null;
    this.formProduto.instance.resetValues()
    this.formProduto.instance.reset()
  }

}
