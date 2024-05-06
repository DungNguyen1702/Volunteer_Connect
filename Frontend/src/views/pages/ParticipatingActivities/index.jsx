import { useEffect, useState } from "react";
import "./index.scss";
import {
    Button,
    Checkbox,
    DatePicker,
    Pagination,
    Radio,
    Select,
    Space,
} from "antd";
import { STATUS } from "../../../constants/activity_status";
import { COUNTRY } from "../../../constants/activity_countries";
import { TYPES } from "../../../constants/activity_types";
import { SearchOutlined } from "@ant-design/icons";
import Search from "antd/es/transfer/search";
import fake_data from "../../../data/fake_data.json";
import ActivityComponent from "../../../components/activity";
import CreateActModal from "./CreateActModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SupportFunction from "../../../support/support_function";

function ParticipatingActivities() {
    const limit = 6;
    const [listAct, setListAct] = useState(fake_data.Activity_Detail_List);
    const [filterListAct, setFilterListAct] = useState(listAct);

    const [type, setType] = useState(["1", "2", "3", "4", "5", "6", "7"]);
    const [country, setCountry] = useState(["1", "2", "3", "4"]);
    const [status, setStatus] = useState(Object.values(STATUS));
    const [dateStart, setDateStart] = useState();
    const [dateEnd, setDateEnd] = useState();
    const [sortBy, setSortBy] = useState(1);
    const [sortOrder, setSortOrder] = useState(1);
    const [search, setSearch] = useState("");
    const [startIndex, setStartIndex] = useState(0);
    const [showListAct, setShowListAct] = useState(
        filterListAct.slice(startIndex, startIndex + limit)
    );
    const [isCreateAct, setIsCreateAct] = useState(false);

    useEffect(() => {
        console.log(startIndex);
        setShowListAct(filterListAct.slice(startIndex, startIndex + limit));
    }, [startIndex, filterListAct]);

    useEffect(() => {
        const listAfterFilter = 
            SupportFunction.filterAct(
                listAct,
                type,
                country,
                status,
                sortBy,
                sortOrder,
                dateStart,
                dateEnd
            )
        ;
        if(search.length !== 0)
            setFilterListAct(listAfterFilter.filter(act => act.name.toLowerCase().includes(search.toLowerCase())))
        else {
            setFilterListAct(listAfterFilter)
        }

    }, [type, country, status, sortBy, sortOrder, listAct, dateStart, dateEnd, search]);

    const changePage = (page, pageSize) => {
        setStartIndex((page - 1) * limit);
    };

    const onChangeType = (value) => {
        setType(value);
        console.log("radio checked type", value);
    };

    const onChangeCountry = (value) => {
        setCountry(value);
        console.log("radio checked country", value);
    };

    const onChangeStatus = (value) => {
        setStatus(value);
        console.log("radio checked status", value);
    };

    const onChangeDateStart = (date, dateString) => {
        setDateStart(dateString);
    };

    const onChangeDateEnd = (date, dateString) => {
        setDateEnd(dateString);
    };

    const onChangeSortBy = (value) => {
        setSortBy(value);
    };

    const onChangeSortOrder = (value) => {
        setSortOrder(value);
    };

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const onClickFilter = () => {
        console.log("filter");
    };

    const onClickSort = () => {
        console.log("sort");
    };

    const onClickCreate = () => {
        setIsCreateAct(true);
    };

    const disabledDateEnd = (current) => {
        // Lấy ngày hiện tại
        // Trả về true nếu current là trước hoặc cùng ngày với today, ngược lại trả về false
        return current.valueOf() < dateStart.valueOf();
    };

    const createAct = (newAct) => {
        setListAct([...listAct, newAct]);
    };

    return (
        <div class="participating-activity-wrapper">
            <div class="participating-activity-tabbar">
                <div class="tabbar-category">
                    <p class="tabbar-title">Category</p>
                    <Checkbox.Group onChange={onChangeType} value={type}>
                        <Space direction="vertical">
                            {Object.entries(TYPES).map(([key, value]) => (
                                <Checkbox value={key} className="tabbar-radio">
                                    {value}
                                </Checkbox>
                            ))}
                        </Space>
                    </Checkbox.Group>
                </div>
                <hr />
                <div class="tabbar-country">
                    <p class="tabbar-title">Country</p>
                    <Checkbox.Group onChange={onChangeCountry} value={country}>
                        <Space direction="vertical">
                            {Object.entries(COUNTRY).map(([key, value]) => (
                                <Checkbox value={key} className="tabbar-radio">
                                    {value}
                                </Checkbox>
                            ))}
                        </Space>
                    </Checkbox.Group>
                </div>
                <hr />
                <div class="tabbar-status">
                    <p class="tabbar-title">Status</p>
                    <Checkbox.Group onChange={onChangeStatus} value={status}>
                        <Space direction="vertical">
                            {Object.entries(STATUS).map(([key, value]) => (
                                <Checkbox value={value} className="tabbar-radio">
                                    {value}
                                </Checkbox>
                            ))}
                        </Space>
                    </Checkbox.Group>
                </div>
                <hr />
                <div class="tabbar-date">
                    <p class="tabbar-title">Date</p>
                    <div class="tabbar-date-start">
                        <p class="tabbar-date-title">Start date</p>
                        <DatePicker
                            onChange={onChangeDateStart}
                            placeholder="2023-04-23"
                        />
                    </div>
                    <div class="tabbar-date-end">
                        <p class="tabbar-date-title">End date</p>
                        <DatePicker
                            onChange={onChangeDateEnd}
                            placeholder="2023-04-23"
                            disabledDate={dateStart ? disabledDateEnd : null}
                        />
                    </div>
                </div>
                <Button
                    className={"tabbar-filter-button"}
                    onClick={onClickFilter}
                    icon={
                        <SearchOutlined className="tabbar-filter-button-icon" />
                    }
                >
                    Filter
                </Button>
            </div>
            <div class="participating-activity-content">
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    closeOnClick={true}
                    pauseOnHover={true}
                    draggable={true}
                    progress={undefined}
                    theme="colored"
                />
                <div class="content-header">
                    <div class="content-sort-wrapper">
                        <p class="content-sort-title" style={{ width: "55px" }}>
                            Sort by
                        </p>
                        <Select
                            defaultValue={sortBy}
                            onChange={onChangeSortBy}
                            className="content-sort-select"
                            options={[
                                { value: 1, label: "Start date" },
                                { value: 2, label: "End date" },
                                { value: 3, label: "Registration date" },
                                { value: 4, label: "Created date" },
                            ]}
                            style={{
                                width: "150px",
                                textAlign: "center",
                            }}
                        />

                        <p class="content-sort-title" style={{ width: "75px" }}>
                            Sort order
                        </p>
                        <Select
                            defaultValue={sortOrder}
                            onChange={onChangeSortOrder}
                            className="content-sort-select"
                            options={[
                                { value: 1, label: "Increase" },
                                { value: 2, label: "Decrease" },
                            ]}
                            style={{ width: "120px", textAlign: "center" }}
                        />

                        <Button
                            className="content-sort-button"
                            onClick={onClickSort}
                        >
                            Sort
                        </Button>
                    </div>

                    <Search
                        placeholder="Input name's activity to search"
                        className="content-search"
                        onChange={onChangeSearch}
                        value={search}
                        size="large"
                    />

                    <Button
                        className="content-create-button"
                        onClick={onClickCreate}
                    >
                        Create
                    </Button>
                    {isCreateAct && (
                        <CreateActModal
                            isCreateAct={isCreateAct}
                            setIsCreateAct={setIsCreateAct}
                            createAct={createAct}
                        />
                    )}
                </div>
                <hr class="header-hr" />
                {filterListAct.length !== 0 ? (
                    <div class='width-100'>
                        <div class="content-activity">
                            {showListAct.map((item) => (
                                <ActivityComponent data={item} />
                            ))}
                        </div>
                    
                        <Pagination
                            total={filterListAct.length}
                            pageSize={limit}
                            onChange={changePage}
                        />
                    </div>
                ) : <p class='gray-color'>There is no activity</p>}
            </div>
        </div>
    );
}

export default ParticipatingActivities;
