import {Component,Input, ViewChild, AfterContentInit, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';

@Component({
    selector: 'playground',
    template: `
    <h1>Hello world</h1>
    <div #container></div>
    `
})
export class PlaygroundComponent implements AfterContentInit {
    @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

    constructor(private resolver: ComponentFactoryResolver) {}

    ngAfterContentInit(): void {
        console.log(this.container);
        const riddleCF = this.resolver.resolveComponentFactory(RiddleComponent);
        const riddleComp = this.container.createComponent(riddleCF);
        riddleComp.instance.textInput = "asdf"
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
