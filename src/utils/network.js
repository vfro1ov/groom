import axios from 'axios';
export const getApiResource = async (url) => {
	const res = axios.get(url)
		.then(function (response) {
			// обработка успешного запроса
			console.log(response);
			console.log(res)
		})
		.catch(function (error) {
			// обработка ошибки
			console.log(error);
		})
		.finally(function () {
			// выполняется всегда
		});
};
