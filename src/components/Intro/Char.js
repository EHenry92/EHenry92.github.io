import React from "react";

const Char = ({
  state,
  mask,
  hiddenValue,
  onChange,
  highlight,
  lowlight,
  isActive
}) => {
  const isSolved = state === hiddenValue;
  let maskCn = `${mask}letter cryptoLetter ${isSolved && 'solved'}`;
  let hiddenCn = `${mask}spot cryptoReveal ${isActive && 'highlight-char-input'}`;
  return (
    <span className="crypto char">
      <div className={hiddenCn}>
        {isSolved
        ? state
        : <input
            name={mask}
            onChange={onChange}
            onMouseEnter={highlight}
            maxLength={1}
            onMouseLeave={lowlight}
            disabled={isSolved}
            value={state}
          />
        }
      </div>
      <p className={maskCn}>{mask}</p>
    </span>
  );
};

export default Char;
