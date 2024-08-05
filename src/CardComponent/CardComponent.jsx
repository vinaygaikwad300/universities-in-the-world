import * as React from 'react';
import PropTypes from 'prop-types';

const CardComponent = ({data, flagLogo}) => {
  return (
    <div class="card">
      <center><img src={flagLogo} /></center>
      <a href={data.web_pages[0]}>{data.name}</a>
    </div>
  );
}

CardComponent.propTypes = {
    data : PropTypes.object,
    flagLogo: PropTypes.string
}

export default CardComponent;
