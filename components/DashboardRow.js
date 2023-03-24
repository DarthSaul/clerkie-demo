import usePokemon from '@/hooks/usePokemon';
import { Image } from '@chakra-ui/react';

export default function DashboardRow({ name, color }) {
	const { pokemon, isLoading } = usePokemon(name);
	if (isLoading) return <div>Loading...</div>;
	return (
		<div className="grid grid-cols-12 items-stretch gap-8">
			<div
				className={`col-span-12 md:col-span-6 lg:col-span-3 p-3 rounded-xl flex flex-col justify-between bg-${color}`}
			>
				<div className="mb-3 font-bold capitalize text-xl">
					{pokemon.name}
				</div>
				<div className="flex justify-end">
					<Image
						src={
							pokemon.sprites.other[
								'official-artwork'
							].front_default
						}
						alt={pokemon.name}
						width={150}
						height={150}
					/>
				</div>
			</div>

			<div
				className={`col-span-12 md:col-span-6 lg:col-span-3 p-3 rounded-xl flex flex-col justify-between bg-${color}`}
			>
				<div className="mb-3 font-bold text-xl">
					Base Experience
				</div>
				<div className="flex justify-end text-6xl">
					<div>{pokemon.base_experience}</div>
				</div>
			</div>

			<div
				className={`col-span-12 md:col-span-6 lg:col-span-3 p-3 rounded-xl flex flex-col justify-between bg-${color}`}
			>
				<div className="mb-3 font-bold text-xl">
					Primary Type
				</div>
				<div className="flex justify-end text-6xl capitalize">
					<div>{pokemon.types[0].type.name}</div>
				</div>
			</div>

			<div
				className={`col-span-12 md:col-span-6 lg:col-span-3 p-3 rounded-xl flex flex-col justify-between bg-${color}`}
			>
				<div className="mb-3 font-bold text-xl">
					Key Abilities
				</div>
				<div className="flex justify-end">
					<div>
						{pokemon.abilities.map(
							(item) => (
								<div
									className="flex items-center"
									key={
										item
											.ability
											.name
									}
								>
									<div className="rounded-full bg-cyan-500 h-2 w-2 mr-3"></div>
									<div className="capitalize">
										{
											item
												.ability
												.name
										}
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
