import natureImage from './../assets/nature.jpg';
import towerImage from './../assets/tower.jpg';
import beachImage from './../assets/beach.jpg';

import slidesImage from './../assets/slides.jpg';
import campingImage from './../assets/camping.jpg';

export default function ActivityPage() {
  return (
    <main className="page-content">
      <aside className="page-gallery">
        <header>
          <h3>Galleria</h3>
        </header>
        <div className="image-container">
          <img alt="naturen" src={natureImage} />
          <img alt="vattentorn" src={towerImage} />
          <img alt="stranden" src={beachImage} />
        </div>
      </aside>

      <section className="activity-content">
        <header className="main-header">
          <h2>Roliga aktiviteter i Nicksta</h2>
        </header>

        <article>
          <figure className="activity-figure">
            <img alt="Ruschkanor" src={slidesImage} />
            <figcaption>Ruschkanor</figcaption>
          </figure>
          <header>
            <h3 className="activity-header">Vatten ruschkanor</h3>
          </header>
          <p className="activity-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate omnis fuga, neque, laborum magnam itaque repellat officiis repudiandae possimus voluptates nulla? Voluptatibus maxime laboriosam est, quae quos exercitationem, vitae quidem facilis itaque quisquam esse mollitia perferendis? Sapiente, beatae exercitationem!
          </p>
        </article>

        <article>
          <figure className="activity-figure">
            <img alt="Camping" src={campingImage} />
            <figcaption>Camping</figcaption>
          </figure>
          <header>
            <h3 className="activity-header">Camping plats</h3>
          </header>
          <p className="activity-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam cumque quibusdam ea eos. Obcaecati eligendi, quibusdam explicabo eaque autem, incidunt, delectus fugit repudiandae temporibus modi harum magni maxime ad molestias! Commodi sapiente velit vitae minima? Laborum reprehenderit iure blanditiis assumenda?
          </p>
        </article>
      </section>
    </main>
  )
}