import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </HashRouter>
  </Provider>
);
