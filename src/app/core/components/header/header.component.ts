import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  locations =[]
  selectedLocation = 'Select Location';
  selectedBranch;
  constructor(
    private appService: AppService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations() {
    this.appService.getJSON().subscribe((res:any)=>{
      console.log('res', res);
      if (res) {
        this.locations = res.data.locations
      }
    },(err:any)=>{

    })
  }

  categorySelected(locationIndex, branchIndex) {
    this.selectedLocation = this.locations[locationIndex].name;
    this.selectedBranch = this.locations[locationIndex].branches[branchIndex];
    this.sharedService.saveBranch(this.selectedBranch);
  }

}
