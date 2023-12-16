import "../styles/App.css";
import "../styles/Music.css";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";

function Music() {
  const [openPq, setOpenPq] = useState(false);
  const [openNih, setOpenNih] = useState(false);
  const [openHidc, setOpenHidc] = useState(false);

  return (
    <main className="musicPageFull">
      <main className="pqCont musicContainer">
        <section className="musicSection">
          <div className="pqGridSection">
            <p
              className="musicTitle"
              onClick={() => setOpenPq(!openPq)}
              aria-controls="musicInfoDropdown"
              aria-expanded={openPq}
            >
              pq <span className="plusMinus">{openPq ? "-" : "+"}</span>
            </p>
            <Collapse in={openPq}>
              <article className="musicInfoDropdown" id="example-collapse-text">
              this is what i make when left to my own devices. i make a range of stuff from all-out club bangers to ambient to beats for mcs. i have releases on lapsus records, adepta editions, spooky shit, hakuna kulala and more. this section is for full eps etc. remixes and singles i’ll list further down.
              </article>
            </Collapse>
            <iframe
              className="musImg pqImg1"
              src="https://bandcamp.com/EmbeddedPlayer/album=3375579364/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
              seamless
            >
              <a href="https://adepta.bandcamp.com/album/pq-ae-o9">
                pq | AE​​​​​​​–​​​​​​​O9 by pq
              </a>
            </iframe>
            <iframe
              className="musImg pqImg2"
              src="https://bandcamp.com/EmbeddedPlayer/album=3066463243/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
              seamless
            >
              <a href="https://spookyshit.bandcamp.com/album/exhaust-loop">
                exhaust loop by pq
              </a>
            </iframe>
            <iframe
              className="musImg pqImg3"
              src="https://bandcamp.com/EmbeddedPlayer/album=4247103883/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
              seamless
            >
              <a href="https://pqjonez.bandcamp.com/album/proprioception">
                proprioception by pq
              </a>
            </iframe>
            <img
              className="musImg pqImg4"
              src={`../../img/pq-face-1.png`}
            ></img>
            <iframe
              className="musImg pqImg5"
              src="https://bandcamp.com/EmbeddedPlayer/album=4092834498/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
              seamless
            >
              <a href="https://pqjonez.bandcamp.com/album/slime-line">
                slime line by pq
              </a>
            </iframe>
            <iframe
              className="musImg pqImg6"
              src="https://bandcamp.com/EmbeddedPlayer/album=3425887760/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://spookyshit.bandcamp.com/album/ball-trip">
                ball trip by pq
              </a>
            </iframe>
            <iframe
              className="musImg pqImg7"
              src="https://bandcamp.com/EmbeddedPlayer/album=2606730203/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
              seamless
            >
              <a href="https://hakunakulala.bandcamp.com/album/kyusa-embela">
                Kyusa Embela by Ecko Bazz
              </a>
            </iframe>
            <iframe
              className="musImg pqImg8"
              src="https://bandcamp.com/EmbeddedPlayer/album=256414650/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
              seamless
            >
              <a href="https://hakunakulala.bandcamp.com/album/tuli-banyo">
                Tuli Banyo by Ecko Bazz feat Biga Yut
              </a>
            </iframe>
          </div>
        </section>
      </main>
      <main className="nihCont musicContainer">
        <section className="musicSection">
          <div className="nihiloxicaGridSection">
            <p
              className="musicTitle"
              onClick={() => setOpenNih(!openNih)}
              aria-controls="musicInfoDropDown"
              aria-expanded={openNih}
            >
              nihiloxica <span className="plusMinus">{openNih ? "-" : "+"}</span>
            </p>
            <Collapse in={openNih}>
              <article className="musicInfoDropdown" id="example-collapse-text">
              a project i started with spooky-j in 2017 in kampala which is still going to this day. we combine western modern dance music traditions with the drumming and dance traditions of buganda, the central kingdom of uganda. i play synth, everyone else plays drums.
              </article>
            </Collapse>
            <iframe
              className="musImg nihImg1"
              src="https://bandcamp.com/EmbeddedPlayer/album=4073007018/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
              seamless
            >
              <a href="https://nihiloxica.bandcamp.com/album/source-of-denial">
                Source of Denial by Nihiloxica
              </a>
            </iframe>
            <iframe
              className="musImg nihImg2"
              src="https://bandcamp.com/EmbeddedPlayer/album=2947440817/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
              seamless
            >
              <a href="https://nihiloxica.bandcamp.com/album/kaloli">
                Kaloli by Nihiloxica
              </a>
            </iframe>
            <iframe
              className="musImg nihImg3"
              src="https://bandcamp.com/EmbeddedPlayer/album=903853301/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
              seamless
            >
              <a href="https://nyegenyegetapes.bandcamp.com/album/biiri">
                Biiri by Nihiloxica
              </a>
            </iframe>
            <iframe
              className="musImg nihImg4"
              src="https://bandcamp.com/EmbeddedPlayer/album=2264294519/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
              seamless
            >
              <a href="https://nyegenyegetapes.bandcamp.com/album/nihiloxica">
                Nihiloxica by Nihiloxica
              </a>
            </iframe>
            <img
              className="musImg nihImg5"
              src="../img/nihiloxica-band1.png"
            ></img>
          </div>
        </section>
      </main>
      <main className="hidcCont musicContainer">
        <section className="musicSection">
          <div className="hidcGridSection">
            <p
              className="musicTitle"
              onClick={() => setOpenHidc(!openHidc)}
              aria-controls="musicInfoDropDown"
              aria-expanded={openHidc}
            >
              hot in da club <span className="plusMinus">{openHidc ? "-" : "+"}</span>
            </p>
            <Collapse in={openHidc}>
              <article className="musicInfoDropdown" id="example-collapse-text">
              a live hardware improv trio consisting of me, ekhe and spooky-j. we describe ourselves as hardcore technopunks. we basically improvise silly and hard dance music and record the results. we also do this in front of live crowds. laughing while dancing is the ultimate goal.
              </article>
            </Collapse>
            <iframe
              className="musImg hidcImg1"
              src="https://bandcamp.com/EmbeddedPlayer/album=792558584/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://spookyshit.bandcamp.com/album/funktion-banned">
                Funktion Banned by Spooky Shit
              </a>
            </iframe>
            <iframe
              className="musImg hidcImg2"
              src="https://bandcamp.com/EmbeddedPlayer/album=2245484736/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
              seamless
            >
              <a href="https://spookyshit.bandcamp.com/album/avant-harde">
                Avant-Harde by Hot In Da Club
              </a>
            </iframe>
            <iframe
              className="musImg hidcImg3"
              src="https://bandcamp.com/EmbeddedPlayer/album=3560401244/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
              seamless
            >
              <a href="https://spookyshit.bandcamp.com/album/mediokore">
                Mediokore by Hot In Da Club
              </a>
            </iframe>
          </div>
        </section>
      </main>
      <main className="collabsCont musicContainer">
        <section className="musicSection">
          <div className="collabsGridSection">
            <p className="musicTitle">collabs</p>
            <iframe className="musImg collabsImg1" src="https://bandcamp.com/EmbeddedPlayer/album=22457107/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://opaltapes.com/album/not-in-da-club">Not In Da Club by Not In Da Club</a></iframe>
          </div>
        </section>
      </main>
      <main className="remixCont musicContainer">
        <section className="musicSection">
          <div className="remixGridSection">
            <p className="musicTitle">remixes</p>
            <iframe className="musImg remixImg1" src="https://bandcamp.com/EmbeddedPlayer/album=4195060404/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=1944329998/transparent=true/" seamless><a href="https://nyegenyegetapes.bandcamp.com/album/ekuka">Ekuka by pq</a></iframe>
            <iframe className="musImg remixImg2" src="https://bandcamp.com/EmbeddedPlayer/album=4202699141/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=852843746/transparent=true/" seamless><a href="https://nihiloxica.bandcamp.com/album/kaloli-recycled">Kaloli Recycled by Nihiloxica</a></iframe>
          </div>
        </section>
      </main>
    </main>
  );
}

export default Music;
