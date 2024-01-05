import "../styles/App.css";
import "../styles/Production.css";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

function Production() {
  const [openProdInfo, setOpenProdInfo] = useState(false);

  return (
    <main className="prodPageFull">
      <section>
        <h1
          className="prodTitle"
          onClick={() => setOpenProdInfo(!openProdInfo)}
          aria-controls="audioInfoDropdown"
          aria-expanded={openProdInfo}
        >
          recording <span className="h1Slash">/</span> mixing <span className="h1Slash">/</span> mastering{" "}
          <span className="plusMinus">{openProdInfo ? "-" : "+"}</span>
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
        <h2 className="prodSectionTitle">full production <span className="h2Slash">/</span> recording</h2>
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
                    <u>
                      <strong>source of denial</strong> by{" "}
                      <strong>nihiloxica</strong>
                    </u>
                  </p>
                  <p>
                    Produced by Spooky-J and pq at Nyege Nyege HQ in Kampala.
                  </p>
                  <p>Mixed by pq</p>
                  <p>Mastered by Arthur Rizk</p>
                  <p>
                    <a
                      className="cleanLink"
                      href="https://nihiloxica.bandcamp.com/album/source-of-denial"
                      target="_blank"
                    >
                      Click here to listen
                    </a>
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div flipbox className="flipbox">
            <div className="flipboxInner">
              <div className="flipboxFront"></div>
              <img
                className="flipboxFrontImg"
                src="https://f4.bcbits.com/img/a1332237328_16.jpg"
                alt=""
              />
              <div className="flipboxBack">
                <img
                  className="flipboxBackImg"
                  src="https://f4.bcbits.com/img/a1332237328_16.jpg"
                  alt=""
                />
                <article className="flipboxBackText whiteText">
                  <p>
                    <u>
                      <strong>Nakibembe Embaire Group</strong>
                    </u>
                  </p>
                  <p>
                    Track 2, 4, 5 & 7 Recorded by PQ, E.Motta & J. Maskell-Key.
                  </p>
                  <p>Mixed by PQ</p>
                  <p>
                    <a
                      className="cleanLink"
                      href="https://nyegenyegetapes.bandcamp.com/album/nakibembe-embaire-group"
                      target="_blank"
                    >
                      Click here to listen
                    </a>
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div flipbox className="flipbox">
            <div className="flipboxInner">
              <div className="flipboxFront"></div>
              <img
                className="flipboxFrontImg"
                src="https://f4.bcbits.com/img/a2515331861_16.jpg"
                alt=""
              />
              <div className="flipboxBack">
                <img
                  className="flipboxBackImg"
                  src="https://f4.bcbits.com/img/a2515331861_16.jpg"
                  alt=""
                />
                <article className="flipboxBackText whiteText">
                  <p>
                    <u>
                      <strong>Ejokawulida</strong> by{" "}
                      <strong>Nilotika Cultural Ensemble</strong>
                    </u>
                  </p>
                  <p>Mixed by pq</p>
                  <p>Mastered at Declared Sound</p>
                  <p>
                    <a
                      className="cleanLink"
                      href="https://nyegenyegetapes.bandcamp.com/album/ejokawulida"
                      target="_blank"
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
      <section className="mixingCont prodContainer">
        <h2 className="prodSectionTitle">mixing</h2>
        <div className="prodGridSection">
          <div flipbox className="flipbox">
            <div className="flipboxInner">
              <div className="flipboxFront"></div>
              <img
                className="flipboxFrontImg"
                src="https://f4.bcbits.com/img/a2723883060_16.jpg"
                alt=""
              />
              <div className="flipboxBack">
                <img
                  className="flipboxBackImg"
                  src="https://f4.bcbits.com/img/a2723883060_16.jpg"
                  alt=""
                />
                <article className="flipboxBackText whiteText">
                  <p>
                    <u>
                      <strong>blip007 repress</strong> by{" "}
                      <strong>Mubashira Mataali Group</strong>
                    </u>
                  </p>
                  <p>
                    Engineered by Jude from the National Theatre, Kampala and
                    Blip Discs
                  </p>
                  <p>Mixed by PQ</p>
                  <p>
                    <a
                      className="cleanLink"
                      href="https://blipdiscs.bandcamp.com/album/mubashira-mataali-group-repress-blip007"
                      target="_blank"
                    >
                      Click here to listen
                    </a>
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div flipbox className="flipbox">
            <div className="flipboxInner">
              <div className="flipboxFront"></div>
              <img
                className="flipboxFrontImg"
                src="https://f4.bcbits.com/img/a3339996242_16.jpg"
                alt=""
              />
              <div className="flipboxBack">
                <img
                  className="flipboxBackImg"
                  src="https://f4.bcbits.com/img/a3339996242_16.jpg"
                  alt=""
                />
                <article className="flipboxBackText whiteText">
                  <p>
                    <u>
                      <strong>Funktion Banned</strong> by{" "}
                      <strong>Hot in da club</strong>
                    </u>
                  </p>
                  <p>Mixed by PQ</p>
                  <p>Mastered by PQ</p>
                  <p>recorded in a hot club</p>
                  <p>
                    <a
                      className="cleanLink"
                      href="https://spookyshit.bandcamp.com/album/funktion-banned"
                      target="_blank"
                    >
                      Click here to listen
                    </a>
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div flipbox className="flipbox">
            <div className="flipboxInner">
              <div className="flipboxFront"></div>
              <img
                className="flipboxFrontImg"
                src="https://f4.bcbits.com/img/a0936869761_16.jpg"
                alt=""
              />
              <div className="flipboxBack">
                <img
                  className="flipboxBackImg"
                  src="https://f4.bcbits.com/img/a0936869761_16.jpg"
                  alt=""
                />
                <article className="flipboxBackText whiteText">
                  <p>
                    <u>
                      <strong>Avant-Harde</strong> by{" "}
                      <strong>Hot in da club</strong>
                    </u>
                  </p>
                  <p>Mixed by PQ</p>
                  <p>Mastered by PQ</p>
                  <p>recorded in a hot club</p>
                  <p>
                    <a
                      className="cleanLink"
                      href="https://spookyshit.bandcamp.com/album/avant-harde"
                      target="_blank"
                    >
                      Click here to listen
                    </a>
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div flipbox className="flipbox">
            <div className="flipboxInner">
              <div className="flipboxFront"></div>
              <img
                className="flipboxFrontImg"
                src="https://f4.bcbits.com/img/a1349111703_16.jpg"
                alt=""
              />
              <div className="flipboxBack">
                <img
                  className="flipboxBackImg"
                  src="https://f4.bcbits.com/img/a1349111703_16.jpg"
                  alt=""
                />
                <article className="flipboxBackText whiteText">
                  <p>
                    <u>
                      <strong>Mediokore</strong> by{" "}
                      <strong>Hot in da club</strong>
                    </u>
                  </p>
                  <p>Mixed by PQ</p>
                  <p>Mastered by PQ</p>
                  <p>recorded in a hot club</p>
                  <p>
                    <a
                      className="cleanLink"
                      href="https://spookyshit.bandcamp.com/album/mediokore"
                      target="_blank"
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
      <section className="masteringCont prodContainer">
        <h2 className="prodSectionTitle">mixing</h2>
        <div className="prodGridSection">
          <div flipbox className="flipbox">
            <div className="flipboxInner">
              <div className="flipboxFront"></div>
              <img
                className="flipboxFrontImg"
                src="https://f4.bcbits.com/img/a1496469512_16.jpg"
                alt=""
              />
              <div className="flipboxBack">
                <img
                  className="flipboxBackImg"
                  src="https://f4.bcbits.com/img/a1496469512_16.jpg"
                  alt=""
                />
                <article className="flipboxBackText whiteText">
                  <p>
                    <u>
                      <strong>Mass Deflate</strong> by{" "}
                      <strong>Spooky-J</strong>
                    </u>
                  </p>
                  <p>Mastered by PQ</p>
                  <p>
                    <a
                      className="cleanLink"
                      href="https://spookyshit.bandcamp.com/album/mass-deflate"
                      target="_blank"
                    >
                      Click here to listen
                    </a>
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div flipbox className="flipbox">
            <div className="flipboxInner">
              <div className="flipboxFront"></div>
              <img
                className="flipboxFrontImg"
                src="https://f4.bcbits.com/img/a0135970471_16.jpg"
                alt=""
              />
              <div className="flipboxBack">
                <img
                  className="flipboxBackImg"
                  src="https://f4.bcbits.com/img/a0135970471_16.jpg"
                  alt=""
                />
                <article className="flipboxBackText whiteText">
                  <p>
                    <u>
                      <strong>exhaust loop</strong> by{" "}
                      <strong>pq</strong>
                    </u>
                  </p>
                  <p>Mixed by PQ</p>
                  <p>Mastered by PQ</p>
                  <p>
                    <a
                      className="cleanLink"
                      href="https://spookyshit.bandcamp.com/album/exhaust-loop"
                      target="_blank"
                    >
                      Click here to listen
                    </a>
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div flipbox className="flipbox">
            <div className="flipboxInner">
              <div className="flipboxFront"></div>
              <img
                className="flipboxFrontImg"
                src="https://f4.bcbits.com/img/a0945105307_16.jpg"
                alt=""
              />
              <div className="flipboxBack">
                <img
                  className="flipboxBackImg"
                  src="https://f4.bcbits.com/img/a0945105307_16.jpg"
                  alt=""
                />
                <article className="flipboxBackText whiteText">
                  <p>
                    <u>
                      <strong>lost his shit</strong> by{" "}
                      <strong>ekhe</strong>
                    </u>
                  </p>
                  <p>Mastered by PQ</p>
                  <p>
                    <a
                      className="cleanLink"
                      href="https://open.spotify.com/album/2Z9uZ1jLTsWj1M5rKMHr1X"
                      target="_blank"
                    >
                      Click here to listen
                    </a>
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div flipbox className="flipbox">
            <div className="flipboxInner">
              <div className="flipboxFront"></div>
              <img
                className="flipboxFrontImg"
                src="https://i.scdn.co/image/ab67616d0000b273eaaea9ec1409d680e6cb97f2"
                alt=""
              />
              <div className="flipboxBack">
                <img
                  className="flipboxBackImg"
                  src="https://i.scdn.co/image/ab67616d0000b273eaaea9ec1409d680e6cb97f2"
                  alt=""
                />
                <article className="flipboxBackText whiteText">
                  <p>
                    <u>
                      <strong>Plucking the Moon from the Bottom of the Ocean</strong> by{" "}
                      <strong>Capua</strong>
                    </u>
                  </p>
                  <p>Mastered by PQ</p>
                  <p>
                    <a
                      className="cleanLink"
                      href="https://open.spotify.com/album/2Z9uZ1jLTsWj1M5rKMHr1X"
                      target="_blank"
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
