import './App.css';


function PropsAttributesAndChildren(props) {
  return (
    <div>
    {/*
        Attributes

        Attributes in React are the same as the attributes in HTML
    */}
        <div id="this is an attribute" className='another attribute'>
    {/*
        properties

        Properties refers to the data we pass ar aguments to the React Components
        because in the same way we pass arguments to a function, we are able to
        pass arguments to the functionalcomponenets

    */}
            <h1>
                {
                    props.title
                }
            </h1>
    {/*
        Children

        In react we use the word children to call the elements that are inserted
        inside the web componenet when it is called
                here is an example
                    <PropsAttributesAndChildren id="this-is-an-attribute" title="this is a property">
                        <h2>Child element</h2>
                        <h2>another child</h2>
                    </PropsAttributesAndChildren>
        We receive the children in the props of the function unde the name children
    */}
            <div>
                {props.children}
            </div>
        </div>
    </div>
  );
}

export default PropsAttributesAndChildren;
