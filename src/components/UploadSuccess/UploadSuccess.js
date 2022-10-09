import "./UploadSuccess.scss"

export default function UploadSuccess(props) {
    return (
        <div className={props.successModal}>
            <h2 className="success__text">Uploaded Successfully</h2>
        </div>
    )
}