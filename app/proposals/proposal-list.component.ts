import { Component } from '@angular/core'
import { Proposal }  from './proposal'

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(
    15, "A Company", "https://portfolio.me.com", "Ruby on Rails", 
    50, 120, 15, "dog@dogs.com"
  )
  proposalDuex: Proposal = new Proposal(
    16, "B Company", "https://portfolio.me.com", "Ruby on Rails", 
    60, 80, 10, "dog@dogs.com"
  )
  proposalDrei: Proposal = new Proposal(
    17, "C Company", "https://portfolio.me.com", "Ruby on Rails", 
    55, 130, 25, "dog@dogs.com"
  )

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalDuex,
    this.proposalDrei
  ]
}