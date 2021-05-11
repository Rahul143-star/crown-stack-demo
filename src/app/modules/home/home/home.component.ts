import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedBranch;
  constructor(
    private sharedService: SharedService,
    private router: Router
  ) { 
  }

  ngOnInit(): void {
    this.sharedService.branchUpdated.subscribe((val) =>{
      console.log('value changed', val); 
      this.selectedBranch = val;
    });
    console.log('selected value', this.selectedBranch)
    if (!this.selectedBranch) {
      this.selectedBranch = this.sharedService.getBranch()
    }
  }

  

  selectCategory(index){
    console.log('index', index);
    console.log('selected branch', this.selectedBranch.categories[index]);
    this.sharedService.saveSubCategory(this.selectedBranch.categories[index]);
    this.router.navigate(['sub-categories'])
  }

}
