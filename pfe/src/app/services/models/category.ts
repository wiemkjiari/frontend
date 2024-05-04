/* tslint:disable */
/* eslint-disable */
import { Article } from '../models/article';
export interface Category {
  articles?: Array<Article>;
  code?: string;
  creationDate?: string;
  designation?: string;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: string;
}
