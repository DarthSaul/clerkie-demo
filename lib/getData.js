import data from '@/utils/data.json';

export default async function getData({ page, filters }) {
	const { results } = data;
	return new Promise((resolve, reject) => {
		let filteredData = [...results];

		if (filters.close && filters.super) {
			filteredData = [...results].filter(
				(item) =>
					item.friend_type === 'close' ||
					item.friend_type === 'super'
			);
		} else if (filters.close) {
			filteredData = [...results].filter(
				(item) => item.friend_type === 'close'
			);
		} else if (filters.super) {
			filteredData = [...results].filter(
				(item) => item.friend_type === 'super'
			);
		}

		setTimeout(() => {
			resolve({
				results: filteredData.slice(page, page + 10),
			});
		}, 1500);
	});
}
