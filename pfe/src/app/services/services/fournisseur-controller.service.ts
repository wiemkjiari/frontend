/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete2 } from '../fn/fournisseur-controller/delete-2';
import { Delete2$Params } from '../fn/fournisseur-controller/delete-2';
import { findAll2 } from '../fn/fournisseur-controller/find-all-2';
import { FindAll2$Params } from '../fn/fournisseur-controller/find-all-2';
import { findById2 } from '../fn/fournisseur-controller/find-by-id-2';
import { FindById2$Params } from '../fn/fournisseur-controller/find-by-id-2';
import { FournisseurDto } from '../models/fournisseur-dto';
import { save2 } from '../fn/fournisseur-controller/save-2';
import { Save2$Params } from '../fn/fournisseur-controller/save-2';

@Injectable({ providedIn: 'root' })
export class FournisseurControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save2()` */
  static readonly Save2Path = '/gestiondestock/v1/fournisseurs/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2$Response(params: Save2$Params, context?: HttpContext): Observable<StrictHttpResponse<FournisseurDto>> {
    return save2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2(params: Save2$Params, context?: HttpContext): Observable<FournisseurDto> {
    return this.save2$Response(params, context).pipe(
      map((r: StrictHttpResponse<FournisseurDto>): FournisseurDto => r.body)
    );
  }

  /** Path part for operation `findById2()` */
  static readonly FindById2Path = '/gestiondestock/v1/fournisseurs/{idFournisseur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2$Response(params: FindById2$Params, context?: HttpContext): Observable<StrictHttpResponse<FournisseurDto>> {
    return findById2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2(params: FindById2$Params, context?: HttpContext): Observable<FournisseurDto> {
    return this.findById2$Response(params, context).pipe(
      map((r: StrictHttpResponse<FournisseurDto>): FournisseurDto => r.body)
    );
  }

  /** Path part for operation `findAll2()` */
  static readonly FindAll2Path = '/gestiondestock/v1/fournisseurs/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2$Response(params?: FindAll2$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FournisseurDto>>> {
    return findAll2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2(params?: FindAll2$Params, context?: HttpContext): Observable<Array<FournisseurDto>> {
    return this.findAll2$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FournisseurDto>>): Array<FournisseurDto> => r.body)
    );
  }

  /** Path part for operation `delete2()` */
  static readonly Delete2Path = '/gestiondestock/v1/fournisseurs/delete/{idFournisseur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2$Response(params: Delete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2(params: Delete2$Params, context?: HttpContext): Observable<void> {
    return this.delete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
