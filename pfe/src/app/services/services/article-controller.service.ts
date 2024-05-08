/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ArticleDto } from '../models/article-dto';
import { delete8 } from '../fn/article-controller/delete-8';
import { Delete8$Params } from '../fn/article-controller/delete-8';
import { findAll8 } from '../fn/article-controller/find-all-8';
import { FindAll8$Params } from '../fn/article-controller/find-all-8';
import { findAllArticleByIdCategory } from '../fn/article-controller/find-all-article-by-id-category';
import { FindAllArticleByIdCategory$Params } from '../fn/article-controller/find-all-article-by-id-category';
import { findByCodeArticle } from '../fn/article-controller/find-by-code-article';
import { FindByCodeArticle$Params } from '../fn/article-controller/find-by-code-article';
import { findById8 } from '../fn/article-controller/find-by-id-8';
import { FindById8$Params } from '../fn/article-controller/find-by-id-8';
import { findHistoriaueCommandeClient } from '../fn/article-controller/find-historiaue-commande-client';
import { FindHistoriaueCommandeClient$Params } from '../fn/article-controller/find-historiaue-commande-client';
import { findHistoriqueCommandeFournisseur } from '../fn/article-controller/find-historique-commande-fournisseur';
import { FindHistoriqueCommandeFournisseur$Params } from '../fn/article-controller/find-historique-commande-fournisseur';
import { findHistoriqueVentes } from '../fn/article-controller/find-historique-ventes';
import { FindHistoriqueVentes$Params } from '../fn/article-controller/find-historique-ventes';
import { LigneCommandeClientDto } from '../models/ligne-commande-client-dto';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';
import { LigneVenteDto } from '../models/ligne-vente-dto';
import { save8 } from '../fn/article-controller/save-8';
import { Save8$Params } from '../fn/article-controller/save-8';

@Injectable({ providedIn: 'root' })
export class ArticleControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save8()` */
  static readonly Save8Path = '/gestiondestock/v1/articles/create';

  /**
   * Enregistrer un article.
   *
   * Cette méthode permet d'enregistrer ou modifier un article
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save8()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save8$Response(params: Save8$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
    return save8(this.http, this.rootUrl, params, context);
  }

  /**
   * Enregistrer un article.
   *
   * Cette méthode permet d'enregistrer ou modifier un article
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save8$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save8(params: Save8$Params, context?: HttpContext): Observable<ArticleDto> {
    return this.save8$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArticleDto>): ArticleDto => r.body)
    );
  }

  /** Path part for operation `findById8()` */
  static readonly FindById8Path = '/gestiondestock/v1/articles/{idArticle}';

  /**
   * Rechercher un article par ID.
   *
   * Cette méthode permet de chercher un article par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById8()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById8$Response(params: FindById8$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
    return findById8(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher un article par ID.
   *
   * Cette méthode permet de chercher un article par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById8(params: FindById8$Params, context?: HttpContext): Observable<ArticleDto> {
    return this.findById8$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArticleDto>): ArticleDto => r.body)
    );
  }

  /** Path part for operation `findHistoriqueVentes()` */
  static readonly FindHistoriqueVentesPath = '/gestiondestock/v1/articles/historique/vente/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findHistoriqueVentes()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistoriqueVentes$Response(params: FindHistoriqueVentes$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneVenteDto>>> {
    return findHistoriqueVentes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findHistoriqueVentes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistoriqueVentes(params: FindHistoriqueVentes$Params, context?: HttpContext): Observable<Array<LigneVenteDto>> {
    return this.findHistoriqueVentes$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<LigneVenteDto>>): Array<LigneVenteDto> => r.body)
    );
  }

  /** Path part for operation `findHistoriqueCommandeFournisseur()` */
  static readonly FindHistoriqueCommandeFournisseurPath = '/gestiondestock/v1/articles/historique/commandefournisseur/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findHistoriqueCommandeFournisseur()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistoriqueCommandeFournisseur$Response(params: FindHistoriqueCommandeFournisseur$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    return findHistoriqueCommandeFournisseur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findHistoriqueCommandeFournisseur$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistoriqueCommandeFournisseur(params: FindHistoriqueCommandeFournisseur$Params, context?: HttpContext): Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findHistoriqueCommandeFournisseur$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<LigneCommandeFournisseurDto>>): Array<LigneCommandeFournisseurDto> => r.body)
    );
  }

  /** Path part for operation `findHistoriaueCommandeClient()` */
  static readonly FindHistoriaueCommandeClientPath = '/gestiondestock/v1/articles/historique/commandeclient/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findHistoriaueCommandeClient()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistoriaueCommandeClient$Response(params: FindHistoriaueCommandeClient$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    return findHistoriaueCommandeClient(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findHistoriaueCommandeClient$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findHistoriaueCommandeClient(params: FindHistoriaueCommandeClient$Params, context?: HttpContext): Observable<Array<LigneCommandeClientDto>> {
    return this.findHistoriaueCommandeClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<LigneCommandeClientDto>>): Array<LigneCommandeClientDto> => r.body)
    );
  }

  /** Path part for operation `findByCodeArticle()` */
  static readonly FindByCodeArticlePath = '/gestiondestock/v1/articles/filter/{codeArticle}';

  /**
   * Rechercher un article par CODE.
   *
   * Cette méthode permet de chercher un article par son CODE
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCodeArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCodeArticle$Response(params: FindByCodeArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
    return findByCodeArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher un article par CODE.
   *
   * Cette méthode permet de chercher un article par son CODE
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCodeArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCodeArticle(params: FindByCodeArticle$Params, context?: HttpContext): Observable<ArticleDto> {
    return this.findByCodeArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArticleDto>): ArticleDto => r.body)
    );
  }

  /** Path part for operation `findAllArticleByIdCategory()` */
  static readonly FindAllArticleByIdCategoryPath = '/gestiondestock/v1/articles/filter/category/{idCategory}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllArticleByIdCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllArticleByIdCategory$Response(params: FindAllArticleByIdCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ArticleDto>>> {
    return findAllArticleByIdCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllArticleByIdCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllArticleByIdCategory(params: FindAllArticleByIdCategory$Params, context?: HttpContext): Observable<Array<ArticleDto>> {
    return this.findAllArticleByIdCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ArticleDto>>): Array<ArticleDto> => r.body)
    );
  }

  /** Path part for operation `findAll8()` */
  static readonly FindAll8Path = '/gestiondestock/v1/articles/all';

  /**
   * Renvoi la liste des articles.
   *
   * Cette méthode permet de chercher et renvoyer la liste des articles qui existent dans la BDD
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll8()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll8$Response(params?: FindAll8$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ArticleDto>>> {
    return findAll8(this.http, this.rootUrl, params, context);
  }

  /**
   * Renvoi la liste des articles.
   *
   * Cette méthode permet de chercher et renvoyer la liste des articles qui existent dans la BDD
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll8(params?: FindAll8$Params, context?: HttpContext): Observable<Array<ArticleDto>> {
    return this.findAll8$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ArticleDto>>): Array<ArticleDto> => r.body)
    );
  }

  /** Path part for operation `delete8()` */
  static readonly Delete8Path = '/gestiondestock/v1/articles/delete/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete8()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete8$Response(params: Delete8$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete8(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete8(params: Delete8$Params, context?: HttpContext): Observable<void> {
    return this.delete8$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
