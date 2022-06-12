import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingDecrease, onClickingIncrease } = props;
  const pints = keg.pints === 0 ? "Out of Stock" : keg.pints;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>Name: {keg.name}</h3>
      <h3>Brand: {keg.brand}</h3> 
      <h3>Price: ${keg.price}</h3>
      <h3>Alcohol Content: {keg.alcoholContent}%</h3>
      <h3>Pints Available: {pints}</h3>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Delete Keg</button> 
      <button onClick={()=> onClickingIncrease(keg.id) }>Add Keg</button>
      <button onClick={()=> onClickingDecrease(keg.id) }>Buy Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func ,
  onClickingEdit: PropTypes.func,
  onClickingIncrease: PropTypes.func,
  onClickingDecrease: PropTypes.func,
};



export default KegDetail;