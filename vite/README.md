# forwardRef

# Before version 19

- If you try to pass a ref to a functional component, React will throw an error because functional components cannot receive refs directly.

- We have to wrap component inside forwardRef

- forwardRef allows a parent component to directly access a child component’s DOM element.

# After version 19

- We can pass a ref to a functional component directly as a normal