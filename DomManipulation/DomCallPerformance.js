/*
    Call the DOM to do operations over the Dom
    elements is expensive so its better find
    ways to call it as less as possible
*/


// expensive
// in this case the 100 new elements will be added to the DOM
// but the operation will be too expensive, because is
// performing one call for each new addition
for (i=0; i < 100; i++) {
    document.body.append(document.createElement('h1'));
}


// cheap
// in this case the operation is cheaper, because
// the addition operation will be performed before to call the
// Dom and it will be called just once 
var node = []
for (i=0; i < 100; i++) {
  const node = document.createElement('h1');
    node.push(node);
}
document.body.append(...node);