/*
    HTML Attributes and HTML Properties 

    Those are differents
    
    HTML Attributes: are always initialized with a value, because
    they're used to create the elements into the Dom. These can
    change, but they're not expected to change a lot

    HTML properties: are variables inside the hmtl element that
    change along the execution process 

    Example:
                    type is an attribute, because is used to tell
                    the compiler how to interpret the element
        <script type="module">
          import { LitElement, html } from 'https://unpkg.com/lit?module';

          customElements.define("app-element", class extends LitElement {
            render() {
                this.value is a property, because is a variable that changes
                along the execution and don't tell the engine how to characterized
                this element
              this.value = 55;
              return html`
                Propiedad: ${this.value}
                Atributo: ${this.getAttribute("value")}
              `;
            }
          });
        </script>

*/

// <h1 class="nothing" value >anything</h1>

const domElement = document.querySelector('h1');

// Selecting an attribute
domElement.className = "color-active";
domElement.className = "color-deactive";

// Selecting properties 
domElement.value = 'value';