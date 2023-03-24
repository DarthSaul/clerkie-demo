import DashboardRow from '@/components/DashboardRow';

function Pokemon() {
	return (
		<div>
			<div className="mb-5">
				<DashboardRow
					name="charmander"
					color="amber-400"
				/>
			</div>
			<div className="mb-5">
				<DashboardRow
					name="charmeleon"
					color="red-300"
				/>
			</div>
			<div className="mb-5">
				<DashboardRow
					name="charizard"
					color="cyan-200"
				/>
			</div>
		</div>
	);
}

export default Pokemon;
