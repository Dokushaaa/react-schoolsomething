import { useField } from "formik"

export const InputText = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return(
        <>
            <div className="input-wrap">
            <label htmlFor={props.id || props.name}
            className={meta.touched && meta.error ? "error-msg" : ""}
            >{label}</label>
            <input 
            {...field}{...props} className={meta.touched && meta.error ? "error-msg" : ""}
            autoComplete="off"
            />
            {meta.touched && meta.error ? (<small className='error-msg'>{meta.error}</small>) : ""}
            
            </div>
        </>
    )
}

{/* <div className="input-wrap">
<label htmlFor="">Name</label>
<input type="text" />
<small className='error-msg'>Required*</small>
</div> */}