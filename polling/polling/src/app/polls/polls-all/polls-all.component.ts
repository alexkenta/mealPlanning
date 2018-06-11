import { Component, OnInit } from '@angular/core';
import { PollsService } from '../../polls.service';

@Component({
  selector: 'app-polls-all',
  templateUrl: './polls-all.component.html',
  styleUrls: ['./polls-all.component.css']
})
export class PollsAllComponent implements OnInit {
  allPolls
  constructor(private pollsService: PollsService) { }

  ngOnInit() {
    this.pollsService.getAll()
    .subscribe(
      (result) => {
        this.allPolls = result;
      }
    )
  }

  searchPolls(){
    console.log("keypress up")
  }

}
