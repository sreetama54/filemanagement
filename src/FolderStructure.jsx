import React, { useState } from "react";

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div onClick={handleToggle}>{isOpen ? "-" : "+"}</div>
      {isOpen ? <div>{name}</div> : null}
      {isOpen && children}
    </div>
  );
};

const File = ({ name }) => {
  return <div>{name} </div>;
};

const FolderStructure = ({ data }) => {
  function renderNode(node) {
    if (!node) {
      return null;
    }

    if (node.type === "folder") {
      let children = node.child.map((childId) => renderNode(data[childId]));
      return (
        <Folder key={node.child} name={node.child}>
          {children}
        </Folder>
      );
    }
    console.log("node child", node.child);
    if (node.child) {
      return <File name={node.child} />;
    } else {
      return null; // not defined types
    }
  }

  return (
    <div>
      {renderNode(data.root)}
      <p></p>
    </div>
  );
};

export default FolderStructure;
