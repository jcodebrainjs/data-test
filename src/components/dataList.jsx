import React from "react";

export const DataList = (list) => {
  return (
    <ul>
      {Object.keys(list).map(
        (item, ndx) =>
          typeof list[item] === "string" && (
            <li key={`data-${ndx}`}>
              {item} : {list[item]}
            </li>
          )
      )}
    </ul>
  );
};
