import { ULRProvider } from './../../providers/url.providers';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class  EmpresaProvider {

  constructor(
    private http: Http,
    private urlProvider: ULRProvider) {}

  public all() {
    return this.http.get(this.urlProvider.getAllEmpresa())
      .map((res: Response) => res.json());
  }

  public update(objeto: any) {
    return this.http.post(this.urlProvider.updateEmpresa(), JSON.stringify(objeto), {
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .map((resp: Response) => resp);
  }

}
