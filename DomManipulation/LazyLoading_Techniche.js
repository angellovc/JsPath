/*
    LazyLoading OldStyle implementation

    Its a techniche for images, where the images only
    load in the browser when they're visible to the 
    user
*/

// its necessary to get where the images will be attached
const images = [
    "https://randomfox.ca/images/0.jpg",
    "https://randomfox.ca/images/1.jpg",
    "https://randomfox.ca/images/2.jpg",
    "https://randomfox.ca/images/3.jpg",
    "https://randomfox.ca/images/4.jpg",
    "https://randomfox.ca/images/5.jpg"
]

const dashboard = document.querySelector('#images-dashboard'); 

// This will be used to get just the observed objects
const observer = new IntersectionObserver((observedObjects) => { /* This function will be executed over the observed objects */
    observedObjects
        // 
        .filter(object => object.isIntersecting /*It will return a true or false when the object is or not observed */)
        .forEach(visibleObject => {
            // visibleObject.node gets the container in which the image is located
            // once we are located into the container visibleObject.node 
            // we can use a query selector to select the img or we can access to the childs
            // of the node element
            const img = visibleObject?.node?.firstChild;
            // In this case we are adding the source img that comes from dataset.src into the img.src
            // once the Dom detecs the source image into the src attribute, the image will be requested
            img.src = img.dataset.src
            // We just want to observe these objects until the fit into the screen
            // Once that happen, we perform the image loading and 
            // remove the observer so that the loading won't happen when the element
            // goes away from the screen and enters again after an scroll action
            // This loading action is expected to be executed just once
            observer.unobserve(visibleObject);
        });
});

// Create the iamges that later will be attached to the Dom
const createImage = (imgSource) => {
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    // when the source image is put into the src, the Dom automatically loads the image
    // in this case, we are storing the image url into a dataset to later be put into the src of the img
    // datasets are usually used to comunicate information from HTML to JS 
    image.dataset.src = imgSource;
    image.width = "400";
    imageContainer.append(image);
    // Here the observer will be observing the imageContainer
    // when the image goes into the user vision
    // the function in chargon putting the infromation inside dataser.src
    // to the src attribute of the img tag will be activated and the image
    // will be loaded
    observer.observe(imageContainer);
    return imageContainer
}


// Creating the images and attaching them to the Dom
images.forEach(imageSource => {
    dashboard.append(createImage(imageSource));
});

