import React from "react";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

interface PaintingModalProps {
  handleClose: () => void;
  image: string;
  title: string;
  year: string;
  medium: string;
  category: string;
  collecting_institution: string;
  additional_information: string;
  image_rights: string;
}

const useStyles = makeStyles({
  root: {
    margin: "5% auto",
    background: "white",
    textAlign: "center",
    width: "80%",
    height: "80%",
    overflowY: "scroll"
  },
  painting_image: {
    maxHeight: "90%",
    maxWidth: "90%",
    margin: "auto",
    padding: "2%"
  }
});

const PaintingModal: React.FC<PaintingModalProps> = ({
  handleClose,
  image,
  title,
  year,
  medium,
  category,
  collecting_institution,
  additional_information,
  image_rights
}) => {
  const classes = useStyles();
  const image_version = "large";
  return (
    <div>
      <Modal open onClose={handleClose}>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12} sm={8}>
              <img
                className={classes.painting_image}
                src={image.replace("{image_version}", image_version)}
                alt="*"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h5"
                gutterBottom
              >{`Title: ${title}`}</Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
              >{`Year: ${year}`}</Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
              >{`Medium: ${medium}`}</Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
              >{`Category: ${category}`}</Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
              >{`Collecting Institution: ${collecting_institution}`}</Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
              >{`Additional Information: ${additional_information}`}</Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
              >{`Image_rights Information: ${image_rights}`}</Typography>
            </Grid>
          </Grid>
        </div>
      </Modal>
    </div>
  );
};
export default PaintingModal;
