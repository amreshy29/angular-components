import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  serverCreationStatus = 'no server created'
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer () {
    return this.serverCreationStatus = "server created"
  }

  onUpdateServerName(e) {
    this.serverName = e.target.value;
  }

}