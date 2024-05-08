/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ClientDto } from '../models/client-dto';
import { delete6 } from '../fn/client-controller/delete-6';
import { Delete6$Params } from '../fn/client-controller/delete-6';
import { findAll6 } from '../fn/client-controller/find-all-6';
import { FindAll6$Params } from '../fn/client-controller/find-all-6';
import { findById6 } from '../fn/client-controller/find-by-id-6';
import { FindById6$Params } from '../fn/client-controller/find-by-id-6';
import { save6 } from '../fn/client-controller/save-6';
import { Save6$Params } from '../fn/client-controller/save-6';

@Injectable({ providedIn: 'root' })
export class ClientControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save6()` */
  static readonly Save6Path = '/gestiondestock/v1/clients/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save6()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save6$Response(params: Save6$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientDto>> {
    return save6(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save6$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save6(params: Save6$Params, context?: HttpContext): Observable<ClientDto> {
    return this.save6$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClientDto>): ClientDto => r.body)
    );
  }

  /** Path part for operation `findById6()` */
  static readonly FindById6Path = '/gestiondestock/v1/clients/{idClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById6()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById6$Response(params: FindById6$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientDto>> {
    return findById6(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById6(params: FindById6$Params, context?: HttpContext): Observable<ClientDto> {
    return this.findById6$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClientDto>): ClientDto => r.body)
    );
  }

  /** Path part for operation `findAll6()` */
  static readonly FindAll6Path = '/gestiondestock/v1/clients/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll6()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll6$Response(params?: FindAll6$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ClientDto>>> {
    return findAll6(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll6(params?: FindAll6$Params, context?: HttpContext): Observable<Array<ClientDto>> {
    return this.findAll6$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ClientDto>>): Array<ClientDto> => r.body)
    );
  }

  /** Path part for operation `delete6()` */
  static readonly Delete6Path = '/gestiondestock/v1/clients/delete/{idClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete6()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete6$Response(params: Delete6$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete6(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete6(params: Delete6$Params, context?: HttpContext): Observable<void> {
    return this.delete6$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
