import React, { Component } from 'react';
import './App.css';
import 'react-atlas-default-theme/lib/reactAtlas.min.css';
import {Table, TableHeaderColumn} from 'react-atlas'

const products = [];

function addProducts(quantity) {
    const startId = products.length;
    for (let i = 0; i < quantity; i++) {
        const id = startId + i;
        products.push({
            id: id,
            name: 'Item name ' + id,
            price: 2100 + i
        });
    }
}

addProducts(70);

const selectRowProp = {
    mode: 'checkbox'
};


class App extends Component {
    
  render() {
    this.options = {
        defaultSortName: 'name',  // default sort column name
        defaultSortOrder: 'desc'  // default sort order
    };
    return (
        <Table data={ products } selectRow={ selectRowProp } options={this.options} >
            <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name' dataSort={ true }>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </Table>
    );
  }
}

export default App;
