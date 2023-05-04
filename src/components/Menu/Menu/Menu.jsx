import {Link} from 'react-router-dom'
import styles from './Menu.module.css';
import LogoMenu from '../LogoMenu/LogoMenu';

const Menu = () => {
	return (
		<>
		<div className={styles.list}>
		<LogoMenu />
		<ul>
			<li>
				<Link to='/dogs'><h2>Собаки</h2></Link>
			</li>
			<li>
				<h2>Кошки</h2>
			</li>
			<li>Салоны</li>
			<li>Мастера</li>
			<li>Услуги</li>
			<li>О нас</li>
			</ul>
			</div>
		</>
	);
};

export default Menu;
