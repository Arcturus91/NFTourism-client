import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";

export default function ButtonLoading() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 5,
        alignItems: "center",
        flexWrap: "wrap",
        color: "white",
        ml: 5,
        mr: 5,
      }}
    >
      <Button style={{ fontSize: 20, backgroundColor: "#549afe" }}>
        <i class="fa fa-refresh fa-spin"></i>
        Uploading...
      </Button>
    </Box>
  );
}
