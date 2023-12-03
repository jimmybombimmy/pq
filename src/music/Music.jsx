import "../styles/App.css";

function Music() {



  return (
    <main className="musicSection">
      <section className="nihiloxicaSection">
        <p className="audioTitle">nihiloxica</p>
        <div className="nihiloxicaGridSection">
          <iframe className="ngImg1" src="https://bandcamp.com/EmbeddedPlayer/album=4073007018/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://nihiloxica.bandcamp.com/album/source-of-denial">Source of Denial by Nihiloxica</a></iframe>
          <iframe className="ngImg2" src="https://bandcamp.com/EmbeddedPlayer/album=2947440817/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://nihiloxica.bandcamp.com/album/kaloli">Kaloli by Nihiloxica</a></iframe>
          <iframe className="ngImg3"  src="https://bandcamp.com/EmbeddedPlayer/track=3789083620/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://nihiloxica.bandcamp.com/track/source-of-denial-single">Source of Denial (Single) by Nihiloxica</a></iframe>
          <iframe className="ngImg4" src="https://bandcamp.com/EmbeddedPlayer/album=2264294519/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://nyegenyegetapes.bandcamp.com/album/nihiloxica">Nihiloxica by Nihiloxica</a></iframe>
          <img className="ngImg5" src={`../img/nihiloxica-band1.png`}></img>
          <img className="ngImg6" src="https://f4.bcbits.com/img/0032921583_10.jpg"></img>
        </div>
        {/* <div className="nihiloxicaGridSection2">
          <img className="ngImg6" src="https://f4.bcbits.com/img/0032921583_10.jpg"></img>
        </div> */}
      </section>
      {/* <h1 className="jpClout">Made by James Peters is cool</h1> */}
    </main>
  );
}

export default Music;
