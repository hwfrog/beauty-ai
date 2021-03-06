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
    float: 'left',
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function ImgDetailCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="240"
          image={require("./static/bottom/WeChatImage_201812240234101.jpg")}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pants
          </Typography>
          <Typography component="p">
            Color: Black, Type: Long
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ImgDetailCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgDetailCard);