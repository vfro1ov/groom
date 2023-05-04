import styles from './Home.module.css';

const Home = () => {
	return (
		<>
		<div className={styles.container}>
		<div className={styles.container_left}>
			<div>
				<h1>Стрижка Собак и кошек</h1>
				<p>Ухоженные питомцы, с гладкой шерстью и красивой стрижкой, как дорогая известная картина, которой любуется весь мир.</p>
			</div>
		</div>
		<div className={styles.container_right}>
			<div>
				<img src="https://tn.fishki.net/26/upload/post/2020/05/23/3324707/tn/shoandtee-grooming.jpg" alt="img" />
			</div>
{/* Добавить Div карусель ниже */}
		</div>
		</div>
		</>
	);
}

export default Home;