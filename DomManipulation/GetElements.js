/*
    There are three basic ways to get elements from the HTML
    and manipulated them
*/

/*
    Primitive selectors

    Return: Node Elements

    Those were the first selectors created to manipulated HTML
    They're good know, but it's not recommendede to use them,
    because now are better ways to interact with HTML
*/

// It will return just one element, because id should be always unique 
document.getElementById(/* Element ID */)

// it will return every element with the classes passed as argument
document.getElementsByClassName()

// it will return every element with the classes passed as argument
document.getElementsByTagName()

/*
    Modern Selectors

    Return: Node Elements

    Those are better to use because give the programmer
    more flexibility since they're being slelected by
    css selectors instead of one specific attribute 
*/
document.querySelector(/* CSS selectors */)
document.querySelectorAll(/* CSS selectors */)

