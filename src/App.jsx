import Body from "./component/Body";
import Navbar from "./component/Navbar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./component/Watch";
import Feed from "./component/Feed";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Feed />
      },
      {

        path: "/watch",
        element: <Watch />
      }
    ]
  }
])

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;