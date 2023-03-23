export default function StatusBadge({ type }) {
	const styles = {
		close: 'bg-green-100 text-green-600',
		super: 'bg-blue-100 text-blue-600',
	};
	const text = {
		close: 'Close Friends',
		super: 'Super Close Friends',
	};
	return (
		<div className={`rounded-full px-2 ${styles[type]}`}>
			{text[type]}
		</div>
	);
}
