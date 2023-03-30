import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import { FriendsProvider } from '@/contexts/FriendsContext';

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<FriendsProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</FriendsProvider>
		</ChakraProvider>
	);
}
