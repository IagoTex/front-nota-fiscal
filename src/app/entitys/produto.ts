import {AbstractEntity} from "./base/abstract.entity";

export class Produto extends AbstractEntity{

  codProduto:string;

  descricao:string;

  preco:number;
}
