import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Documentation, DocumentationTheme } from '../models/documentation';

@Injectable({
  providedIn: 'root'
})
export class DocumentationStore {
  
  private _themes: BehaviorSubject<DocumentationTheme[]> = new BehaviorSubject([] as DocumentationTheme[]);
  public readonly themes: Observable<DocumentationTheme[]> = this._themes.asObservable();

  private _documentations: BehaviorSubject<Documentation[]> = new BehaviorSubject([] as Documentation[]);
  public readonly documentations: Observable<Documentation[]> = this._documentations.asObservable();


  constructor() {
    this._themes.next([
      { id: '1', name: 'Theme 1', shortName: 'T1', itemsCount: 4 },
      { id: '2', name: 'Theme 2', shortName: 'T2', itemsCount: 2 },
      { id: '3', name: 'Theme 3', shortName: 'T3', itemsCount: 0 },
    ])
    
    this._documentations.next([
      { id: 1, theme: '1', name: 'Documentation 1', shortName: 'Doc1', adminRequired: false, archived: false, creationDate: new Date(), version: '1.0' },
      { id: 2, theme: '1', name: 'Documentation 2', shortName: 'Doc2', adminRequired: false, archived: false, creationDate: new Date(), version: '1.0' },
      { id: 3, theme: '1', name: 'Documentation 3', shortName: 'Doc3', adminRequired: false, archived: false, creationDate: new Date(), version: '1.0' },
      { id: 4, theme: '1', name: 'Documentation 4', shortName: 'Doc4', adminRequired: false, archived: false, creationDate: new Date(), version: '1.0' },

      { id: 5, theme: '2', name: 'Documentation 5', shortName: 'Doc5', adminRequired: false, archived: false, creationDate: new Date(), version: '1.0' },
      { id: 6, theme: '2', name: 'Documentation 6', shortName: 'Doc6', adminRequired: false, archived: false, creationDate: new Date(), version: '1.0' },
    ])
  }


}
