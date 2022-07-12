/*
    slotted is a psudoelement used to modify the every
    element introduced by the slots
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
                    <slot></slot>
                </h1>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
        <style>
            ::slotted(*) {
                color: red;
            }

            ::slotted(.blue) {
                color: blue;
            }
            ::slotted(p) {
                color: yellow
            }
        </style>
        `
    }

}

customElements.define("my-component-using-template", myComponent);