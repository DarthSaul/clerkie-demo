import Link from 'next/link';

function Home() {
	return (
		<div className="h-screen">
			<div className="grid grid-cols-12 items-stretch h-4/6 gap-6">
				<Link
					href="/friends"
					className="col-span-12 md:col-span-6 bg-cyan-300 rounded-xl flex items-center justify-center text-6xl"
				>
					Friends
				</Link>

				<Link
					href="/pokemon"
					className="col-span-12 md:col-span-6 bg-amber-300 rounded-xl flex items-center justify-center text-6xl"
				>
					Pokemon
				</Link>
			</div>
		</div>
	);
}

export default Home;
