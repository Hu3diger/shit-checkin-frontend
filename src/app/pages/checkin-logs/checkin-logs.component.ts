import { Component } from "@angular/core";
import { DotMenuItem } from 'src/app/components/dot-menu/dot-menu.component';

@Component({
    selector: 'app-checkin-logs',
    templateUrl: './checkin-logs.component.html',
    styleUrls: ['./checkin-logs.component.scss']
})

export class CheckinLogsComponent {

    logs = [
        { id: 1, user: 'Alberto', checkin: '11:00' },
        {  id: 2, user: 'Astolfo', checkin: '10:45' },
        { id: 3, user: 'Francisco', checkin: '10:20' },
    ]

    dotMenu(log) {
        return [
            new DotMenuItem('Inspect', () => { this.inspect(log) }, 'bug'),
            new DotMenuItem('Edit', () => { this.edit(log) }, 'pencil'),
            new DotMenuItem('Delete', () => { this.delete(log) }, 'trash-o'),
        ]
    }

    inspect(log){
        console.log('O cagão foi o ' + log.user);
    }

    edit(log){
        console.log('Edit', log);
    }

    delete(log){
        console.log('Delete', log);
    }
}