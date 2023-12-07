import "../styles/App.css";
import "../styles/Production.css";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

function Production() {
  const [openProdInfo, setOpenProdInfo] = useState(true);

  return (
    <main className="prodPageFull">
      <section>
        <h1
          className="prodTitle"
          onClick={() => setOpenProdInfo(!openProdInfo)}
          aria-controls="audioInfoDropdown"
          aria-expanded={openProdInfo}
        >
          recording / mixing / mastering{" "}
          <span className="plusMinus">{openProdInfo ? "+" : "-"}</span>
        </h1>
        <Collapse in={openProdInfo}>
          <article className="prodInfoDropdown">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
            doloribus unde mollitia saepe harum nam, corrupti pariatur deserunt
            voluptate dignissimos ad! Dolor, ipsa quam ratione quis reiciendis
            qui porro maiores labore saepe, aut itaque! Omnis, iste! Blanditiis,
            maxime labore similique atque incidunt quae fugit voluptate
            recusandae nemo quam assumenda quos maiores perferendis enim magni.
            Ducimus, alias culpa eaque minima consequuntur reprehenderit
            repellat labore soluta omnis cum, excepturi nulla ad veniam? Numquam
            iste excepturi tempora dolorem sit voluptatibus, quis, quos
            repudiandae inventore maiores earum eum consectetur amet mollitia
            necessitatibus ea iusto incidunt molestiae aliquid omnis praesentium
            repellat pariatur. Iste, est unde.
          </article>
        </Collapse>
      </section>
      <section className="recCont prodContainer">
        <h2 className="prodSectionTitle">full production / recording</h2>
        <div className="prodGridSection">
          <div flipbox className="flipbox">
            <div className="flipboxInner">
              <div className="flipboxFront"></div>
              <img
                className="flipboxFrontImg"
                src="https://f4.bcbits.com/img/a3719623315_16.jpg"
                alt=""
              />
              <div className="flipboxBack">
                <img
                  className="flipboxBackImg"
                  src="https://f4.bcbits.com/img/a3719623315_16.jpg"
                  alt=""
                />
                <article className="flipboxBackText whiteText">
                  <p>
                    Produced by Spooky-J and pq at Nyege Nyege HQ in Kampala.
                  </p>
                  <p>Mixed by pq</p>
                  <p>Mastered by Arthur Rizk</p>
                  <p>Artwork by Vicky de Visser</p>
                  <p>
                    <a
                      className="cleanLink"
                      href="https://nihiloxica.bandcamp.com/album/source-of-denial"
                    >
                      Click here to listen
                    </a>
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Production;
