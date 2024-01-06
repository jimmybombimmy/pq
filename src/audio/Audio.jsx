import "../styles/App.css";
import "../styles/Audio.css";
import booksArray from "../data/audio-data";

function Audio() {
  

  return (
    <main className="audioPageFull">
      <section className="audioContainer">
        <section className="audioSection">
          <div className="audioGridSection">
            <h1 className="audioTitle">audio editing</h1>
            <p className="audioInfo">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium obcaecati itaque deserunt sit asperiores quam iure
              earum iusto placeat possimus. Quae assumenda esse, eligendi quasi
              doloribus hic perspiciatis explicabo ipsa similique, qui
              architecto aliquam consequuntur nobis, a in quibusdam accusantium
              autem! Nam facere voluptatibus nostrum incidunt tempora ipsa
              impedit cumque.
            </p>
            {booksArray.map(function callback(value, index) {
              let leftOrRightCol = ''
              if (index % 2 === 0) {
                leftOrRightCol = "audioImgColRight"
              }

              return (
                <img
                  className={`audioImg audioImg${index} ${leftOrRightCol}`}
                  src={value.img}
                  key={value.name}
                ></img>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}

export default Audio;
