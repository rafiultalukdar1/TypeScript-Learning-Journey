// Fun with oop - minidom

abstract class UIElement {
    constructor(protected id : string) {}
    abstract render() : string;
}

class Input extends UIElement {

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

class Button extends UIElement {

    constructor(
        id : string,
        private level : string,
    ) {
        super(id);
    }

    render() {
        return `<button id="${this.id}">${this.level}</button>`;
    }
}

class Form extends UIElement {

    // constructor(
    //     id : string,
    // ) {
    //     super(id);
    // }

    private children :UIElement[] = [];

    appendChild(child : UIElement) {
        this.children.push(child);
    };

    render() {

        const childrenHTML = this.children.map(child => child.render()).join("\n");

        return `<form id="${this.id}" style="border: 1px solid #ccc; padding: 20px; display: flex; flex-direction: column; max-width:300px; border-radius: 10px; gap: 8px;">\n ${childrenHTML} \n</form>`;
    };
}

const formElement = new Form("login-form");

const nameInput = new Input("name", "text", "Enter your name");
const emailInput = new Input("email", "email", "Enter your email");
const passwordInput = new Input("pass", "password", "Enter your password");
const submitButton = new Button("submit-btn", "Submit");

formElement.appendChild(nameInput);
formElement.appendChild(emailInput);
formElement.appendChild(passwordInput);
formElement.appendChild(submitButton);


// console.log(emailInput.render());
// console.log(passwordInput.render());
// console.log(submitButton.render());
// console.log(formElement.render());


console.log(formElement.render());

const rootElement = document.getElementById("root");

if (rootElement) {
    rootElement.innerHTML = formElement.render();
}