import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {URL_API} from "../../../config/api.url";
import {AbstractEntity} from "../../../entitys/base/abstract.entity";

export abstract class AbstractService<T extends AbstractEntity>{

  constructor(protected http: HttpClient, protected url:string) { }

  findyById(id:number): Observable<T>{ return this.http.get<T>(`${URL_API}/${this.url}/${id}`) }

  findAll():Observable<T[]>{ return this.http.get<T[]>(`${URL_API}/${this.url}`) }

  save(entity: T): Observable<T>{ return this.http.post<T>(`${URL_API}/${this.url}`, entity) }

  delete(id:number): Observable<T>{ return this.http.delete<T>(`${URL_API}/${this.url}/${id}`); }
}
