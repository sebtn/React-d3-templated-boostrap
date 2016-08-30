import React from "react";
import ReactDOM from "react-dom";
import _ from 'lodash'; 

import {Grid, Row, Col, PageHeader, Button, ButtonGroup, Input} from 'react-bootstrap'
import FixedDataTable from 'fixed-data-table';
const Table = FixedDataTable.Table
const Column = FixedDataTable.Column


export default class HarView extends React.Component {

  constructor(){
    super() 

    
  }

  render() {

    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <PageHeader>Sebs D3 ready!</PageHeader>
          </Col>
        </Row>
      </Grid>   
      )
  }
}
