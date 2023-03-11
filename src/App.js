import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { CityWrapper } from "./components/CityWrapper";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <CityWrapper />
      </QueryClientProvider>
    </div>
  );
}

export default App;
