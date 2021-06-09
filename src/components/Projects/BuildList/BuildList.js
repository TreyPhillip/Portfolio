import React from 'react';
import BuildCard  from '../BuildCard/BuildCard';
import { Container } from "reactstrap";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { Link } from "react-router-dom";

const BuildList = props => {
    function getCols(screenWidth) {
        if (isWidthUp('xl', screenWidth)) {
            return 5;
        }
        if (isWidthUp('lg', screenWidth)) {
            return 4;
        }
        if (isWidthUp('md', screenWidth)) {
            return 3;
        }
        if (isWidthUp('sm', screenWidth)) {
            return 2;
        }
        if (isWidthUp('xs', screenWidth)) {
            return 1;
        }
    }

    const cols = getCols(props.width);
    return(
        <div>
            <Container className="project-list">
                <GridList cellHeight={460} cols={cols} spacing={15}>
                    {props.build.map((build) =>
                    <GridListTile key={build.buildid}  fullwidth="true" className="project-tile">
                        <Link to=''>
                            <BuildCard build={build} />
                        </Link>
                    </GridListTile>
                    )} 
                </GridList>
            </Container> 
        </div>
    );
};

export default withWidth()(BuildList)