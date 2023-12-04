import "../styles/App.css";
import "../styles/Music.css";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";

function Music() {
  const [openPq, setOpenPq] = useState(false);
  const [openNih, setOpenNih] = useState(false);


  return (
    <main>
      <main className="musicContainer">
        <section className="musicSection">
          <p
            className="audioTitle"
            onClick={() => setOpenPq(!openPq)}
            aria-controls="example-collapse-text"
            aria-expanded={openPq}
          >
            pq <span className="plusMinus">{openPq ? "-" : "+"}</span>
          </p>
          <Collapse in={openPq}>
            <article class="audioInfoDropdown" id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </article>
          </Collapse>
          <div className="pqGridSection">
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
      <main className="musicContainer">
        <section className="musicSection">
          <p
            className="audioTitle"
            onClick={() => setOpenNih(!openNih)}
            aria-controls="example-collapse-text"
            aria-expanded={openNih}
          >
            nihiloxica <span>{openNih ? "-" : "+"}</span>
          </p>
          <Collapse in={openNih}>
            <article class="audioInfoDropdown" id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </article>
          </Collapse>
          <div className="nihiloxicaGridSection">
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
    </main>
  );
}

export default Music;
