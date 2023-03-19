import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  

  name?:string|null = "";

  constructor (private router:ActivatedRoute){}

  ngOnInit(): void{
    this.name  = this.router.snapshot.paramMap.get("name");
  }

  
}


