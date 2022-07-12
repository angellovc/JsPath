/*
    It is possible to use attributes instead of using slots
*/

class myComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});


        this.title = this.getAttribute('title');
        this.paragraph = this.getAttribute('paragraph');
        this.img = this.getAttribute('img');
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <section>
                <h1>
                    ${this.title}
                </h1>
                <p>
                    ${this.paragraph}
                </p>
                <img src="${this.img}"/>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
        <style>
            h1 {
                color: blue
            }
        </style>
        `
    }

}

customElements.define("my-component-using-template", myComponent);