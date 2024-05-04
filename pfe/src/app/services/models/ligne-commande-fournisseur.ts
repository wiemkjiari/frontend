/* tslint:disable */
/* eslint-disable */
import { Article } from '../models/article';
import { CommandeFournisseur } from '../models/commande-fournisseur';
export interface LigneCommandeFournisseur {
  article?: Article;
  commandeFournisseur?: CommandeFournisseur;
  creationDate?: string;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: string;
  prixUnitaire?: number;
  quantite?: number;
}
