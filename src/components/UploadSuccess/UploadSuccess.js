import "./UploadSuccess.scss";

export default function UploadSuccess({ successModal, successContainer }) {
  return (
    <div className={successContainer}>
      <div className={successModal}>
        <h2 className='success__text'>Uploaded Successfully</h2>
      </div>
    </div>
  );
}
