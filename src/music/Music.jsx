import "../styles/App.css";
import "../styles/Music.css";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";

import {
  nihiloxicaReleases,
  pqReleases,
  hidcReleases,
} from "../data/music-data";

function Music() {
  const [openPq, setOpenPq] = useState(false);
  const [openNih, setOpenNih] = useState(false);
  const [openHidc, setOpenHidc] = useState(false);

  return (
    <main className="musicPageFull">
      <main className="pqCont musicContainer">
        <section className="musicSection">
          <div className="pqGridSection">
            <h2
              className="musicTitle"
              onClick={() => setOpenPq(!openPq)}
              aria-controls="musicInfoDropdown"
              aria-expanded={openPq}
            >
              pq <span className="plusMinus">{openPq ? "-" : "+"}</span>
            </h2>
            <Collapse in={openPq}>
              <article className="musicInfoDropdown" id="example-collapse-text">
                this is what i make when left to my own devices. i make a range
                of stuff from all-out club bangers to ambient to beats for mcs.
                i have releases on lapsus records, adepta editions, spooky shit,
                hakuna kulala and more. this section is for full eps etc.
                remixes and singles i’ll list further down.
              </article>
            </Collapse>
            {pqReleases.map((release, index) => {
              return (
                <>
                  {release.title === "IMG_ONLY" ? (
                    <img
                      src={release.import}
                      className={`musImg pqImg${index + 1}`}
                    />
                  ) : (
                    <iframe
                      className={`musImg pqImg${index + 1}`}
                      src={release.import}
                      seamless
                    >
                      <a href={release.link}>{release.title}</a>
                    </iframe>
                  )}
                </>
              );
            })}
          </div>
        </section>
      </main>
      <main className="nihCont musicContainer">
        <section className="musicSection">
          <div className="nihiloxicaGridSection">
            <h2
              className="musicTitle"
              onClick={() => setOpenNih(!openNih)}
              aria-controls="musicInfoDropDown"
              aria-expanded={openNih}
            >
              nihiloxica{" "}
              <span className="plusMinus">{openNih ? "-" : "+"}</span>
            </h2>
            <Collapse in={openNih}>
              <article className="musicInfoDropdown" id="example-collapse-text">
                a project i started with spooky-j in 2017 in kampala which is
                still going to this day. we combine western modern dance music
                traditions with the drumming and dance traditions of buganda,
                the central kingdom of uganda. i play synth, everyone else plays
                drums.
              </article>
            </Collapse>
            {nihiloxicaReleases.map((release, index) => {
              return (
                <>
                  {release.title === "IMG_ONLY" ? (
                    <img
                      src={release.import}
                      className={`musImg nihImg${index + 1}`}
                    />
                  ) : (
                    <iframe
                      className={`musImg nihImg${index + 1}`}
                      src={release.import}
                      seamless
                    >
                      <a href={release.link}>{release.title}</a>
                    </iframe>
                  )}
                </>
              );
            })}
          </div>
        </section>
      </main>
      <main className="hidcCont musicContainer">
        <section className="musicSection">
          <div className="hidcGridSection">
            <h2
              className="musicTitle"
              onClick={() => setOpenHidc(!openHidc)}
              aria-controls="musicInfoDropDown"
              aria-expanded={openHidc}
            >
              hot in da club{" "}
              <span className="plusMinus">{openHidc ? "-" : "+"}</span>
            </h2>
            <Collapse in={openHidc}>
              <article className="musicInfoDropdown" id="example-collapse-text">
                a live hardware improv trio consisting of me, ekhe and spooky-j.
                we describe ourselves as hardcore technopunks. we basically
                improvise silly and hard dance music and record the results. we
                also do this in front of live crowds. laughing while dancing is
                the ultimate goal.
              </article>
            </Collapse>

            {hidcReleases.map((release, index) => {
              return (
                <iframe
                  className={`musImg hidcImg${index + 1}`}
                  src={release.import}
                  seamless
                >
                  <a href={release.link}>{release.title}</a>
                </iframe>
              );
            })}
          </div>
        </section>
      </main>
      <main className="collabsCont musicContainer">
        <section className="musicSection">
          <div className="collabsGridSection">
            <h2 className="musicTitle">collabs</h2>
            <iframe
              className="musImg collabsImg1"
              src="https://bandcamp.com/EmbeddedPlayer/album=22457107/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://opaltapes.com/album/not-in-da-club">
                Not In Da Club by Not In Da Club
              </a>
            </iframe>
          </div>
        </section>
      </main>
      <main className="remixCont musicContainer">
        <section className="musicSection">
          <div className="remixGridSection">
            <h2 className="musicTitle">remixes</h2>
            <iframe
              className="musImg remixImg1"
              src="https://bandcamp.com/EmbeddedPlayer/album=4195060404/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=1944329998/transparent=true/"
              seamless
            >
              <a href="https://nyegenyegetapes.bandcamp.com/album/ekuka">
                Ekuka by pq
              </a>
            </iframe>
            <iframe
              className="musImg remixImg2"
              src="https://bandcamp.com/EmbeddedPlayer/album=4202699141/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=852843746/transparent=true/"
              seamless
            >
              <a href="https://nihiloxica.bandcamp.com/album/kaloli-recycled">
                Kaloli Recycled by Nihiloxica
              </a>
            </iframe>
          </div>
        </section>
      </main>
    </main>
  );
}

export default Music;
