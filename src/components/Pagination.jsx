import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const PaginationReact = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={4} variant="outlined" color="primary"/>
      {/* <Pagination count={10} variant="outlined" color="primary" />
      <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination count={10} variant="outlined" disabled /> */}
    </Stack>
  );
};

export default PaginationReact;
