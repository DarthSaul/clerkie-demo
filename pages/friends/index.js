import FriendsList from '@/components/FriendsList';
import FriendsSkeleton from '@/components/FriendsSkeleton';
import { useEffect, useState, useCallback, useContext } from 'react';
import { FriendsContext } from '@/contexts/FriendsContext';
import { MdTune } from 'react-icons/md';
import styles from '@/styles/Friends.module.css';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import PopupMenu from '@/components/PopupMenu';
import OutsideClickHandler from '@/components/OutsideClickHandler';

export default function Friends() {
	const [popupMenu, setPopup] = useState(false);
	const [filters, setFilters] = useState({ close: false, super: false });
	const [selections, setSelections] = useState({
		close: false,
		super: false,
	});

	const {
		friendsState: { friends, loading, paginateLoading, error },
		initData,
		fetchMoreData,
	} = useContext(FriendsContext);

	useEffect(() => {
		if (friends.length === 0) {
			initData();
		}
	}, []);

	const handleOnDocumentBottom = useCallback(() => {
		if (!paginateLoading) {
			fetchMoreData();
		}
	}, [paginateLoading, fetchMoreData]);

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
		let filteredData = [...friends];

		if (filters.close && filters.super) {
			filteredData = [...friends].filter(
				(item) =>
					item.friend_type === 'close' ||
					item.friend_type === 'super'
			);
		} else if (filters.close) {
			filteredData = [...friends].filter(
				(item) => item.friend_type === 'close'
			);
		} else if (filters.super) {
			filteredData = [...friends].filter(
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

	if (error)
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
								filterQty={
									filterQty
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

					{paginateLoading && (
						<div className="w-full text-center mb-10">
							<p className="animate-pulse">
								Fetching more
								items...
							</p>
						</div>
					)}
				</>
			)}
		</>
	);
}
