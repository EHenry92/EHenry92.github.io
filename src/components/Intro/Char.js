import React from "react";

const Char = ({ state, mask, hiddenValue, onChange, highlight, lowlight, isActive }) => {
  let maskCn = `${mask}letter cryptoLetter`;
  let hiddenCn = `${mask}spot cryptoReveal`;
  const isSolved = state === hiddenValue;
  if (isSolved) { maskCn += " solved";}
  if (isActive) { hiddenCn +=  " highlight-char-input";}

  return (
    <span className="crypto char">
      <div className={hiddenCn}>
        {isSolved ? (
          state
        ) : (
          <input
            name={mask}
            onChange={onChange}
            onMouseEnter={highlight}
            maxLength={1}
            onMouseLeave={lowlight}
            disabled={isSolved}
            value={state}
          />
        )}
      </div>
      <p className={maskCn}>{mask}</p>
    </span>
  );
};

export default Char;
