import {Component, OnInit} from '@angular/core';
import {Staff} from "../shared/model/staff.model";
import {StaffService} from "../shared/service/staff.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})



export class TeamComponent implements OnInit{

  staffs: Staff[] = [];
  constructor(public staffService:StaffService) {
  }

  ngOnInit(): void {
    this.staffService.getAll()
      .subscribe(staffResponse => this.staffs = staffResponse);
  }


}
