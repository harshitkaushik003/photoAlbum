import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./styles/App.css"
import AddAlbum from "./pages/AddAlbum";
import UpdateAlbum from "./pages/UpdateAlbum";


function App() {
	const router = createBrowserRouter([
		{path: '/', element: <Navbar/>, children:[
			{index: true, element: <Home/>},
			{path:"add-album", element: <AddAlbum/>},
			{path: 'update/:id', element: <UpdateAlbum/>}
		]}
	])
	return (
		<>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
		</>
	);
}

export default App;