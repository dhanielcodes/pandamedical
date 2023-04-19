import React from 'react';

interface IProps {
  icon: string;
  resultTitle: string;
  result: string;
  symbol: string;
  className?: string;
}

const ResultCard = ({
  icon,
  resultTitle,
  result,
  symbol,
  className,
}: IProps) => (
  <div className={`ResultCard ${className}`}>
    <div className="ResultCard-content">
      <img src={icon} alt="resultTitle" className="ResultCard-icon" />
      <div>
        <p className="ResultCard-result">
          {result} {symbol}
        </p>
        <p className="ResultCard-title">{resultTitle}</p>
      </div>
    </div>
  </div>
);

ResultCard.defaultProps = {
  className: '',
};

export default ResultCard;
