import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Covid from './components/covid';
import StateWise from './components/statewise';
import NotFoundPage from './components/notFoundPage';
import CovidDoses from './components/CovidDoses';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Covid />,
    errorElement:<NotFoundPage />
  },
  {
    path:'statewise',
    element:<StateWise />
  },
  {
    path:'daywisecoviddoses',
    element:<CovidDoses />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
