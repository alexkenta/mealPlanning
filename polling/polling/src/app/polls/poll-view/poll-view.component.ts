import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PollsService } from '../../polls.service'

@Component({
  selector: 'app-poll-view',
  templateUrl: './poll-view.component.html',
  styleUrls: ['./poll-view.component.css']
})
export class PollViewComponent implements OnInit {

  thisPollId
  thisPoll

  constructor(private activatedRoute: ActivatedRoute,
              private pollsService: PollsService) {

    this.activatedRoute.paramMap.subscribe( params => {
      console.log("id in constructor", params.get('pollId'))
      this.thisPollId = params.get('pollId')
 })
   }

  ngOnInit() {
    console.log("get the id!!",this.thisPollId)
    this.pollsService.getOne(this.thisPollId)
    .subscribe(
      
      (poll) => {
        console.log("poll", poll)
        this.thisPoll = poll;
      }
    )
    
  }

  vote(data){
    console.log(data, this.thisPollId)
    this.pollsService.upVote(data, this.thisPollId)
    .subscribe(
      //dostuff here
    )
  }
}
