import React from "react";
import './App.css'
const Blog = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-3xl font-bold">Question and Answer </h1>
      <div className="blog-info mt-4 mx-4">
        <h2>1. Difference between props & state. </h2>
        <p className="indent-4">
          props (short for properties) is an object that is passed down from a
          parent component to a child component. It is read-only and cannot be
          modified by the child component.
          <br /> <br />
          state, on the other hand, is a private internal data store for a
          component. It can be modified by the component itself using the
          setState function. When the state is updated, the component will be
          re-rendered with the new state value
        </p>
        <h2>2. How does useState work ? </h2>
        <p className="indent-4">
          In React, the useState hook is used to manage state in functional
          components. It returns an array with two elements: the current state
          value and a function to update the state <br /> <br />
          When the state is updated using the setCount function, React will
          re-render the component with the new state value, and any parts of the
          component that depend on the state will be updated accordingly.
        </p>
        <h2>3. Apart from data load, what else does useEffect do? </h2>
        <p className="indent-4">
          Event listeners: You can use useEffect to add and remove event
          listeners, such as listening for clicks or key presses <br />
          DOM manipulation: You can use useEffect to manipulate the DOM directly{" "}
          <br />
          Timers and intervals: You can use useEffect to set up timers and
          intervals
        </p>
        <h2>4. How does React work ? </h2>
        <p className="indent-4">
          React then renders the components in the application. Each component
          is a function that returns a tree of React elements, which describe
          what should be displayed on the screen. These elements are then used
          by React to update the Virtual DOM.
        </p>
      </div>
    </div>
  );
};

export default Blog;
