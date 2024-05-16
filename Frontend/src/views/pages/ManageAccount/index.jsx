import React, { useEffect, useState } from 'react';
import './index.scss'
import fakeData from "../../../data/fake_data.json"
import DataTable from "react-data-table-component";

function ManageAccount() {
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Account',
            selector: row => row.account,

        },
        {
            name: 'Password',
            selector: row => row.password,

        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,

        },
        {
            name: 'Role',
            selector: row => row.role,

        },
        {
            name: 'Create at',
            selector: row => row.createdAt,
            sortable: true,

        },
        {
            name: 'Update at',
            selector: row => row.updatedAt,
            sortable: true,
        },
        {
            name: 'Action',
            cell: row => (
              <div className='center-content'>
                <button className='btn-Del' onClick={() => alert(row.alpha2Code)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </div>
            )
          }
      
    ]
    const data = fakeData.Accounts
    const [records, setRecords] = useState(data);
    function handleFilter(event) {
        const newData = data.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setRecords(newData);
    }
    return (
        <div className='container'>
            <div className='data-table-container'>
                <DataTable
                    title={<div className="custom-title">Account List</div>}
                    columns={columns}
                    data={records}
                    selectableRows
                    selectableRowsHighlight
                    highlightOnHover
                    fixedHeader
                    pagination
                    subHeader
                    subHeaderComponent={
                        <div className="sub-header">
                            <input
                                type="text"
                                placeholder='Search here'
                                className='form-control custom-search-input'
                                onChange={handleFilter}
                            />
                        </div>
                    }
                    subHeaderAlign='right'
                />
            </div>
        </div>
    );
}

export default ManageAccount;
