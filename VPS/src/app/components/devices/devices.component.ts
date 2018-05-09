import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})

export class DevicesComponent implements OnInit {

  deviceData: any;

  constructor(private dataService: DataService) {
    this.fetchData();
  }

  ngOnInit() {
  }

  fetchData() {
    this.dataService.fetchDevices().subscribe(devices => {
      this.deviceData = devices;
      console.log(devices);
    }, error => {
      console.log(error);
    });
  }


}
