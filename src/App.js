import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Chat from './component/Chat/Chat';
import Join from './component/Join/Join';



const router = createBrowserRouter([
{
  path:'/',
  element:<Join></Join>
},
{
  path:'/chat',
  element:<Chat></Chat>
}
])

function App() {


 
  return (
    <div className="App">
      <RouterProvider router={router}>

     </RouterProvider>
    
   
    </div>
  );
}

export default App;
