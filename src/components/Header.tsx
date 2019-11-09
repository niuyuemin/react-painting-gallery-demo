import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
      width: '100%',
      height: '180px',
      margin: '35px 0',
      minWidth: '320px',
      textAlign: 'left',
      background: '#f6ad7b',
      
  },
  header: {
      padding: '5%',
      color: '#fff',
      
  }
});
const Header: React.FC = () => {
    const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant="h4">Classic Painting Gallery</Typography>
    </div>
  );
};

export default Header;
