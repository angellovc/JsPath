// The logic of the custom HTML tags is managed by a class
// who extends from HTMLElement
// it last class gives any class the necessary functionalities
// to serve as the logic of a web component

/* 
    It's also possible to add inner elements by using templates
    instead of creating them into the constructor
*/
const template = document.createElement("div");
template.innerHTML = `

    <style>
        p.template {
            color: blue;
            font-size: 30px
        }
        b {
            color: red
        }
    </style>

    <p class="template">This is a web component inner element  by using templates</p><br/>
    <b>Anything</b>

`;

class myComponent extends HTMLElement {
    constructor() {
        super();

        // The constructor should create every element that will be 
        // contained into the web component
        this.paragraph = document.createElement("p");
    }

    // This function is in charge of loading the HTML elements inside the component
    connectedCallback() {
        // doing operations over the web component inner elements  
        this.paragraph.textContent = "Hello worlds!!!";
        // attaching the elements to the web component
        this.appendChild(this.paragraph);
        this.appendChild(template);
    }
}

/*
    customElements

    This statement is used to create a new custom HTML tag
    @first_argument: name of the tag. The name of the tag, by convention,
    should have two or more words linked by using a dash
    @Second_argument: the class that will contain all the logic of the
    new HTML tag
*/
customElements.define("my-component", myComponent);
