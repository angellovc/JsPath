/*
    EventListener

    This is an API that can be used to convert the
    Dom static elements into interactive ones
*/

// First it's necesary to select the Dom element
const input = document.querySelector('#name');

// addEventListener is used to add functionalities to the Dom element
// First argument: Specify under which condition the functionalitie will be executed
// Second argument: the functionality
input.addEventListener('click', () => {
    // in this case, when someone clicks over this item, this function is executed
    console.log("this element was clicked");
})

//its possible to add more than one function
const sayHiOnClick = () => console.log('Hello im being clicked');

// In this case when the ite m is clicked both function will be executed
input.addEventListener('click', sayHiOnClick);

// Removing listener
// First argument: the type of listener
// Second argument: function to be removed
input.removeEventListener('click', sayHiOnClick);

// There are another kind of listener
// In this case, every time a letter is typed, the function will be executed
input.addEventListener('input', (event) => {
    /*
        Every eventListener always pass as argument to the function an object called: EVENT

        This object contains all the information of the event:
            The data: the keys typed in through the keyboard
            The target: from where this function belongs or which is the resposible item for this execution
    */
    console.log(event.data);
    console.log(event.target);
})

/*
    Event Propagation

    When you activate an event, the same event will be propagated among the
    parent elements. If you click button, main and body will be clicked too

    Having:
    <body>
        <main>
            <button></button>
        </main>
    </body>
*/


const button = document.querySelector('button');
const main = document.querySelector('main');
const body = document.querySelector('body');

button.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log("Button Clicked");
});

main.addEventListener('click', (event) => {
    console.log("main Clicked");
});

body.addEventListener('click', (event) => {
    console.log("body Clicked");
});
// If you click main, the click listeners of main and body
// will be executed, because the click was propagated from
// main its parents, which is body in this case
main.click();

// To avoid this, you can execute the function stopPropagation
// inside the event passed as argument. This way the item won't
// propagate the event to the parent
// in this case, just the button listener is executed
button.click();

/*
    Event Delegation

    This is when you through the parent element
    execute a event happend in one of its children

    <body>
        <main>
            <button></button>
        </main>
    </body>

*/

body.addEventListener('click', (event) => {
    // In this case every time a click happens in the body page
    // the listener will ask if the was detonated from the Button
    // or from any other element
    // If the ignite element is button, this funcion will be executed
    if (event.target.nodeName === "Button") {
        console.log('The button was click');
    }
    // This is extremely useful, because this time you avoid to add
    // an eventListener to every element you want become interacte
    // In this places you only have one eventListener in charge of 
    // managing all the events in the interactivity in the page
})