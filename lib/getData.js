import data from '@/utils/data.json';

export default async function getData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data);
		}, 2500);
	});
}
