import data from '../../utils/data.json';

export default function handler(req, res) {
	res.status(200).json(data);
}
