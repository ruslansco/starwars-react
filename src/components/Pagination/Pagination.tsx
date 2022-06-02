import React from "react";
import PropTypes from "prop-types";
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography } from "@mui/material";

interface Props {
  currentPage: number;
  totalPages: number;
  handleNextPage: (page: number) => void;
  handlePrevPage: (page: number) => void;
}


const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage
}) => {


  return (
<>

   <button

className="button1"
      onClick={() => handlePrevPage(currentPage)}
      disabled={currentPage === 1}
>
<ArrowBackIosNewIcon sx={{margin:"5px"}} />
    </button>


    <button disabled  className="button">
    <span> Page {currentPage} of {totalPages} </span>
    </button>


        
    <button
className="button1"
      onClick={() => handleNextPage(currentPage)}
      disabled={currentPage === totalPages}
    >
 
      <ArrowForwardIosIcon sx={{margin:"5px"}} />
 
    </button>
    </>

  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired
};

export default Pagination;
