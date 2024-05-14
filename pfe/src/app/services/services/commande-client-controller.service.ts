/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CommandeClientDto } from '../models/commande-client-dto';
import { delete5 } from '../fn/commande-client-controller/delete-5';
import { Delete5$Params } from '../fn/commande-client-controller/delete-5';
import { deleteArticle1 } from '../fn/commande-client-controller/delete-article-1';
import { DeleteArticle1$Params } from '../fn/commande-client-controller/delete-article-1';
import { findAll5 } from '../fn/commande-client-controller/find-all-5';
import { FindAll5$Params } from '../fn/commande-client-controller/find-all-5';
import { findAllLignesCommandesClientByCommandeClientId } from '../fn/commande-client-controller/find-all-lignes-commandes-client-by-commande-client-id';
import { FindAllLignesCommandesClientByCommandeClientId$Params } from '../fn/commande-client-controller/find-all-lignes-commandes-client-by-commande-client-id';
import { findByCode2 } from '../fn/commande-client-controller/find-by-code-2';
import { FindByCode2$Params } from '../fn/commande-client-controller/find-by-code-2';
import { findById5 } from '../fn/commande-client-controller/find-by-id-5';
import { FindById5$Params } from '../fn/commande-client-controller/find-by-id-5';
import { LigneCommandeClientDto } from '../models/ligne-commande-client-dto';
import { save5 } from '../fn/commande-client-controller/save-5';
import { Save5$Params } from '../fn/commande-client-controller/save-5';
import { updateArticle1 } from '../fn/commande-client-controller/update-article-1';
import { UpdateArticle1$Params } from '../fn/commande-client-controller/update-article-1';
import { updateClient } from '../fn/commande-client-controller/update-client';
import { UpdateClient$Params } from '../fn/commande-client-controller/update-client';
import { updateEtatCommande1 } from '../fn/commande-client-controller/update-etat-commande-1';
import { UpdateEtatCommande1$Params } from '../fn/commande-client-controller/update-etat-commande-1';
import { updateQuantiteCommande1 } from '../fn/commande-client-controller/update-quantite-commande-1';
import { UpdateQuantiteCommande1$Params } from '../fn/commande-client-controller/update-quantite-commande-1';

@Injectable({ providedIn: 'root' })
export class CommandeClientControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save5()` */
  static readonly Save5Path = '/gestiondestock/v1/commandesclients/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save5()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save5$Response(params: Save5$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return save5(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save5$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save5(params: Save5$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.save5$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `updateQuantiteCommande1()` */
  static readonly UpdateQuantiteCommande1Path = '/gestiondestock/v1/commandesclients/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateQuantiteCommande1()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateQuantiteCommande1$Response(params: UpdateQuantiteCommande1$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return updateQuantiteCommande1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateQuantiteCommande1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateQuantiteCommande1(params: UpdateQuantiteCommande1$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.updateQuantiteCommande1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `updateEtatCommande1()` */
  static readonly UpdateEtatCommande1Path = '/gestiondestock/v1/commandesclients/update/etat/{idCommande}/{etatCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEtatCommande1()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateEtatCommande1$Response(params: UpdateEtatCommande1$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return updateEtatCommande1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEtatCommande1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateEtatCommande1(params: UpdateEtatCommande1$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.updateEtatCommande1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `updateClient()` */
  static readonly UpdateClientPath = '/gestiondestock/v1/commandesclients/update/client/{idCommande}/{idClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateClient()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateClient$Response(params: UpdateClient$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return updateClient(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateClient$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateClient(params: UpdateClient$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.updateClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `updateArticle1()` */
  static readonly UpdateArticle1Path = '/gestiondestock/v1/commandesclients/update/article/{idCommande}/{idLigneCommande}/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateArticle1()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArticle1$Response(params: UpdateArticle1$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return updateArticle1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateArticle1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArticle1(params: UpdateArticle1$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.updateArticle1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `findById5()` */
  static readonly FindById5Path = '/gestiondestock/v1/commandesclients/{idCommandeClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById5()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById5$Response(params: FindById5$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return findById5(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById5(params: FindById5$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.findById5$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `findAllLignesCommandesClientByCommandeClientId()` */
  static readonly FindAllLignesCommandesClientByCommandeClientIdPath = '/gestiondestock/v1/commandesclients/lignesCommande/{idCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllLignesCommandesClientByCommandeClientId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllLignesCommandesClientByCommandeClientId$Response(params: FindAllLignesCommandesClientByCommandeClientId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    return findAllLignesCommandesClientByCommandeClientId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllLignesCommandesClientByCommandeClientId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllLignesCommandesClientByCommandeClientId(params: FindAllLignesCommandesClientByCommandeClientId$Params, context?: HttpContext): Observable<Array<LigneCommandeClientDto>> {
    return this.findAllLignesCommandesClientByCommandeClientId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<LigneCommandeClientDto>>): Array<LigneCommandeClientDto> => r.body)
    );
  }

  /** Path part for operation `findByCode2()` */
  static readonly FindByCode2Path = '/gestiondestock/v1/commandesclients/filter/{codeCommandeClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCode2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode2$Response(params: FindByCode2$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return findByCode2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCode2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode2(params: FindByCode2$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.findByCode2$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `findAll5()` */
  static readonly FindAll5Path = '/gestiondestock/v1/commandesclients/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll5()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll5$Response(params?: FindAll5$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommandeClientDto>>> {
    return findAll5(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll5(params?: FindAll5$Params, context?: HttpContext): Observable<Array<CommandeClientDto>> {
    return this.findAll5$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CommandeClientDto>>): Array<CommandeClientDto> => r.body)
    );
  }

  /** Path part for operation `delete5()` */
  static readonly Delete5Path = '/gestiondestock/v1/commandesclients/delete/{idCommandeClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete5()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete5$Response(params: Delete5$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete5(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete5(params: Delete5$Params, context?: HttpContext): Observable<void> {
    return this.delete5$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteArticle1()` */
  static readonly DeleteArticle1Path = '/gestiondestock/v1/commandesclients/delete/article/{idCommande}/{idLigneCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteArticle1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteArticle1$Response(params: DeleteArticle1$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return deleteArticle1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteArticle1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteArticle1(params: DeleteArticle1$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.deleteArticle1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

}
