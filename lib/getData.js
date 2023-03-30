import data from '@/utils/data.json';

export default async function getData(page) {
	return new Promise((resolve, reject) => {
		// Here is where another param could be included, such as 'types' could be utilized
		// If 'types' is provided, import JSON and filter with .filter()
		// Then return items based on page

		setTimeout(() => {
			resolve({
				results: data.results.slice(page, page + 10),
			});
		}, 2500);
	});
}
