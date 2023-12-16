import "../styles/App.css";
import "../styles/Audio.css";

function Audio() {
  const audioInfo = [
    {
      url: "https://www.fredsmithxmastrees.com/wp-content/uploads/2017/04/Square-500x500-dark-grey-300x300.png",
      size: [2, 2],
    },
    {
      url: "https://www.fredsmithxmastrees.com/wp-content/uploads/2017/04/Square-500x500-dark-grey-300x300.png",
    },
    {
      url: "https://www.fredsmithxmastrees.com/wp-content/uploads/2017/04/Square-500x500-dark-grey-300x300.png",
    },
    {
      url: "https://www.fredsmithxmastrees.com/wp-content/uploads/2017/04/Square-500x500-dark-grey-300x300.png",
    },
    {
      url: "https://www.fredsmithxmastrees.com/wp-content/uploads/2017/04/Square-500x500-dark-grey-300x300.png",
    },
    {
      url: "https://www.fredsmithxmastrees.com/wp-content/uploads/2017/04/Square-500x500-dark-grey-300x300.png",
    },
    {
      url: "https://www.fredsmithxmastrees.com/wp-content/uploads/2017/04/Square-500x500-dark-grey-300x300.png",
    },
    {
      url: "https://www.fredsmithxmastrees.com/wp-content/uploads/2017/04/Square-500x500-dark-grey-300x300.png",
    },
    {
      url: "https://www.fredsmithxmastrees.com/wp-content/uploads/2017/04/Square-500x500-dark-grey-300x300.png",
    },
    {
      url: "https://www.fredsmithxmastrees.com/wp-content/uploads/2017/04/Square-500x500-dark-grey-300x300.png",
    },
    {
      url: "https://www.fredsmithxmastrees.com/wp-content/uploads/2017/04/Square-500x500-dark-grey-300x300.png",
    },
    {
      url: "https://www.fredsmithxmastrees.com/wp-content/uploads/2017/04/Square-500x500-dark-grey-300x300.png",
    },
    {
      url: "https://www.fredsmithxmastrees.com/wp-content/uploads/2017/04/Square-500x500-dark-grey-300x300.png",
    },
    {
      url: "https://www.fredsmithxmastrees.com/wp-content/uploads/2017/04/Square-500x500-dark-grey-300x300.png",
    },
  ];

  return (
    <main className="audioPageFull">
      <section className="audioContainer">
        <section className="audioSection">
          <div className="audioGridSection">
            <h1 className="audioTitle">audio editing / dialogue</h1>
            <p className="audioInfo">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium obcaecati itaque deserunt sit asperiores quam iure
              earum iusto placeat possimus. Quae assumenda esse, eligendi quasi
              doloribus hic perspiciatis explicabo ipsa similique, qui
              architecto aliquam consequuntur nobis, a in quibusdam accusantium
              autem! Nam facere voluptatibus nostrum incidunt tempora ipsa
              impedit cumque.
            </p>
            <img
              className="audioImg audioImgLarge"
              src="https://www.fredsmithxmastrees.com/wp-content/uploads/2017/04/Square-500x500-dark-grey-300x300.png"
              key="audioImgLarge"
            ></img>
            {audioInfo.map(function callback(value, index) {
              return (
                <img
                  className={`audioImg audioImg${index + 1}`}
                  src={value.url}
                  key={`audioImg${index + 1}`}
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
