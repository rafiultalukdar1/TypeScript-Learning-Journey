// Fun with oop - minidom

abstract class UIComponent {
    constructor(protected id : string) {}
    abstract render() : string;
}

class Input extends UIComponent {

    constructor(
        id : string,
        private type : string,
        private placeholder : string,
    ) {
        super(id);
    }

    render() {
        return `<input id="${this.id}" type="${this.type}" name="${this.id}" placeholder="${this.placeholder}" />`;
    }

}


const emailInput = new Input("email", "email", "enter your email");
const passwordInput = new Input("pass", "password", "enter your password");

console.log(emailInput.render());
console.log(passwordInput.render());