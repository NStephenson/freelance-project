import { Component } from '@angular/core'
import { Document } from './document'

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "This is a document",
      file_url: "https://google.com",
      updated_at: "11/11/16",
      image_url: "htttps://google.com"
    },
    {
      title: "My Second Doc",
      description: "This is a document too",
      file_url: "https://google.com",
      updated_at: "11/12/16",
      image_url: "htttps://google.com"
    },
    {
      title: "My Third Doc",
      description: "This is a document trice",
      file_url: "https://google.com",
      updated_at: "11/4/16",
      image_url: "htttps://google.com"
    }
  ]
} 