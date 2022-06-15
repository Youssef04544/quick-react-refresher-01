import { useState } from "react";

const Tour = ({ city, img, name, info, handleRemove }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='tour'>
      <div className='img-container'>
        <img src={img} alt={name} />
        <span className='close-btn' onClick={handleRemove}>
          <i className='fas fa-window-close'></i>
        </span>
      </div>
      <div className='tour-info'>
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{" "}
          <span onClick={() => setShowInfo(!showInfo)}>
            {!showInfo && <i className='fas fa-caret-square-down' />}
            {showInfo && <i className='fas fa-caret-square-up' />}
          </span>
        </h5>
        {showInfo && <p>{info}</p>}
      </div>
    </article>
  );
};

export default Tour;
