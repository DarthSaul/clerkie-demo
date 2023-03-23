import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '@/styles/FriendProfile.module.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const Friend = () => {
	const router = useRouter();
	const { friend } = router.query;

	return (
		<div className="grid grid-cols-12 gap-4 my-8">
			<div className="col-span-12 bg-light-blue h-40 rounded-t-xl">
				<div className="flex justify-end items-end h-full">
					<div>
						<Image
							src="/wallet-friends.svg"
							width={425}
							height={100}
							alt="profile header"
							className={
								styles.headerImage
							}
						/>
					</div>
				</div>
			</div>
			<div className="col-span-12 h-20 mb-12">
				<div className="flex">
					<div className="mr-10">
						<Image
							src="/person.jpg"
							width={175}
							height={175}
							alt="profile header"
							className={
								styles.profileImage
							}
						/>
					</div>
					<div>
						<div className="text-3xl font-bold">
							Mark Smith
						</div>
						<div className="text-slate-400">
							Member role
							{/* <span className="rounded-full bg-green-100 text-green-600 px-3 py-0.5 font-bold ">
								June 2021
							</span> */}
						</div>
					</div>
				</div>
			</div>
			<div className="col-span-12">
				<Tabs variant="soft-rounded" colorScheme="gray">
					<TabList>
						<Tab className="mr-6">One</Tab>
						<Tab className="mr-6">Two</Tab>
						<Tab className="mr-6">
							Three
						</Tab>
					</TabList>

					<TabPanels className="my-5">
						<TabPanel
							style={{ padding: 0 }}
						>
							<div className="grid grid-cols-12 gap-8">
								<div className="col-span-8">
									<div className="h-80 rounded-xl bg-orange-100 p-8 flex flex-col justify-between">
										<div className="text-2xl font-bold">
											Portfolio
											Growth
										</div>
										<div>
											<Image
												src="/chart.svg"
												width={
													350
												}
												height={
													300
												}
												alt="chart"
												className="mx-auto"
											/>
										</div>
									</div>
								</div>
								<div className="col-span-4">
									<div className="h-80 rounded-xl bg-cyan-100 p-8 justify-between">
										<div className="text-2xl font-bold mb-5">
											Recent
											Activity
										</div>
										<div className="mb-3">
											<div className="flex items-center">
												<div className="mr-3">
													<div class="rounded-full bg-amber-400 h-2 w-2"></div>
												</div>
												<div className="text-lg">
													Recent
													activity
													1
												</div>
											</div>
										</div>
										<div className="mb-3">
											<div className="flex items-center">
												<div className="mr-3">
													<div class="rounded-full bg-red-300 h-2 w-2"></div>
												</div>
												<div className="text-lg">
													Recent
													activity
													2
												</div>
											</div>
										</div>
										<div className="mb-3">
											<div className="flex items-center">
												<div className="mr-3">
													<div class="rounded-full bg-green-500 h-2 w-2"></div>
												</div>
												<div className="text-lg">
													Recent
													activity
													3
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<div className="text-lg">
								Panel Two!
							</div>
						</TabPanel>
						<TabPanel>
							<div className="text-lg">
								Panel Three!
							</div>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</div>
		</div>
	);
};

export default Friend;
