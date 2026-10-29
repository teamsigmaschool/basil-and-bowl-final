import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <section className="row align-items-center g-5 home-hero">
        <div className="col-lg-6">
        <p className="eyebrow">SEASONAL KITCHEN · GOOD FOOD, GOOD COMPANY</p>
        <h1>Fresh ingredients.<br /><em>Happy plates.</em></h1>
        <p>
          Fresh, seasonal plates in the heart of downtown. Order at the
          counter, or grab a table and stay a while.
        </p>
        <button
          type="button"
          className="btn button"
          onClick={() => navigate("/menu")}
        >
          View Menu
        </button>
        <p className="hero-note">Made fresh. Served with a little love.</p>
        </div>
        <div className="col-lg-6">
          <figure className="hero-photo mb-0">
            <img src="/images/pesto-pasta.jpg" alt="Fresh green pesto pasta with tomatoes and basil" width="1100" height="825" />
            <figcaption>AT OUR TABLE <span>Fresh flavours, every day.</span></figcaption>
          </figure>
        </div>
      </section>

      <div className="cards">
        <div className="card">
          <h3>Open Tuesday to Sunday</h3>
          <p>11am to 9pm, Tuesday through Sunday.</p>
        </div>
        <div className="card">
          <h3>Local Ingredients</h3>
          <p>Produce sourced from the Saturday farmers market.</p>
        </div>
        <div className="card">
          <h3>Dine In or Takeout</h3>
          <p>Call ahead and we will have your bowl ready.</p>
        </div>
      </div>
    </div>
  );
}
