import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

    const useStyles = makeStyles ((theme)=> ({
        root: {
            maxWidth: 375,
            minHeight: 375,
            maxHeight: 375,
            backgroundColor: "white"
        },
            media: {
                height: 340,
        },
        control: {
            padding: theme.spacing(2),
        },
    }));

    export default function BuildCard(props) {
        const classes = useStyles();

        return (
            <Card className={classes.root}>
                <CardActionArea>
                    {/* <CardMedia
                        component="img"
                        height="300"
                        image={props.build.image}
                        title=""
                    /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Total Cost: {props.build.price} <br /> <br />
                            Pictures coming soon
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }