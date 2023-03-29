import NavDrawer from './NavDrawer';
import Header from './Header';
import styles from '@/styles/Nav.module.css';
import { Drawer, DrawerOverlay, DrawerContent, Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

export default function Layout({ children }) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<div className="flex">
			<aside
				className={`h-screen sticky top-0 ${styles.drawer}`}
			>
				<NavDrawer />
			</aside>

			<Drawer
				placement={'left'}
				onClose={onClose}
				isOpen={isOpen}
			>
				<DrawerOverlay />
				<DrawerContent>
					<NavDrawer close={onClose} />
				</DrawerContent>
			</Drawer>

			<main className="w-full">
				<div className="sticky top-0 bg-white">
					<Header open={onOpen} />
				</div>
				<div></div>
				<div className="page-container">{children}</div>
			</main>
		</div>
	);
}
