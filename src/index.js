import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import { StrictMode } from 'react';
import App from "./App";

// ========================================
  
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />);
  
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    
    <App />
  </StrictMode>
);