import React, { useState } from "react";
import Painting from "./Painting";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";

interface PaintingListProps {
  painting_list: any;
}

const useStyles = makeStyles({
    page_button_root: {
        textAlign: 'center'
    },
    page_button: {
        margin: 'auto'
    }
})

const PaintingList: React.FC<PaintingListProps> = ({ painting_list }) => {
    const classes = useStyles()
  const [current_page, setCurrentPage] = useState(1);
  const paintings = painting_list.slice(
    (current_page - 1) * 12,
    Math.min(current_page * 12, painting_list.length)
  );
  const page_button_num = Math.ceil(painting_list.length / 12);
  const page_buttons = Array.from(Array(page_button_num).keys()); //create a list of page buttons
  const onPageClick = (page: number) => (
      (event: React.MouseEvent<HTMLElement>)=>{
        event.preventDefault()
        setCurrentPage(page)
      }
  )
  return (
    <div>
      <Typography variant="h5">Painting List</Typography>
      <Grid container spacing={3}>
        {paintings.map((painting: any) => (
          <Grid item xs={12} sm={4}>
            <Painting
              thumbnail={painting._links.thumbnail.href}
              title={painting.title}
              date={painting.date}
              key={painting.id}
            />
          </Grid>
        ))}
      </Grid>
      <Container className={classes.page_button_root}>
        {page_buttons.map((page: number) => {
          page++;
          return (
            <Button className={classes.page_button} disabled={page === current_page} onClick={onPageClick(page)}key={page}>
              {page}
            </Button>
          );
        })}
      </Container>
    </div>
  );
};

export default PaintingList;
