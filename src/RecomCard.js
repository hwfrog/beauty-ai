import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 500,
    marginTop: 50,
    float: 'left',
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function ImgRecomCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Our choice
          </Typography>
        </CardContent>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          image={require("./static/recom1.jpeg")}
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
  );
}

ImgRecomCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgRecomCard);