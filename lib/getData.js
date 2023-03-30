import data from '@/utils/data.json';

export default async function getData(page) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				results: data.results.slice(page, page + 10),
			});
		}, 2500);
	});
}
