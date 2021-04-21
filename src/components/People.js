import React from 'react'
import { DataGrid } from '@material-ui/data-grid';

const People = ({data}) => {
    //console.log(data);
    const columns = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'height', headerName: 'Height', width: 100 },
        { field: 'mass', headerName: 'mass', width: 100 },
        { field: 'gender', headerName: 'Gender', width: 200 },
        
      ];
      
      let rows = []
      data.forEach (people => rows.push({ id: people.name, name: people.name, height: people.height, mass: people.mass, gender:people.gender}))
    
    return (
        <div style={{ height: '800px', width: '100%' }}>
      <h3 style={{marginLeft: "15px"}}>Users Data</h3>
      <DataGrid 
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
