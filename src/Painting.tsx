import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

interface PaintingProps {
    thumbnail: string
    title: string
    date: string
}

const useStyles = makeStyles ({
    root: {
        textAlign: 'center'
    },
    painting_thumbnail: {
        maxHeight: '90%',
        maxWidth: '90%',
    }
})
const Painting:React.FC<PaintingProps> = ({thumbnail, title, date}) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <img className={classes.painting_thumbnail} src={thumbnail} alt='*'></img>
            <Typography variant='subtitle1' gutterBottom>{`Title: ${title}`}</Typography>
            <Typography variant='body2' gutterBottom>{`Year: ${date}`}</Typography>
        </div>
        
    )
}

export default Painting
