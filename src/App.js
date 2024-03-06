import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { LiveMatches } from './Components/LiveMatches';
import { UpcomingMatches } from './Components/UpcomingMatches';
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Body } from './Components/Body';
import { MatchDetails } from './Components/MatchDetails';
import { MainContainer } from './Components/MainContainer';
import store from './Utils/Store';
import { Provider } from 'react-redux';
import React from 'react';

function App() {
  return (
        <div>
          <React.StrictMode>
          <Provider store={store}>
                <Header />
                   <RouterProvider router={appRouter} />
           </Provider>
          </React.StrictMode>
           
        </div>  
    
  );
}

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <Body />, // show component for particular path // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "score",
        element: <MatchDetails/>
      }
    ],
  },
]);

export default App;

