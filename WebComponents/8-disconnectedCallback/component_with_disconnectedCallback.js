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
            h1 {
                color: blue
            }
        </style>
        `
    }

}

customElements.define("my-component-using-template", myComponent);
