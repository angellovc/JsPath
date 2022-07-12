/*
    To change the attributes value dinamically and render the web component dinamically

    it is necessary to add an observer watching the changes inside the attributes
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

    // The method name Must be written equally
    // Setting up the observer for the attributes
    static get observedAttributes() {
        return ["title", "paragraph", "img"];
    }

    // The method name Must be written equally
    // Every time the observer get a change in the attributes
    // it will invoke this function and will pass 
    // the selected attribute
    // the old value of the attribute and
    // the new attribute value
    attributeChangedCallback(currentAttribute, oldAttributeValue, newAttributeValue) {
        if (oldAttributeValue !== newAttributeValue && currentAttribute === "title")
            this.title = newAttributeValue;
        if (oldAttributeValue !== newAttributeValue && currentAttribute === "paragraph")
            this.paragraph = newAttributeValue;
        if (oldAttributeValue !== newAttributeValue && currentAttribute === "img")
            this.img = newAttributeValue;
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