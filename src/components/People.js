import React from 'react'
import { DataGrid } from '@material-ui/data-grid';


const People = ({data}) => {
    //console.log(data);
    const columns = [
        { field: 'name', headerName: 'Name', width:130 },
        { field: 'birth_year', headerName: 'Birth Year', width:120},
        { field: 'height', headerName: 'Height', width:100},
        { field: 'gender', headerName: 'Gender', width:100 },
        
      ];
      
      let rows = []
      data.forEach (people => rows.push({ id: people.name, name: people.name, birth_year : people.birth_year, height: people.height, gender:people.gender}))
    
    return (
    <div className="content">
      <h3 className="title"> People Info</h3>
      <DataGrid
        className="data_grid"
        id={Math.floor(Math.random())} 
        rows={rows} 
        columns={columns} 
        pageSize={10} 
        checkboxSelection
        onRowSelected={() => {console.log('row selected')}}
        />
    </div>
    )
}

export default People
