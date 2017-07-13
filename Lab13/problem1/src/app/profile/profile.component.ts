import {Component, OnInit} from '@angular/core';
import {DbService} from "app/db.service";
import {ActivatedRoute} from "@angular/router";
import {ProfileGuard} from "app/profile.guard";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private student: object;

  constructor(private route: ActivatedRoute, db: DbService) {
    route.params.subscribe(params => {
      this.student = db.getDataFromId(params['id']);
    });
  }

  ngOnInit() {
  }

}
