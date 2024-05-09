import React from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import ModalWrapper from "../../../../partials/modals/ModalWrapper";
import SpinnerButton from "../../../../partials/spinners/SpinnerButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../helpers/queryData";
import { InputSelect, InputText } from "../../../../helpers/FormInputs";
import { Form, Formik } from "formik";
import { object, string, number } from "yup";

const ModalAddStaff = ({ setIsAdd, setMessage, setIsSuccess, itemEdit, setIsError }) => {
    // const ModalAddStaff = ({ setAddstaff, showAddstaff }) => {
    // const handleAddstaff = () => setAddstaff(!showAddstaff);
  
    const handleClose = () => setIsAdd(false);
  
    const queryClient = useQueryClient();
    const mutation = useMutation({
      mutationFn: (values) =>
        queryData(
          itemEdit ? `/v1/staff/${itemEdit.staff_aid}` : `/v1/staff`,
          itemEdit ? "put" : "post",
          // `/v1/staff`,
          // `post`,
          values
        ),
      // ;
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["staff"] });
        if (data.success) {
          setIsAdd(false);
          setIsSuccess(true);
          setMessage(`Successfuly updated.`);
        } else {
          setIsError(true);
          setMessage(`Failed updating database.`);
        }
      },
    });
  
    const initVal = {
      staff_name: itemEdit ? itemEdit.staff_name : "",
      staff_class: itemEdit ? itemEdit.staff_class : "",
      staff_age: itemEdit ? itemEdit.staff_age : "",
      staff_gender: itemEdit ? itemEdit.staff_gender : "",
      staff_email: itemEdit ? itemEdit.staff_email : "",
    };
    const yupSchema = object({
      staff_name: string().required("Name Required*"),
      staff_class: string().required("Class Required*"),
      staff_gender: string().required("Gender Required*"),
      staff_age: number().required("Age Required*"),
      staff_email: string().required("Email Required*").email("Invalid Email"),
    });
  
    return (
      <ModalWrapper>
        <div className="main-modal w-[300px] bg-primary text-content h-full">
          <div className="modal-header p-4 relative">
            <h2>New staff</h2>
            <button
              className="absolute top-[25px] right-4"
              // onClick={handleAddstaff}
              onClick={handleClose}
            >
              <LiaTimesSolid />
            </button>
          </div>
          <div className="modal-body p-4">
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values) => {
                mutation.mutate(values);
              }}
            >
              <Form action="" className="flex flex-col h-[calc(100vh-110px)]">
                <div className="grow overflow-y-auto">
                  <div className="input-wrap">
                    <InputText label="Name" type="text" name="staff_name" />
                  </div>
                  <div className="input-wrap">
                    <InputText label="Class" type="text" name="staff_class" />
                  </div>
                  <div className="input-wrap">
              <InputSelect label="Select Gender" name="staff_gender">
                  <option value="" hidden>Select</option>
                  <option value="transformers">Transformers</option>
                  <option value="bicycle">Bicycle</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
              </InputSelect>
                </div>
                  <div className="input-wrap">
                    <InputText label="Email" type="text" name="staff_email" />
                  </div>
                  <div className="input-wrap">
                    <InputText label="Age" type="text" name="staff_age" />
                  </div>
                </div>
                <div className="form-action">
                <button className="btn btn-form btn--accent" type="submit">
                  {mutation.isPending ? <SpinnerButton /> : "Add"}
                </button>
                  <button
                    className="btn btn-form btn--cancel"
                    type="button"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </ModalWrapper>
    );
  };

export default ModalAddStaff