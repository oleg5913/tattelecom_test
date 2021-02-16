import './FormsControl.css'

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={"formControl"}>
            { hasError && <span>{meta.error}</span>}
            <textarea type={props.type} {...input} {...props}></textarea>
        </div>
    )
}