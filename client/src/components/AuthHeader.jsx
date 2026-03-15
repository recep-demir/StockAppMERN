import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const AuthHeader = () => {
  return (
    <Grid item xs={12} sx={{ mt: 10, mb: 1 }}>
      <Typography 
        variant="h2" 
        color="primary" 
        align="center"
        sx={{ 
          fontWeight: 700, 
          width: "100%" 
        }}
      >
        Stock Management App
      </Typography>
    </Grid>
  );
};

export default AuthHeader;