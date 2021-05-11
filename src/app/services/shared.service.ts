import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  selectedBranch;
  branchUpdated: EventEmitter<any> = new EventEmitter<any>()
  subCategory;
  constructor() { }
  saveBranch(branch) {
    this.selectedBranch = branch;
    this.branchUpdated.emit(this.selectedBranch);
  }
  getBranch() {
    return this.selectedBranch;
  }
  saveSubCategory(category) {
    this.subCategory = category;
  }

  getSubCategory() {
    return this.subCategory;
  }
}
