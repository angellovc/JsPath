/*
    Inner and Outter operations

    There are two kind of operations that can be done
    over a Dom Element

    Outter will be used to retrieve the HTML representation
    of an object

    Inner will be used to retrieve the enclosed values of the
    html tags

                        ¡ IMPORTANT !
    This operations must be used only for texts that cannot be
    entered in by the user, because this way, the user can attach
    executable code our project making vulnerating our project

    This must be used only when the machine is in charge of
    inserting the new html code
*/

const domElement = document.querySelector('#element-id');


// It will return a string representation of the HTML dom elemten
// Return Example: "<div id="element-id">This is the element</div>"
const outterDomElement= domElement.outerHTML;

// It will return a string representation of the HTML dom elemten
// Return Example: "This is the element"
const innerDomElement = domElement.innerHTML;


// it is possible to change the values 
// this way, all the HTML will be changed for this one
// include the tag enclosed value
domElement.outerHTML = "<div>another div</div>";

// in this case just the HTML value will be changed
domElement.innerHTML = "This is other element";