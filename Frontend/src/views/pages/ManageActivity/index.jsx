import React, { useEffect, useState } from 'react';
import "./index.scss";
import DataTable from 'react-data-table-component';
import { toast } from "react-toastify";
import ModalForm from "./ModalForm.jsx"
import FormListModal from './FormListModal.jsx';
import activityAPI from '../../../api/activityAPI.js';
import deletionFormAPI from '../../../api/deletionForn.js';

function ManageActivity() {
  const [isDeleteAct, setIsDeleteAct] = useState(false);
  const [listActivity, setListActivity] = useState([]);
  //const data = fakeData.ManagementActicity;
  const [originalRecords, setOriginalRecords] = useState([]);
  const [records, setRecords] = useState();
  const [forms, setForms] = useState();
  const [showFormListModal, setShowFormListModal] = useState(false);
  const [showModalForm, setShowModalForm] = useState(false);
  const [selectedFormData, setSelectedFormData] = useState(null);
  const deleteActivity = (actId) => {
    const callAPI = async () => {
      await activityAPI.deleteActivity(actId).then(response => {
        const newListActivity = listActivity.filter(
          (activity) => activity.id !== actId
        );
        setListActivity(newListActivity);
        toast.success("Delete activity successfull")
      }).catch(error => console.log(error))
    }
    callAPI();
  };
  useEffect(() => {
    const callApi = async () => {
      await activityAPI
        .getAllActivityByAdmin()
        .then((response) => {
          console.log(response.data);
          setOriginalRecords(response.data);
          setRecords(response.data);
        })
        .catch((error) => console.log(error));
      await deletionFormAPI
        .getAllDeletionForm()
        .then((response) => {
          console.log(response.data);
          setForms(response.data);
        })
    };

    callApi();
  }, []);

  const onClickDelete = () => {
    setIsDeleteAct(true);
  }
  const onClickForm = () => {
    setShowFormListModal(true);
  };

  const closeFormListModal = () => {
    setShowFormListModal(false);
  };

  const closeModalForm = () => {
    setShowModalForm(false);
  };

  const onSelectForm = (form) => {
    setSelectedFormData(form);
    setShowFormListModal(false);
    setShowModalForm(true);
  };
  const columns = [
    {
      name: "ID",
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'Image',
      selector: row => <div className='center-content'>
        <img src={row.image} alt={row.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
      </div>,
      headerClassName: 'custom-header'
    },
    {
      name: 'Email',
      selector: row => row.email,
      headerClassName: 'custom-header',
      cell: row => <div className='center-content'>{row.email}</div>,
      sortable: true
    },
    {
      name: "Name",
      selector: row => <div className='center-content'>{row.name}</div>,
      headerClassName: 'custom-header',
      sortable: true
    },
    {
      name: "Type",
      selector: row => <div className='center-content'>{row.type}</div>,
      headerClassName: 'custom-header',
    },
    {
      name: "Date Start",
      selector: row => row.dateStart,
      headerClassName: 'custom-header',
      cell: row => <div className='center-content'>{row.dateStart}</div>,
      sortable: true
    },
    {
      name: "Date End",
      selector: row => row.dateEnd,
      headerClassName: 'custom-header',
      cell: row => <div className='center-content'>{row.dateEnd}</div>,
      sortable: true
    },
    {
      name: "Country",
      selector: row => row.country,
      headerClassName: 'custom-header',
      cell: row => <div className='center-content'>{row.country}</div>,
      sortable: true
    },
    {
      name: "Organization ID",
      selector: row => row.organizationId,
      cell: row => <div className='center-content'>{row.organizationId}</div>,
      headerClassName: 'custom-header'
    },
    {
      name: 'Action',
      cell: row => (
        <div className='center-content'>
          <button className='btn-Del' onClick={onClickDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
        </div>
      )
    }
  ];

  function handleFilter(event) {
    const value = event.target.value.toLowerCase();
    const newData = originalRecords.filter(row => {
      return row.id.toString().toLowerCase().includes(value);
      //return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }

  return (
    <div className='container'>
      <div className='data-table-container'>
        <DataTable
          title={<div className="custom-title">Activity List</div>}
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
              <button className="btn-Form"
                onClick={onClickForm}
              >Form</button>
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
      <FormListModal show={showFormListModal} onClose={closeFormListModal} forms={forms} onSelectForm={onSelectForm} />
      {selectedFormData && <ModalForm show={showModalForm} onClose={closeModalForm} data={selectedFormData} />}
    </div>
  );
}

export default ManageActivity;
