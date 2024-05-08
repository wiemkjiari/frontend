/* tslint:disable */
/* eslint-disable */
import { Category } from '../models/category';
export interface Article {
  category?: Category;
  codeArticle?: string;
  creationDate?: string;
  designation?: string;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: string;
  photo?: string;
  prixUnitaireHt?: number;
  prixUnitaireTtc?: number;
  tauxTva?: number;
}
