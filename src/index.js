import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./pages/error";
import MovieDetailViewerPage from "./pages/movies/movieDetail";
import NotFoundPage from "./pages/notFound";
import AppLayout from "./App.layout";

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<AppLayout />}
            errorElement={<ErrorPage />}
          >
            <Route index element={<App />} />
            <Route path="movies/:movieId" element={<MovieDetailViewerPage />} />
            <Route path="tvseries/:movieId" element={<MovieDetailViewerPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
