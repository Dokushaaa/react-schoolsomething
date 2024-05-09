import React from "react";
import { FaTimes } from "react-icons/fa";
import {
	LiaEdit,
	LiaEnvelope,
	LiaHistorySolid,
	LiaKeySolid,
	LiaTrashSolid,
} from "react-icons/lia";
// const values getset(s):
import { StoreContext } from "../../../../../store/StoreContext";
import { setIsAdd, setIsShow } from "../../../../../store/StoreAction";

const TeacherInformation = ({ itemData, showInfo, setShowInfo }) => {
	const { store, dispatch } = React.useContext(StoreContext);
	const handleClose = () => dispatch(setIsShow(false));
	return (
		<>
			<div
				className={`information absolute transition-all border-l border-line h-[calc(100vh-65px)] w-1/4 ${
					store.isShow ? "right-0 bg-primary" : "-right-1/4"
				}`}>
				<button
					onClick={handleClose}
					className="absolute top-0 right-0 size-10 grid place-content-center bg-secondary text-content">
					<FaTimes />
				</button>
				<div className="p-8">
					<div className="text-center mb-8">
						<img
							src="https://via.placeholder.com/100x100"
							className="size-[100px] mx-auto object-cover rounded-full mb-4"
							alt=""
						/>
						<h3 className="mb-1">{itemData.teacher_name}</h3>
						<div className="flex flex-col ">
							<small className="opacity-60  text-base">
								{itemData.teacher_class}
							</small>
							<small className="opacity-60 text-xs">
								{itemData.teacher_email}
							</small>
						</div>
						<ul className="flex gap-5 mt-5 justify-center">
							<li>
								<button data-tooltip="Account" className="tooltip text-2xl">
									<LiaKeySolid />
								</button>
							</li>
							<li>
								<button data-tooltip="Email" className="tooltip text-2xl">
									<LiaEnvelope />
								</button>
							</li>
						</ul>
					</div>
					<h4 className="mb-3">About</h4>
					<p className="text-xs">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
						obcaecati incidunt laboriosam repudiandae, accusantium ipsam!
					</p>
					<div className="grid grid-cols-2 gap-4 mt-8">
						<div className="info-box">
							<h4>Age</h4>
							<p className="text-xs">{itemData.teacher_age}</p>
						</div>
						<div className="info-box">
							<h4>Gender</h4>
							<p className="text-xs">{itemData.teacher_gender}</p>
						</div>
						<div className="info-box">
							<h4>Birthday</h4>
							<p className="text-xs">Febraury 31, 2000</p>
						</div>
						<div className="info-box">
							<h4>Address</h4>
							<p className="text-xs">
								Lorem ipsum dolor sit amet consectetur adipisicing.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TeacherInformation;
