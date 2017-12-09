import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-hello-environment',
  templateUrl: './hello-environment.component.html',
  styleUrls: ['./hello-environment.component.css']
})
export class HelloEnvironmentComponent implements OnInit {
  public messageFromEnvironment: string;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.fetchApiHostUrl().subscribe((resp: any) => {
    this.messageFromEnvironment = resp.message;
    });
  }

}
