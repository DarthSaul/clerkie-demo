import styles from '@/styles/Friends.module.css';

export default function StatusBadge({ type }) {
	const badgeStyles = {
		close: styles['badge-blue'],
		super: styles['badge-green'],
	};
	const text = {
		close: 'Close Friends',
		super: 'Super Close Friends',
	};
	return <div className={`${badgeStyles[type]}`}>{text[type]}</div>;
}
