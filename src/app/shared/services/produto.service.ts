import {Injectable} from "@angular/core";
import {AbstractService} from "./base/abstract.service";
import {Produto} from "../../entitys/produto";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends AbstractService<Produto>{

  constructor(protected override http: HttpClient) {
    super(http, 'produto');
  }

}
