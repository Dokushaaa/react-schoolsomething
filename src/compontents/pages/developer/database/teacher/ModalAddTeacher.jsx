import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import ModalWrapper from "../../../../partials/modals/ModalWrapper";
import SpinnerButton from "../../../../partials/spinners/SpinnerButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../helpers/queryData";
import { InputSelect, InputText } from "../../../../helpers/FormInputs";
import { Form, Formik } from "formik";
// checks if input is valid
import { object, string, number } from "yup";
import { StoreContext } from "../../../../../store/StoreContext";
import {
	setIsAdd,
	setMessage,
	setSuccess,
} from "../../../../../store/StoreAction";

const ModalAddTeacher = ({ itemEdit }) => {
	const { dispatch, store } = React.useContext(StoreContext);
	const handleClose = () => {
		dispatch(setIsAdd(false));
		console.log(store.setIsAdd);
	};
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: (values) =>
			queryData(
				itemEdit ? `/v1/teacher/${itemEdit.teacher_aid}` : `/v1/teacher`,
				itemEdit ? "put" : "post",
				// `/v1/teacher`,
				// `post`,
				values
			),
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["teacher"] });
			if (data.success) {
				dispatch(setIsAdd(false));
				dispatch(setSuccess(true));
				dispatch(setMessage(`Successfuly updated.`));
			} else {
				setIsError(true);
				dispatch(setMessage(`Failed updating database.`));
			}
		},
	});

	const initVal = {
		teacher_name: itemEdit ? itemEdit.teacher_name : "",
		teacher_class: itemEdit ? itemEdit.teacher_class : "",
		teacher_age: itemEdit ? itemEdit.teacher_age : "",
		teacher_gender: itemEdit ? itemEdit.teacher_gender : "",
		teacher_email: itemEdit ? itemEdit.teacher_email : "",
	};
	const yupSchema = object({
		teacher_name: string().required("Name Required*"),
		teacher_class: string().required("Class Required*"),
		teacher_gender: string().required("Gender Required*"),
		teacher_age: number().required("Age Required*"),
		teacher_email: string().required("Email Required*").email("Invalid Email"),
	});
	return (
		<>
			<ModalWrapper>
				<div className="main-modal w-[300px] bg-primary text-content h-full">
					<div className="modal-header p-4 relative">
						<h2>New Teacher</h2>
						<button
							className="absolute top-[25px] right-4"
							// onClick={handleAddteacher}
							onClick={handleClose}>
							<LiaTimesSolid />
						</button>
					</div>
					<div className="modal-body p-4">
						<Formik
							initialValues={initVal}
							validationSchema={yupSchema}
							onSubmit={async (values) => {
								mutation.mutate(values);
							}}>
							<Form action="" className="flex flex-col h-[calc(100vh-110px)]">
								<div className="grow overflow-y-auto">
									<div className="input-wrap">
										<InputText label="Name" type="text" name="teacher_name" />
									</div>
									<div className="input-wrap">
										<InputText label="Class" type="text" name="teacher_class" />
									</div>

									<div className="input-wrap">
										<InputSelect label="Select Gender" name="teacher_gender">
											<option value="" hidden>
												Select
											</option>
											<option value="Female">Female</option>
											<option value="Male">Male</option>
											<option value="Other">Other</option>
											<option value="Rather Not Disclose">
												Rather Not Disclose
											</option>
										</InputSelect>
									</div>
									<div className="input-wrap">
										<InputText label="Email" type="text" name="teacher_email" />
									</div>
									<div className="input-wrap">
										<InputText label="Age" type="text" name="teacher_age" />
									</div>
								</div>
								<div className="form-action">
									<button className="btn btn-form btn--accent" type="submit">
										{mutation.isPending ? <SpinnerButton /> : "Add"}
									</button>
									<button
										className="btn btn-form btn--cancel"
										type="button"
										onClick={handleClose}>
										Cancel
									</button>
								</div>
							</Form>
						</Formik>
					</div>
				</div>
			</ModalWrapper>
		</>
	);
};

export default ModalAddTeacher;
