import React, { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import AppContainer from "./components/AppContainer";
import AppContext from "./helpers/appContext";
import queryClient from "./api/queryClient";

function App() {
  const [bigOData, setBigOData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const value = { bigOData, setBigOData, isLoading, setIsLoading };
  return (
    <AppContext.Provider value={value}>
      <QueryClientProvider client={queryClient}>
        <AppContainer />
      </QueryClientProvider>
    </AppContext.Provider>
  );
}

export default App;
