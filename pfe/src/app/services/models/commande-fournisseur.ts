/* tslint:disable */
/* eslint-disable */
import { Fournisseur } from '../models/fournisseur';
import { LigneCommandeFournisseur } from '../models/ligne-commande-fournisseur';
export interface CommandeFournisseur {
  code?: string;
  creationDate?: string;
  dateCommande?: string;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  fournisseur?: Fournisseur;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: string;
  ligneCommandeFournisseurs?: Array<LigneCommandeFournisseur>;
}
