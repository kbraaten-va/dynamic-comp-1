import {Component, OnInit} from '@angular/core';

import {DataService} from './data.service';

@Component({
    selector: 'playground',
    template: `
    {{data | json}}
    `
})
export class PlaygroundComponent implements OnInit {

    data: any[];

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.dataService.getData().subscribe(data => this.data = data);
    }
}
