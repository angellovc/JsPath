/*
    host is a psudo class that we only use for web components
    it is used to refer to the component itself, not the elements
    inside it
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
        /*
            We can apply styles to the elements inside the web component
            but sometimes we need to apply styles over the web component
            itself. By using css selector we can only select the elements
            inside the component, but not the web component itself
            that's why we need to use host

            It is also possible to select styles by attributes or by classes
        */
        return `
        <style>
            :host  {
                display: block;
                width: 300px;
                background-color: green;
            }
            :host img {
                width: 100%
            }

            :host([blue]) {
                background-color: blue;
            }

            :host(.yellow) {
                background-color: yellow;
            }

            :host([blue]) h1, :host([blue]) p {
                color: white;
            }


            h1 {
                color: blue
            }


        </style>
        `
    }

}

customElements.define("my-component-using-template", myComponent);
