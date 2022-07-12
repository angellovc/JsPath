/*
    It is possible to use multiple content slots

    It's necessary to use the attribute name, inside the slot,
    to create differenciations
*/

class myComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"})
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
                    <slot name="title"></slot>
                </h1>
                <slot name="paragraph"></slot>
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