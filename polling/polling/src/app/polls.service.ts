import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PollsService {

  constructor(private http: HttpClient) { }

  createPoll(poll){
    return this.http.post('/create', poll)
  }

  getAll(){
    return this.http.get('/allPolls')
  }

  getOne(pollId){
    console.log("service pollId", pollId)
    return this.http.get(`/getOne/${pollId}`)
  }

  upVote(pollId, data){
    console.log("data>",pollId, data)
    return this.http.put(`/vote/${pollId}/${data}`, pollId, data)
  }

}

