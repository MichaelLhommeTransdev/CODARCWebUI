import { Component } from '@angular/core';
import { DocumentationStore } from './stores/documentation-store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  
  constructor(protected documentationStore: DocumentationStore) {
  }
  

}
