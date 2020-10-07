import React from 'react';
import {ProjectCard}  from '../ProjectCard/ProjectCard';
import { Container } from "reactstrap";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

export const ProjectList = props => (
    <div>
        <Container className="product-list">
            <GridList cellHeight={460} cols={4.3}>
            {props.project.map((project) => 
            <GridListTile>
            <ProjectCard key={project.projectid} project={project} />
            </GridListTile>          
            )} 
            </GridList>
        </Container> 
    </div>
);