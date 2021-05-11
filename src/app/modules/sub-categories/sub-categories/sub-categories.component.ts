import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit {
  selectedCategory;
  selectedBranch;
  constructor(
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.selectedCategory = this.sharedService.getSubCategory();
    this.selectedBranch = this.sharedService.getBranch();
    if (!this.selectedCategory) {
      this.navigate();
    }
    this.sharedService.branchUpdated.subscribe((val) =>{
      this.navigate();
    });
  }

  navigate() {
    this.router.navigate(['home'])
  }

}
