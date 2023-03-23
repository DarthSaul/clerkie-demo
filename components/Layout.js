import NavDrawer from './NavDrawer';
import Header from './Header';

export default function Layout({ children }) {
	return (
		<div className="flex">
			<aside className="h-screen sticky top-0 w-80">
				<NavDrawer />
			</aside>

			<main className="w-full">
				<div className="sticky top-0 bg-white">
					<Header />
				</div>
				<div className="p-10">{children}</div>
			</main>
		</div>
	);
}
