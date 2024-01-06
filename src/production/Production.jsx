import "../styles/App.css";
import "../styles/Production.css";
import { productionData } from "../data/production-data";

function Production() {
  
  return (
    <>
      <main className="prodPageFull">
        {productionData.map((group) => {
          return (
            <section className="recCont prodContainer">
              <h2 className="prodSectionTitle">{group.section}</h2>
              <div className="prodGridSection">
                {group.releases.map((release) => {
                  return (
                    <div flipbox className="flipbox">
                      <div className="flipboxInner">
                        <div className="flipboxFront"></div>
                        <img
                          className="flipboxFrontImg"
                          src={release.img}
                          alt=""
                        />
                        <div className="flipboxBack">
                          <img
                            className="flipboxBackImg"
                            src={release.img}
                            alt=""
                          />
                          <article className="flipboxBackText whiteText">
                            <p className="flipboxBackTitle">
                              <u>
                                <strong>{release.releaseName}</strong> by{" "}
                                <strong>{release.artistName}</strong>
                              </u>
                            </p>
                            <p>{release.desc}</p>
                            <p>
                              <a
                                className="cleanLink"
                                href={release.link}
                                target="_blank"
                              >
                                Click here to listen
                              </a>
                            </p>
                          </article>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}

export default Production;
