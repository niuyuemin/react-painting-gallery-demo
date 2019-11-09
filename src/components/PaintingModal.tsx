import React from "react";
import { PaintingModalProps } from "../types/types";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    margin: "5% auto",
    background: "white",
    textAlign: "center",
    width: "80%",
    height: "80%",
    overflowY: "scroll",
    display: "flex"
  },
  painting_image: {
    maxHeight: "90%",
    maxWidth: "90%",
    margin: "auto",
    paddingTop: "15px"
  },
  painting_descriptions: {
    paddingTop: "15px",
    textAlign: "left",
    margin: "15px"
  },
  title: {
    color: "#be7575"
  },
  field: {
    color: "#f6ad7b"
  },
  content: {
    color: "#666"
  }
});

const PaintingModal: React.FC<PaintingModalProps> = ({
  handleClose,
  image,
  title,
  descriptions
}) => {
  const classes = useStyles();
  const image_version = "large";
  const capitalize = (s: string) =>
    s
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
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
              <div className={classes.painting_descriptions}>
                <Typography
                  variant="h5"
                  gutterBottom
                  className={classes.title}
                >{`Title: ${title}`}</Typography>
                {Object.keys(descriptions).map((description: string) => {
                  const field = capitalize(description);
                  return (
                    <div>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        className={classes.field}
                      >
                        {`${field}: `}
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        className={classes.content}
                      >
                        {descriptions[description]}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            </Grid>
          </Grid>
        </div>
      </Modal>
    </div>
  );
};
export default PaintingModal;
