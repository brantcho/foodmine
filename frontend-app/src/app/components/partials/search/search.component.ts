import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
    SearchTerm: string = '';
    constructor(activatedRoute:ActivatedRoute, private router:Router) {
      activatedRoute.params.subscribe((params) => {
        if(params.searchTerm){
          this.SearchTerm = params.searchTerm;
        }
        });

      
    } 
  
    ngOnInit(): void {
    }
    search(term:string):void{
     if(term){
      this.router.navigateByUrl('/search/'+term);
    }
  }

}

