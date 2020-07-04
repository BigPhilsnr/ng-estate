import { Component } from '@angular/core';

import './ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ngx-ckeditor',
  template: `
    <nb-card>
      <nb-card-header>
        Description
      </nb-card-header>
      <nb-card-body>
        <ckeditor [config]="{ extraPlugins: 'divarea', height: '320' }"></ckeditor>
      </nb-card-body>
    </nb-card>
  `,
})
export class CKEditorComponent {
}
