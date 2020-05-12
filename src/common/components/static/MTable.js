import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";

export const MTable = () => {
    const [tableData, setTableData] = useState(null)
  useEffect(() => {
    fetch('https://corona.lmao.ninja/v2/countries')
      .then(res => res.json())
      .then(res => {
          const t=res.map(c=>{return{...c,flag:<img src={c.countryInfo.flag} width='35' height='23'/>}})
        setTableData(t)
      })
  }, [])
    const columns = [
        { title: "Flag", field: "flag", },
        { title: "Country", field: "country", },
        { title: "Confirm", field: "cases",type: "numeric" },
        { title: "Deaths", field: "deaths", type: "numeric" },
        { title: "Recovered", field: "recovered",type: "numeric" },
        { title: "Active", field: "active", type: "numeric" },
        { title: "Tests", field: "tests", type: "numeric"},
        { title: "Criticals", field: "critical", type: "numeric" },
        { title: "Continent", field: "continent", },
    ]
    return (
        <div style={{ maxWidth: "100%" }}>
            {tableData&&<MaterialTable
                columns={columns}
                data={tableData}
                options={{
                    paging: true,
                    padding:0
                }}
                title="WORLD COVID-19 STATISTICS"
            />}
        </div>
    );
}