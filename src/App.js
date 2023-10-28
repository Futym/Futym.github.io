import "./App.css";
import { ContactForm } from "./ContactForm";
import { Projects } from "./Projects";
import { About } from "./About";
import { Excuses } from "./Excuses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page404 } from "./Page404";
import { NavBar } from "./NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/excuses" element={<Excuses />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
