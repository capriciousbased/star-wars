import React from 'react'
import { DataGrid } from '@material-ui/data-grid';


const Starships = ({data}) => {
    //console.log(data);
    const columns = [
        { field: 'name', headerName: 'Name', width:130 },
        { field: 'length', headerName: 'Length', width:120},
        { field: 'crew', headerName: 'Crew', width:100},
        { field: 'passengers', headerName: 'Passengers', width:100 },
        
      ];
      
      let rows = []
      data.forEach (people => rows.push({ id: people.name, name: people.name, length : people.length, crew: people.crew, mass: people.mass, passengers:people.passengers}))
    
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

export default Starships
