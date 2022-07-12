/*
    When we use shadow dom, we cannot modify the css code 
    of any web component outside it, but we can modify
    the value of the css variables. By using css variables
    we can add the web component the ability to be more
    flexible and customizable
*/

class myComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});

    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        console.log("unlinking events linked to this element to release memory");
    }

    static get observedAttributes() {
        return ["title", "paragraph", "img"];
    }

    attributeChangedCallback(currentAttribute, oldAttributeValue, newAttributeValue) {
        if ( oldAttributeValue !== newAttributeValue ) {
            this[currentAttribute] = newAttributeValue;
        }
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
            :host  {
                --container-color: pink;
                --font-color: black;
                --h1-color: blue;

                display: block;
                width: 300px;
                background-color: var(--container-color);
                color: var(--font-color);
            }
            :host img {
                width: 100%
            }

            h1 {
                color: var(--h1-color);
            }


        </style>
        `
    }

}

customElements.define("my-component-using-template", myComponent);
