import React from 'react';
import Collapsible from 'react-collapsible';

const CollapsiblePanel = () => {
  return (
    <Collapsible trigger="Click here to know more">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
    </Collapsible>
  );
};

export default CollapsiblePanel;
