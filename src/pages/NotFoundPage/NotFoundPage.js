import Header from "../../components/Header/Header";
import "./NotFoundPage.scss";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <div className='notfound__container'>
        <div class='notfound'>
          <h1>404</h1>
          <h2>There hasn't been a page here in over 70 years...</h2>
        </div>
      </div>
    </>
  );
}
