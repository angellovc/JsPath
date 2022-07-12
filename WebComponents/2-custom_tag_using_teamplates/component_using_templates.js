/*
    Since its not a good practice to have a variable outside the class
    templates are a good choice to avoid this
*/

class myComponent extends HTMLElement {
    constructor() {
        super();
    }

    // it uses the information inside the template and attach it inside the Tag 
    // or the component corresponding to this class
    render() {
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }

    // connectedCallback is executed once the component is created
    // at the begining of the drawing process
    // that's why render function is called here
    connectedCallback() {
        this.render();
    }

    // Here we create a template, which is a tag 
    // that only stores information, but whose content is not supposed to be shown
    // it's necessary to use JS to interact with its content
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

    // A function for the styles, this way, the HTML structure and 
    // the styles remain separated
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