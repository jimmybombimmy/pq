import "../styles/App.css";
import "../styles/Production.css";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

function Production() {
  const [openProdInfo, setOpenProdInfo] = useState(false);

  return (
    <main className="prodPageFull">
      <p
        className="prodTitle"
        onClick={() => setOpenProdInfo(!openProdInfo)}
        aria-controls="audioInfoDropdown"
        aria-expanded={openProdInfo}
      >
        recording / mixing / mastering <span className="plusMinus">{openProdInfo ? "-" : "+"}</span>
      </p>
      <Collapse in={openProdInfo}>
        <article className="prodInfoDropdown">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, doloribus unde mollitia saepe harum nam, corrupti pariatur deserunt voluptate dignissimos ad! Dolor, ipsa quam ratione quis reiciendis qui porro maiores labore saepe, aut itaque! Omnis, iste! Blanditiis, maxime labore similique atque incidunt quae fugit voluptate recusandae nemo quam assumenda quos maiores perferendis enim magni. Ducimus, alias culpa eaque minima consequuntur reprehenderit repellat labore soluta omnis cum, excepturi nulla ad veniam? Numquam iste excepturi tempora dolorem sit voluptatibus, quis, quos repudiandae inventore maiores earum eum consectetur amet mollitia necessitatibus ea iusto incidunt molestiae aliquid omnis praesentium repellat pariatur. Iste, est unde.
        </article>
      </Collapse>
      <main className="recCont prodContainer">
        <section className="prodSection"></section>
      </main>
    </main>
  );
}

export default Production;
