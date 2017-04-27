import {
    Component,
    Input,
    ViewChild,
    AfterContentInit,
    ViewContainerRef
} from '@angular/core';

@Component({
    selector: 'playground',
    template: `
    <h1>Hello world</h1>
    <div #container></div>
    `
})
export class PlaygroundComponent implements AfterContentInit {
    @ViewChild('container') container: ViewContainerRef;

    ngAfterContentInit(): void {
        console.log(this.container);
    }
}

@Component({
    template: `
    🎲🇻🇳🤢
    {{textInput}}
    `
})
export class RiddleComponent {
    @Input() textInput: string
}
