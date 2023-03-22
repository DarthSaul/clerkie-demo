import NavDrawer from './NavDrawer';
import Header from './Header';

export default function Layout({ children }) {
	return (
		<div className="grid grid-cols-5 h-screen">
			<div className="col-span-1">
				<NavDrawer />
			</div>
			<div className="col-span-4">
				<Header />
				<div className="p-10">{children}</div>
			</div>
		</div>
	);
}
