import { Component, OnInit } from '@angular/core';
import { AguaServiceService } from '../agua-service.service';

@Component({
  selector: 'app-admin.agua',
  templateUrl: './admin.agua.component.html',
  styleUrls: ['./admin.agua.component.css']
})
export class AdminAguaComponent implements OnInit {

  constructor(private service: AguaServiceService) { }

  ngOnInit() {
    this.agua = this.service.getAll();
  }

}
