import FriendsList from '@/components/FriendsList';
import FriendsSkeleton from '@/components/FriendsSkeleton';
import { useEffect, useState, useRef, useCallback } from 'react';
import getData from '@/lib/getData.js';
import { MdTune } from 'react-icons/md';
import styles from '@/styles/Friends.module.css';
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	Portal,
	Box,
	Button,
	Spinner,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

export default function Friends() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [pageinateLoading, setPageLoading] = useState(false);
	const [filters, setFilters] = useState({ close: false, super: false });
	const [selections, setSelections] = useState({
		close: false,
		super: false,
	});

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const response = await getData();
			setData(response.results);
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

	const scrollRef = useBottomScrollListener(() =>
		console.log('at bottom!')
	);

	const handleChange = (event) => {
		const { name, checked } = event.target;
		setSelections((state) => ({
			...state,
			[name]: checked,
		}));
	};

	const initRef = useRef();

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

	return (
		<>
			<div className="flex items-center mb-4" ref={scrollRef}>
				<div
					className={
						filterQty() > 0
							? 'border-r pr-2'
							: ''
					}
				>
					<Popover
						closeOnBlur={false}
						placement="bottom-start"
						initialFocusRef={initRef}
					>
						{({ isOpen, onClose }) => (
							<>
								<PopoverTrigger>
									<div
										className={`rounded-full border px-2 py-1 ${
											isOpen ||
											filters.close ||
											filters.super
												? 'text-white bg-slate-700'
												: 'text-slate-700'
										}`}
									>
										<div
											className={`flex items-center ${styles.cursor}`}
										>
											<div>
												<MdTune
													className={
														styles.filter
													}
												/>
											</div>
											{filterQty() >
												0 && (
												<div className="ml-2 text-xs">
													{filterQty()}
												</div>
											)}
										</div>
									</div>
								</PopoverTrigger>
								<Portal>
									<PopoverContent>
										<PopoverHeader>
											<div className="grid grid-cols-3 items-center my-2">
												<div
													className="text-slate-400 text-sm"
													onClick={
														onClose
													}
												>
													<span
														className={
															styles.clear
														}
														onClick={
															clearFilters
														}
													>
														Clear
														All
													</span>
												</div>
												<div className="text-center font-bold text-lg">
													Filter
												</div>
												<div className="text-right">
													<SmallCloseIcon
														onClick={
															onClose
														}
														className={
															styles.close
														}
													/>
												</div>
											</div>
										</PopoverHeader>

										<PopoverBody>
											<Box>
												<p className="my-1 text-slate-600 text-sm mb-3">
													Friend
													Status
												</p>
												<div className="flex justify-between items-center text-lg mb-3">
													Close
													Friends
													<input
														name="close"
														type="checkbox"
														checked={
															selections.close
														}
														onChange={
															handleChange
														}
													/>
												</div>
												<div className="flex justify-between items-center text-lg mb-3">
													Super
													Close
													Friends
													<input
														name="super"
														type="checkbox"
														checked={
															selections.super
														}
														onChange={
															handleChange
														}
													/>
												</div>
											</Box>
											<div
												onClick={
													applyFilters
												}
											>
												<button
													onClick={
														onClose
													}
													ref={
														initRef
													}
													className="w-full mt-4 rounded-md bg-gray-600 text-white py-2"
												>
													Apply
												</button>
											</div>
										</PopoverBody>
									</PopoverContent>
								</Portal>
							</>
						)}
					</Popover>
				</div>
				{filterQty() > 0 && (
					<div className="pl-2">
						{' '}
						<span
							className={styles.clear}
							onClick={clearFilters}
						>
							Clear All
						</span>
					</div>
				)}
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
