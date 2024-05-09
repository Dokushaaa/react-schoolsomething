import React from "react";
import { PiArchive } from "react-icons/pi";
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from "react-icons/lia";
import TableLoader from "../../../../partials/TableLoader";
import NoData from "../../../../partials/NoData";
import SpinnerFetching from "../../../../partials/spinners/SpinnerFetching";
import ModalConfirm from "../../../../partials/modals/ModalConfirm";
import ModalDelete from "../../../../partials/modals/ModalDelete";
import {
	setIsActive,
	setIsAdd,
	setIsDelete,
	setIsShow,
	setIsArchive,
} from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";

const TeacherTable = ({
	setShowInfo,
	isLoading,
	setItemEdit,
	setIsSuccess,
	setMessage,
	setIsError,
	setItemData,
	teacher,
}) => {
	const { store, dispatch } = React.useContext(StoreContext);
	let counter = 1;
	const showDatabaseInfo = (item) => {
		setItemData(item);
		dispatch(setIsShow(true));
	};
	const handleEdit = (item) => {
		setItemEdit(item);
		dispatch(setIsAdd(true));
	};
	const handleArchive = (item) => {
		dispatch(setIsActive(true));
		setId(item.teacher_aid);
		// dispatch(setIsArchive(0));
		setIsArchiving(0);
	};
	const handleRestore = (item) => {
		dispatch(setIsActive(true));
		setId(item.teacher_aid);
		// dispatch(setIsArchive(1));
		setIsArchiving(1);
	};
	const handleDelete = (item) => {
		dispatch(setIsDelete(true));
		setId(item.teacher_aid);
	};
	// id setter
	const [id, setId] = React.useState("");
	// active setter
	const [isArchiving, setIsArchiving] = React.useState(0);

	return (
		<>
			<div className="table-wrapper overflow-x-scroll lg:overflow-x-auto h-full relative">
				{/* <SpinnerFetching /> */}
				<table>
					<thead>
						<tr>
							<th className="w-5">#</th>
							<th className="w-[150px]">Name</th>
							<th className="w-20">Class</th>
							<th className="w-20">Age</th>
							<th className="w-20">Gender</th>
							<th className="w-20">Email</th>
							<th className="w-[100px]">Action</th>
						</tr>
					</thead>
					<tbody>
						{isLoading ? (
							<tr>
								<td colSpan={7}>
									<TableLoader count="20" cols="4" />
								</td>
							</tr>
						) : teacher.data.length === 0 ? (
							<tr>
								<td colSpan={7}>
									<NoData />
								</td>
							</tr>
						) : (
							teacher?.data.map((item, key) => (
								<tr onDoubleClick={() => showDatabaseInfo(item)} key={key}>
									<td>{counter++}</td>
									<td>{item.teacher_name}</td>
									<td>{item.teacher_class}</td>
									<td>{item.teacher_age}</td>
									<td>{item.teacher_gender}</td>
									<td>{item.teacher_email}</td>
									<td className="table-action">
										<ul>
											{item.teacher_is_active ? (
												<>
													<li>
														<button
															className="tooltip"
															data-tooltip="Edit"
															onClick={() => handleEdit(item)}>
															<LiaEdit />
														</button>
													</li>
													<li>
														<button
															className="tooltip"
															data-tooltip="Archive"
															onClick={() => handleArchive(item)}>
															<PiArchive />
														</button>
													</li>
												</>
											) : (
												<>
													<li>
														<button
															className="tooltip"
															data-tooltip="Delete"
															onClick={() => handleDelete(item)}>
															<LiaTrashAltSolid />
														</button>
													</li>
													<li>
														<button
															className="tooltip"
															data-tooltip="Restore"
															onClick={() => handleRestore(item)}>
															<LiaHistorySolid />
														</button>
													</li>
												</>
											)}
										</ul>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
			{store.isActive && (
				<ModalConfirm
					position={"center"}
					queryKey={"teacher"}
					endpoint={`/v1/teacher/active/${id}`}
					isArchiving={isArchiving}
					setIsSuccess={setIsSuccess}
					setMessage={setMessage}
					setIsError={setIsError}
				/>
			)}
			{store.isDelete && (
				<ModalDelete
					position={"center"}
					handleDelete={handleDelete}
					queryKey={"teacher"}
					endpoint={`/v1/teacher/${id}`}
					setIsSuccess={setIsSuccess}
					setMessage={setMessage}
					setIsError={setIsError}
				/>
			)}
		</>
	);
};

export default TeacherTable;
