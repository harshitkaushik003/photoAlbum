//importing components and pages
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AddAlbum from "./pages/AddAlbum";
import UpdateAlbum from "./pages/UpdateAlbum";

//router functions 
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

//redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

//global style
import "./styles/App.css"


function App() {

	//router
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