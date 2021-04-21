import React from 'react'
import { DataGrid } from '@material-ui/data-grid';

const Planets = ({data}) => {
    const columns = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'diameter', headerName: 'Diameter', width: 100 },
        { field: 'climate', headerName: 'Climate', width: 100 },
        { field: 'gravity', headerName: 'Gravity', width: 200 },
        
      ];
      
      let rows = []
      data.forEach (planet => rows.push({ id: planet.name, name: planet.name, diameter: planet.diameter, climate: planet.climate, gravity:planet.gravity}))
    

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

export default Planets
