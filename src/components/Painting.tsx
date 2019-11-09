import React, { useState } from "react";
import ModalPortal from "./ModalPortal";
import PaintModal from "./PaintingModal";
import { PaintingProps } from "../types/types";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    textAlign: "center"
  },
  painting_container: {
    background: "#f2eee5",
    padding: "5px"
  },
  painting_thumbnail: {
    marginTop: "5px",
    maxHeight: "90%",
    maxWidth: "90%"
  },
  painting_description: {
    margin: "auto"
  }
});
const Painting: React.FC<PaintingProps> = ({ painting_data }) => {
  const classes = useStyles();

  const {
    title,
    category,
    medium,
    date,
    collecting_institution,
    additional_information,
    image_rights,
    _links
  } = painting_data;

  const thumbnail = _links.thumbnail.href;
  const image = _links.image.href;
  const descriptions = {
    date,
    medium,
    category,
    collecting_institution,
    additional_information,
    image_rights
  };

  const [openPaintingModal, setOpenPaintingModal] = useState(false);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setOpenPaintingModal(true);
  };
  const handleClickClose = () => {
    setOpenPaintingModal(false);
  };
  return (
    <div className={classes.root}>
      <div className={classes.painting_container}>
        <img className={classes.painting_thumbnail} src={thumbnail} alt="*" />
      </div>

      <Typography
        variant="subtitle1"
        gutterBottom
      >{`Title: ${title}`}</Typography>
      <Grid container>
        <Typography
          variant="body2"
          gutterBottom
          className={classes.painting_description}
        >{`Year: ${date}`}</Typography>
        <IconButton onClick={handleClick}>
          <ZoomInIcon fontSize="small" />
        </IconButton>
      </Grid>
      <ModalPortal>
        {openPaintingModal && (
          <PaintModal
            image={image}
            title={title}
            descriptions={descriptions}
            handleClose={handleClickClose}
          />
        )}
      </ModalPortal>
    </div>
  );
};

export default Painting;
