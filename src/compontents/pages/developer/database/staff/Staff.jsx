import React from "react";
import StaffTable from "./StaffTable";
import Navigation from "../../../../partials/Navigation";
import Header from "../../../../partials/Header";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import ModalAddStaff from "./ModalAddStaff";
import useQueryData from "../../../../custom-hook/useQueryData";
import Toast from "../../../../partials/Toast";
import StaffSearchBar from "./StaffSearchBar";
import StaffInformation from "./StaffInformation";
import { StoreContext } from "../../../../../store/StoreContext";
import { setIsAdd } from "../../../../../store/StoreAction";

const Staff = () => {
	const { store, dispatch } = React.useContext(StoreContext);
	// for databaseinformation
	const [itemData, setItemData] = React.useState("");
	const [itemState, setItemState] = React.useState("");
	// for searchBar:
	const [isSearch, setIsSeach] = React.useState(false);
	const [keyword, setKeyword] = React.useState("");
	//  other
	const [itemEdit, setItemEdit] = React.useState(null);
	// value for setting if sidebar will be active
	const [showInfo, setShowInfo] = React.useState(false);
	//  handler if adding
	const handleAdd = () => {
		// callbacks via store folder
		dispatch(setIsAdd(true));
		setItemEdit(null);
	};
	const {
		isLoading,
		isFetching,
		error,
		data: staff,
	} = useQueryData(
		isSearch ? "/v1/staff/search" : "/v1/staff", // endpoint
		isSearch ? "post" : "get", // method
		"staff", //key
		// ["staff", isSearch],
		{
			searchValue: keyword,
		}
	);
	return (
		<>
			<section className="flex overflow-x-hidden">
				<Navigation />
				<main className="w-[calc(100%-250px)]">
					<Header />
					<div className="flex relative">
						<div
							className={`main-wrapper transition-all px-4 py-3 ${
								store.isShow ? "w-3/4" : "w-full"
							}`}>
							<div className="flex justify-between items-center">
								<h1 className="leading-none mb-0">Staff Database</h1>
								<StaffSearchBar
									setIsSeach={setIsSeach}
									setKeyword={setKeyword}
								/>
							</div>

							<div className="tab flex justify-between items-center my-8 border-b border-line ">
								<ul className="flex">
									<li className="tab-link ">
										<Link to="/database/student">Student</Link>
									</li>
									<li className="tab-link">
										<Link to="/database/teacher">Teacher</Link>
									</li>
									<li className="tab-link active ">
										<Link to="/database/staff">Staff</Link>
									</li>
									<li className="tab-link">
										<Link to="/database/checker">Checker</Link>
									</li>
								</ul>
								<button
									className="btn btn--accent flex items-center gap-2"
									onClick={handleAdd}>
									Add New Staff Member
									<FiPlus />
								</button>
							</div>
							<StaffTable
								setShowInfo={setShowInfo}
								showInfo={showInfo}
								isLoading={isLoading}
								staff={staff}
								setItemEdit={setItemEdit}
								setItemData={setItemData}
								setItemState={setItemState}
							/>
							{/* main div */}
						</div>
						<StaffInformation
							showInfo={showInfo}
							setShowInfo={setShowInfo}
							itemData={itemData}
							itemState={itemState}
							// add if double click, add data to database information
						/>
					</div>
				</main>
				{store.isAdd && <ModalAddStaff itemEdit={itemEdit} />}
				{store.success && <Toast />}
				{store.isError && <Toast />}
			</section>
		</>
	);
};

export default Staff;
