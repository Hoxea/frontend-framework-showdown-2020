import getImages from './api.js';

const form = document.querySelector('form');
const loadingImage = document.querySelector('#loadingImage');

loadingImage.style.display = 'none';

form.addEventListener('submit', async (event) => {
	event.preventDefault();
	const formData = new FormData(form);
	const searchTerm = formData.get('searchTerm');
	loadingImage.style.display = '';
	console.log(searchTerm);
	const images = await getImages(searchTerm);
});

function addImageToPages(images) {}
