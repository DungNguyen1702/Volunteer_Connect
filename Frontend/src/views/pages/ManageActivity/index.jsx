import React, { useEffect, useState } from "react";
import "./index.scss";
import DataTable from "react-data-table-component";
import { toast } from "react-toastify";
import ModalForm from "./ModalForm.jsx";
import FormListModal from "./FormListModal.jsx";
import activityAPI from "../../../api/activityAPI.js";
import deletionFormAPI from "../../../api/deletionForn.js";
import { TYPES } from "../../../constants/activity_types.js";
import { COUNTRY } from "../../../constants/activity_countries.js";
import SupportFunction from "../../../support/support_function.js";
import OrganizationIcon from "../../../components/organization/index.jsx";
import { IMAGES } from "../../../constants/images.js";
import { ICONS } from "../../../constants/icons.js";
import { Button } from "antd";
import { DeleteOutlined, UndoOutlined } from "@ant-design/icons";

function ManageActivity() {
    const [originalRecords, setOriginalRecords] = useState([]);
    const [records, setRecords] = useState();
    const [forms, setForms] = useState();
    const [showFormListModal, setShowFormListModal] = useState(false);
    const [showModalForm, setShowModalForm] = useState(false);
    const [selectedFormData, setSelectedFormData] = useState(null);
    const deleteActivity = (actId, isDeleted) => {
        const callAPI = async () => {
            await activityAPI
                .deleteActivity(actId, isDeleted)
                .then((response) => {
                    console.log(response.data);
                    const newListActivity = originalRecords.map((activity) => {
                        if (activity.id === actId) {
                            return {
                                ...activity,
                                isDeleted: isDeleted ? true : false,
                            };
                        } else return activity;
                    });
                    console.log(newListActivity);

                    setOriginalRecords(newListActivity);
                    setRecords(newListActivity);
                    toast.success("Delete activity successfull");
                })
                .catch((error) => {
                    toast.error("Delete activity failed");
                    console.log(error);
                });
        };
        callAPI();
    };

    useEffect(() => {
        const callApi = async () => {
            await activityAPI
                .getAllActivityByAdmin()
                .then((response) => {
                    setOriginalRecords(response.data);
                    setRecords(response.data);
                })
                .catch((error) => console.log(error));
            await deletionFormAPI
                .getAllDeletionForm()
                .then((response) => {
                    setForms(response.data);
                })
                .catch((error) => console.log(error));
        };

        callApi();
    }, []);

    const onClickChangeStatusDelete = (actId, isDeleted) => {
        console.log(actId, isDeleted);
        deleteActivity(actId, isDeleted);
    };
    const onClickForm = () => {
        deletionFormAPI
            .getAllDeletionForm()
            .then((response) => {
                setShowFormListModal(true);
                setForms(response.data);
            })
            .catch((error) => console.log(error));
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
            selector: (row) => row.id,
            sortable: true,
            width: "60px",
        },
        {
            name: "Image",
            selector: (row) => (
                <div className="center-content">
                    <img
                        src={row.image ? row.image : IMAGES.noPhoto}
                        alt={row.name}
                        style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                        }}
                    />
                </div>
            ),
            headerClassName: "custom-header",
        },
        {
            name: "Email",
            selector: (row) => row.email,
            headerClassName: "custom-header",
            cell: (row) => <div className="center-content">{row.email}</div>,
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => <div className="center-content">{row.name}</div>,
            headerClassName: "custom-header",
            sortable: true,
        },
        {
            name: "Type",
            selector: (row) => (
                <div className="center-content">{TYPES[row.type]}</div>
            ),
            headerClassName: "custom-header",
        },
        {
            name: "Date Start",
            selector: (row) => row.dateStart,
            headerClassName: "custom-header",
            cell: (row) => (
                <div className="center-content">
                    {SupportFunction.convertDateFromArrayToString(
                        row.dateStart
                    )}
                </div>
            ),
            sortable: true,
        },
        {
            name: "Date End",
            selector: (row) => row.dateEnd,
            headerClassName: "custom-header",
            cell: (row) => (
                <div className="center-content">
                    {SupportFunction.convertDateFromArrayToString(row.dateEnd)}
                </div>
            ),
            sortable: true,
        },
        {
            name: "Country",
            selector: (row) => row.country,
            headerClassName: "custom-header",
            cell: (row) => (
                <div className="center-content align-item-center">
                    {COUNTRY[row.country]}{" "}
                    <img
                        alt="country-icon"
                        src={ICONS[COUNTRY[row.country]]}
                        height={"30px"}
                        style={{ marginLeft: "5px" }}
                    />
                </div>
            ),
            sortable: true,
        },
        {
            name: "Organization",
            selector: (row) => row.organizationId,
            cell: (row) => (
                <div className="center-content">
                    <OrganizationIcon
                        id={row.organization.id}
                        name={row.organization.name}
                        avatar={row.organization.avatar}
                        backgroundNoAva={row.organization.backgroundNoAva}
                        size={30}
                        avatarLeft={true}
                    />
                </div>
            ),
            headerClassName: "custom-header",
        },
        {
            name: "Action",
            cell: (row) => (
                <div className="center-content">
                    {row.isDeleted ? (
                        <Button
                            className="btn-UnDel"
                            onClick={() => onClickChangeStatusDelete(row.id, 0)}
                            icon={<UndoOutlined />}
                        />
                    ) : (
                        <Button
                            className="btn-Del"
                            onClick={() => onClickChangeStatusDelete(row.id, 1)}
                            icon={<DeleteOutlined />}
                        />
                    )}
                </div>
            ),
        },
    ];

    function handleFilter(event) {
        const value = event.target.value.toLowerCase();
        const newData = originalRecords.filter((row) => {
            return row.id.toString().toLowerCase().includes(value);
            //return row.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setRecords(newData);
    }

    return (
        <div className="container">
            <div className="data-table-container">
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
                            <button className="btn-Form" onClick={onClickForm}>
                                Form
                            </button>
                            <input
                                type="text"
                                placeholder="Search here"
                                className="form-control custom-search-input"
                                onChange={handleFilter}
                            />
                        </div>
                    }
                    subHeaderAlign="right"
                />
            </div>
            <FormListModal
                show={showFormListModal}
                onClose={closeFormListModal}
                forms={forms}
                onSelectForm={onSelectForm}
            />
            {selectedFormData && (
                <ModalForm
                    show={showModalForm}
                    onClose={closeModalForm}
                    data={selectedFormData}
                    onClickForm={onClickForm}
                />
            )}
        </div>
    );
}

export default ManageActivity;
