import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from '../components/Menu/Menu/Menu';
import styles from './App.module.css';
import { routerConfig } from '../route/routerConfig';

function App() {
  return (
		<BrowserRouter>
    <div className={styles.App}>
			<Menu />
			<Routes>
			{ routerConfig.map((route)=> (
				<Route path={route.path} element={route.element}/>
			))}
		</Routes>
			</div>
	

		</BrowserRouter>	
  );
}

export default App;
