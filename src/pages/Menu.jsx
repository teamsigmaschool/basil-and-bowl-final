import { MENU_ITEMS } from "../data/menuItems";

export default function Menu() {
  const categories = [...new Set(MENU_ITEMS.map((item) => item.category))];

  return (
    <div className="page">
      <div className="hero">
        <p className="eyebrow">A LITTLE SOMETHING FOR EVERY APPETITE</p>
        <h1>Our Menu</h1>
        <p>Everything is made fresh in-house, every day.</p>
      </div>

      {MENU_ITEMS.length === 0 ? (
        <div className="menu-empty">
          <h2>Our menu is getting ready</h2>
          <p>Check back soon for something delicious.</p>
        </div>
      ) : (
        categories.map((category) => (
          <section className="menu-category" key={category}>
            <h2>{category}</h2>
            <div className="row g-4">
            {MENU_ITEMS.filter((item) => item.category === category).map(
              (item) => (
                <div className="col-md-6" key={item.id}>
                <article className="card menu-item h-100">
                  <div className="d-flex justify-content-between gap-3 align-items-start">
                  <h3>{item.name}</h3>
                  <span className="price badge rounded-pill">{item.price}</span>
                  </div>
                  <p>{item.description}</p>
                </article>
                </div>
              ),
            )}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
