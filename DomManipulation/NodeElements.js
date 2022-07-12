/*
    Node Elements

    The list of elements retrieved by using the DOM selectors document.getElementsBy or document.querySelectorAll
    are called Node element list and is different from an array, because
    they don't share the same methods, so it's always recomended to
    tranform the NodeList to a simple Array
    
    V8 engine is optimized to work with arrays, so its always better
    off to transform the nodeList into arrays
*/

/* NodeList to array transformation */

// Get the nodeList
const nodeList = document.querySelectorAll('.className');

// transform it
const arr = [...nodeList];


/* 
    Create and Add nodes 
    
    There are two kind of things that can be created to be later
    added to the node: Elements and Texts
*/

/* 
    Creation 

    When an element is created it doesn't mean that the element
    was attached to the dom, it means that the element exits
    only in memory, must be added later
*/

// Create Element
const h1Element = document.createElement("h1");
// Create text - in this case, no matter if we pass an html tag
// as argument it will be used as a text
const text = document.createTextNode("h1");

/*
    Insertion

    The insertion is the process of adding a new node to the Dom
*/
// first it's necessary to select the Dom element to which the
// the new element will be attached
const  domElement = document.querySelector('#any-id-element');
// This method will add the element at the end of its nodeList or children
domElement.appendChild(h1Element);

// This behaves similar to the last element, but is able to receive
// strings and various arguments at the same time
// it will alocate the elements in the order they were passed through
// ! Internet explorer is not able to support this feature !
domElement.append(h1Element, text, 'also a simple string');


// This will put a node before an child of the element
// The child must be selected previously
// the first arugment is the node to add and the second 
// is the referente. The child the we'll use as a reference
// must be a direct child from the base element
const domElementChild = domElement.querySelector('h1');
// Base Element   Method          New Node                Reference
domElement.insertBefore(document.createElement('h3'), domElementChild);

// it will insert the element before the first element
domElement.insertAdjacentElement('beforebegin', h1Element);

// it will insert the element after the first element
domElement.insertAdjacentElement('afterbegin', h1Element);

// it will insert the element before the last element
domElement.insertAdjacentElement('beforeend', h1Element);

// it will insert the element after the last element
domElement.insertAdjacentElement('afterend', h1Element);

/*
    Node deletion
*/

const h1Child = domElement.querySelector('h1');
// to use this, it's necessary to select the parent and
// its to be deleted child 
// and pass the child as an argument
domElement.removeChild(h1Child);

// this method will deleted the element without selecting
// the parent. 
// ! Important ! it's not compatible with Internet Explorer
h1Child.remove();

// it's also possible to replace one element to other
// the first arugment is the new child and the other 
// is the elmeent to be replaced
// the parent and the child must be selected previously
const h2Child = domElement.querySelector('h2');
domElement.replaceChild(document.createElement('h1'), h1Child);