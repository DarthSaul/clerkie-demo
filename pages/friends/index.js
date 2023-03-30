import FriendsList from '@/components/FriendsList';
import FriendsSkeleton from '@/components/FriendsSkeleton';
import { useEffect, useState, useRef, useCallback } from 'react';
import getData from '@/lib/getData.js';
import { MdTune } from 'react-icons/md';
import styles from '@/styles/Friends.module.css';
import { Spinner } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import PopupMenu from '@/components/PopupMenu';
import OutsideClickHandler from '@/components/OutsideClickHandler';

export default function Friends() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [errorMsg, setError] = useState(false);
	const [popupMenu, setPopup] = useState(false);

	const [pageinateLoading, setPageLoading] = useState(false);
	const [filters, setFilters] = useState({ close: false, super: false });
	const [selections, setSelections] = useState({
		close: false,
		super: false,
	});

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const { results, error } = await getData();
			if (error) {
				setError(error);
			} else {
				setData(results);
			}
			setLoading(false);
		}
		if (data.length === 0) {
			fetchData();
		}
	});

	const handleOnDocumentBottom = useCallback(() => {
		async function fetchMoreData() {
			if (!pageinateLoading && data.length) {
				setPageLoading(true);
				const response = await getData();
				setData(data.concat(response.results));
				setPageLoading(false);
			}
		}
		fetchMoreData();
	}, [data, pageinateLoading]);

	useBottomScrollListener(handleOnDocumentBottom);

	const handleChange = (event) => {
		const { name, checked } = event.target;
		setSelections((state) => ({
			...state,
			[name]: checked,
		}));
	};

	// Would need to be improved for scalability
	function filteredData() {
		let filteredData = [...data];

		if (filters.close && filters.super) {
			filteredData = [...data].filter(
				(item) =>
					item.friend_type === 'close' ||
					item.friend_type === 'super'
			);
		} else if (filters.close) {
			filteredData = [...data].filter(
				(item) => item.friend_type === 'close'
			);
		} else if (filters.super) {
			filteredData = [...data].filter(
				(item) => item.friend_type === 'super'
			);
		}
		return filteredData;
	}

	function applyFilters() {
		setFilters(selections);
	}

	function clearFilters() {
		setFilters({ close: false, super: false });
		setSelections({ close: false, super: false });
	}

	function filterQty() {
		const asArray = Object.entries(filters);
		const filtered = asArray.filter(
			([key, value]) => value === true
		);
		return filtered.length;
	}

	function openPopup() {
		setPopup(true);
	}
	function handleOutside() {
		setPopup(false);
	}

	if (errorMsg)
		return (
			<div>
				Whoops, something went wrong. Please try again
				or contact support.
			</div>
		);

	return (
		<>
			<div className="flex items-center mb-6">
				<div>
					<OutsideClickHandler
						onOutsideClick={handleOutside}
					>
						<button
							className={`rounded-full py-1 px-2 mr-3 relative 
              ${styles['filter-btn']} ${
								popupMenu
									? 'bg-gray_1000 text-white'
									: ''
							}`}
							onClick={openPopup}
						>
							<MdTune
								className={
									styles[
										'filter-icon'
									]
								}
							/>
						</button>

						{popupMenu ? (
							<PopupMenu
								setPopup={
									setPopup
								}
								clearFilters={
									clearFilters
								}
								handleChange={
									handleChange
								}
								selections={
									selections
								}
								applyFilters={
									applyFilters
								}
							/>
						) : null}
					</OutsideClickHandler>
				</div>

				<div className="pl-4" id="test-id">
					<span
						className={`${styles.clear} ${
							filterQty() > 0
								? styles[
										'clear-active'
								  ]
								: ''
						}`}
						onClick={
							filterQty() > 0
								? clearFilters
								: undefined
						}
					>
						Clear All
					</span>
				</div>
			</div>

			{loading ? (
				[...Array(5)].map((e, i) => (
					<FriendsSkeleton key={i} />
				))
			) : (
				<>
					<div className="pb-10">
						<FriendsList
							friends={filteredData()}
						/>
					</div>

					{pageinateLoading && (
						<div className="w-full text-center">
							<Spinner size="xl" />
						</div>
					)}
				</>
			)}
		</>
	);
}
