/* tslint:disable */
/* eslint-disable */
import { Adress } from '../models/adress';
import { CommandeFournisseur } from '../models/commande-fournisseur';
export interface Fournisseur {
  adresse?: Adress;
  commandeFournisseurs?: Array<CommandeFournisseur>;
  creationDate?: string;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: string;
  mail?: string;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
}
