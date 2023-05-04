import {Link} from 'react-router-dom'
import styles from  './LogoMenu.module.css';
import logo from './img/logomenu.png'

const LogoMenu = () => {
	return (
			<div className={styles.logo}>
				<Link to='/'><h3>GROMMY MAMY </h3></Link>
				<img src={logo} alt="logo" />
			</div>
	);
}

export default LogoMenu;