import { Component } from '@angular/core'
import { Proposal } from './proposal'

@Component({
  moduleId: module.id,
  selector: 'propsal-new',
  templateUrl: 'proposal-new.component.html'
})

export class ProposalNewComponent {
  proposal: Proposal = new Proposal
}