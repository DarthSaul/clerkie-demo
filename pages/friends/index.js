import FriendsList from '@/components/FriendsList';
import FriendsSkeleton from '@/components/FriendsSkeleton';
import { useEffect, useState, useRef } from 'react';
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
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

export default function Friends() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
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
	}, [data.length]);

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

	return (
		<>
			<div className="flex mb-4">
				<Popover
					closeOnBlur={false}
					placement="bottom-start"
					initialFocusRef={initRef}
				>
					{({ isOpen, onClose }) => (
						<>
							<PopoverTrigger>
								<div
									className={`rounded-full border px-2 ${
										isOpen
											? 'text-white bg-slate-700'
											: 'text-slate-700'
									}`}
								>
									<MdTune
										className={
											styles.filter
										}
									/>
								</div>
							</PopoverTrigger>
							<Portal>
								<PopoverContent>
									<PopoverHeader>
										<div className="grid grid-cols-3 items-center my-2">
											<div className="text-slate-400 text-sm">
												<span
													className={
														styles.clear
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
											<Button
												mt={
													4
												}
												colorScheme="facebook"
												onClick={
													onClose
												}
												ref={
													initRef
												}
												className="w-full"
											>
												Apply
											</Button>
										</div>
									</PopoverBody>
								</PopoverContent>
							</Portal>
						</>
					)}
				</Popover>
			</div>
			{loading ? (
				[...Array(5)].map((e, i) => (
					<FriendsSkeleton key={i} />
				))
			) : (
				<FriendsList friends={filteredData()} />
			)}
		</>
	);
}
