import { Component } from '@angular/core';
import { Proposal } from './proposal';
import { ProposalService} from './proposal.service';
import { Observable } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'propsal-new',
  templateUrl: 'proposal-new.component.html',
  styleUrls: ['proposal-new.component.css'],
  providers: [ProposalService]
})

export class ProposalNewComponent {
  proposal: Proposal = new Proposal;
  submitted: boolean = false;

  constructor(
    private proposalService: ProposalService
  ){}

  createProposal(proposal){
    this.submitted = true;
    this.proposalService.createProposal(proposal)
        .subscribe(data => {return true;}, 
                   error => { console.log("error saving");
                              return Observable.throw(error);
                            });
  }

}

