/*
    Web components usually uses styles that could affect other
    HTML elements. That's why we use shadow dom which creates
    a kind of new dom inside the actual dom to protect the
    elements inside the dom parent from the elements inside the 
    web component
*/

class myComponent extends HTMLElement {
    constructor() {
        super();
        /*
            shadow dom is used in the web component this way

            It received an object as a parameter. Mode open means
            that it's possible to watch an interact with the elements
            inside the web component. Mode close means that won't be 
            possible to access the elements inside the web component
        */
        this.attachShadow({mode: "open"})
    }

    // In this case, the render method changes, because now, with the shadow dom added,
    // the only way to access to add something inside this web component is through the
    // shadow dom
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
                <h1>This is a Web Component</h1>
                <div>
                    <p>by using a template</p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
        <style>
            div {
                background-color: black
            }
            p {
                color: white
            }
            h1 {
                color: blue
            }
        </style>
        `
    }

}

customElements.define("my-component-using-template", myComponent);