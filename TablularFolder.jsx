import React from "react";

const TablularFolder = ({ Json }) => {
  const data = Object.keys(Json).map((key) => ({
    name: key,
    type: Json[key].type,
    child: Json[key].child.join(", ")
  }));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Child</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.child}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablularFolder;
