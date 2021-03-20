import "./PageNotFound.css";

function PageNotFound() {
  return (
      <article className="page-not-found">
           <img src={process.env.PUBLIC_URL + '/page-not-found.png'} alt="Error 404: Page Not Found" />
      </article>
  );
}

export default PageNotFound;