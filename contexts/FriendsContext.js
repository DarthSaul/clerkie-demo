import React, { useState } from 'react';
import getData from '@/lib/getData.js';

const FriendsContext = React.createContext();

function FriendsProvider({ children }) {
	const [friendsState, setState] = useState({
		loading: false,
		paginateLoading: false,
		page: 0,
		next: null,
		friends: [],
		error: null,
	});

	function setLoading(value) {
		setState((prevState) => ({
			...prevState,
			loading: value,
		}));
	}
	function setPageLoading(value) {
		setState((prevState) => ({
			...prevState,
			paginateLoading: value,
		}));
	}

	async function initData() {
		setLoading(true);
		const { results, error } = await getData(friendsState.page);
		if (error) {
			setState((prevState) => ({
				...prevState,
				loading: false,
				error,
			}));
		} else {
			setState((prevState) => ({
				...prevState,
				loading: false,
				error: null,
				friends: [...results],
				page: prevState.page + 1,
			}));
		}
	}

	async function fetchMoreData() {
		setPageLoading(true);
		const { results, error } = await getData(friendsState.page);
		if (error) {
			setState((prevState) => ({
				...prevState,
				paginateLoading: false,
				error,
			}));
		} else {
			setState((prevState) => ({
				...prevState,
				paginateLoading: false,
				error: null,
				friends: [...prevState.friends, ...results],
				page: prevState.page + 1,
			}));
		}
	}

	return (
		<FriendsContext.Provider
			value={{
				friendsState,
				initData,
				fetchMoreData,
			}}
		>
			{children}
		</FriendsContext.Provider>
	);
}

export { FriendsProvider, FriendsContext };
