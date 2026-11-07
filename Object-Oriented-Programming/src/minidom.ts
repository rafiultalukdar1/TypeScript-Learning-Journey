// Fun with oop - minidom

abstract class UIComponent {
    constructor(protected id : string) {}
    abstract render() : string;
}

class Input extends UIComponent {

    constructor(
        id : string,
        private type : string,
        private name : string,
        private placeholder : string,
    ) {
        super(id);
    }

    render() {
        return `<input id="${this.id}" type="${this.type}" name="${this.name}" placeholder="${this.placeholder}" />`;
    }
}