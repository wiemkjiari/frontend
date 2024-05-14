/* tslint:disable */
/* eslint-disable */
import { ArticleDto } from '../models/article-dto';
import { CommandeFournisseur } from '../models/commande-fournisseur';
export interface LigneCommandeFournisseurDto {
  article?: ArticleDto;
  commandeFournisseur?: CommandeFournisseur;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
}
