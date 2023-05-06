import React from "react";

const AppContext = React.createContext({
  bigOData: {},
  setBigOData: () => {},
  isLoading: true,
  setIsLoading: () => {},
});

export default AppContext;
