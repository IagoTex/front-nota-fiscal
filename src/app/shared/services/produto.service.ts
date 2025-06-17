import {Injectable} from "@angular/core";
import {AbstractService} from "./base/abstract.service";
import {Produto} from "../../entitys/produto";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {URL_API} from "../../config/api.url";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends AbstractService<Produto>{

  constructor(protected override http: HttpClient) {
    super(http, 'produto');
  }

  findByDescricao(descricao:string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${URL_API}/produto/nome/${descricao}`);
  }

}
