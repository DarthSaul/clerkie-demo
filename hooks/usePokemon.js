import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function usePokemon(name) {
	const { data, error, isLoading } = useSWR(
		`https://pokeapi.co/api/v2/pokemon/${name}`,
		fetcher
	);

	return {
		pokemon: data,
		isLoading,
		isError: error,
	};
}

export default usePokemon;
