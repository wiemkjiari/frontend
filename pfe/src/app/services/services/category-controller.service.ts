/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CategoryDto } from '../models/category-dto';
import { delete7 } from '../fn/category-controller/delete-7';
import { Delete7$Params } from '../fn/category-controller/delete-7';
import { findAll7 } from '../fn/category-controller/find-all-7';
import { FindAll7$Params } from '../fn/category-controller/find-all-7';
import { findByCode3 } from '../fn/category-controller/find-by-code-3';
import { FindByCode3$Params } from '../fn/category-controller/find-by-code-3';
import { findById7 } from '../fn/category-controller/find-by-id-7';
import { FindById7$Params } from '../fn/category-controller/find-by-id-7';
import { save7 } from '../fn/category-controller/save-7';
import { Save7$Params } from '../fn/category-controller/save-7';

@Injectable({ providedIn: 'root' })
export class CategoryControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient,) {
    super(config, http);
  }

  /** Path part for operation `save7()` */
  static readonly Save7Path = '/gestiondestock/v1/categories/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save7()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save7$Response(params: Save7$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return save7(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save7$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save7(params: Save7$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.save7$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `findById7()` */
  static readonly FindById7Path = '/gestiondestock/v1/categories/{idCategory}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById7()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById7$Response(params: FindById7$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return findById7(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById7(params: FindById7$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.findById7$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `findByCode3()` */
  static readonly FindByCode3Path = '/gestiondestock/v1/categories/filter/{codeCategory}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCode3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode3$Response(params: FindByCode3$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return findByCode3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCode3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode3(params: FindByCode3$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.findByCode3$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `findAll7()` */
  static readonly FindAll7Path = '/gestiondestock/v1/categories/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll7()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll7$Response(params?: FindAll7$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CategoryDto>>> {
    return findAll7(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll7(params?: FindAll7$Params, context?: HttpContext): Observable<Array<CategoryDto>> {
    return this.findAll7$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CategoryDto>>): Array<CategoryDto> => r.body)
    );
  }

  /** Path part for operation `delete7()` */
  static readonly Delete7Path = '/gestiondestock/v1/categories/delete/{idCategory}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete7()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete7$Response(params: Delete7$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete7(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete7(params: Delete7$Params, context?: HttpContext): Observable<void> {
    return this.delete7$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
