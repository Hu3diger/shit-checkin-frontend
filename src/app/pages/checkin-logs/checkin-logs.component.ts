import { Component, OnInit } from "@angular/core";
import { DotMenuItem } from 'src/app/components/dot-menu/dot-menu.component';
import { LogService } from 'src/app/services/log.service';

@Component({
    selector: 'app-checkin-logs',
    templateUrl: './checkin-logs.component.html',
    styleUrls: ['./checkin-logs.component.scss']
})

export class CheckinLogsComponent implements OnInit {

    logs = [];

    constructor(
        readonly logService: LogService
    ) { }

    ngOnInit() {
        this.logService.findAll().then((response: any) => {
            this.logs = response;
        })
    }

    dotMenu(log) {
        return [
            new DotMenuItem('Inspect', () => { this.inspect(log) }, 'bug'),
            new DotMenuItem('Edit', () => { this.edit(log) }, 'pencil'),
            new DotMenuItem('Delete', () => { this.delete(log) }, 'trash-o'),
        ]
    }

    inspect(log) {
        console.log('O cagão foi o ' + log.user);
    }

    edit(log) {
        console.log('Edit', log);
    }

    delete(log) {
        console.log('Delete', log);
    }
}