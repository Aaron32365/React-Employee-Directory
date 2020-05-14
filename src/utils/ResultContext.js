import React from "react";
// default context object with properties corresponding to Provider values
const ResultContext = React.createContext({
    db: [],
    sort: () => undefined,
    filter: () => undefined
});

export default ResultContext;
  