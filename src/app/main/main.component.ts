import { Component } from '@angular/core';
import { DocumentationStoreService } from './stores/documentation-store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  
  constructor(protected documentationStore: DocumentationStoreService) {
  }
  

}
