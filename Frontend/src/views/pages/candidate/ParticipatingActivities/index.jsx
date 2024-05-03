import { useEffect, useState } from "react";
import "./index.scss";
import { Button, DatePicker, Pagination, Radio, Select, Space } from "antd";
import { STATUS } from "../../../../constants/activity_status";
import { COUNTRY } from "../../../../constants/activity_countries";
import { TYPES } from "../../../../constants/activity_types";
import { SearchOutlined } from "@ant-design/icons";
import Search from "antd/es/transfer/search";
import fake_data from '../../../../data/fake_data.json'
import ActivityComponent from "../../../../components/activity";
import CreateActModal from "./CreateActModal";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ParticipatingActivities() {
    
    const limit = 6;
    const [listAct, setListAct] = useState(fake_data.Activity_Detail_List);

    const [type, setType] = useState(0);
    const [country, setCountry] = useState(0);
    const [status, setStatus] = useState(0);
    const [dateStart, setDateStart] = useState();
    const [dateEnd, setDateEnd] = useState();
    const [sortBy, setSortBy] = useState(1);
    const [sortOrder, setSortOrder] = useState(1);
    const [search, setSearch] = useState("");
    const [startIndex, setStartIndex] = useState(0);
    const [showListAct, setShowListAct] = useState(listAct.slice(startIndex, startIndex + limit));
    const [isCreateAct, setIsCreateAct] = useState(false);

    useEffect(() => {
        console.log(startIndex);
        setShowListAct(listAct.slice(startIndex, startIndex + limit));
    }, [startIndex, listAct]);


    const changePage = (page, pageSize) => {
        setStartIndex((page - 1) * limit);
    };

    const onChangeType = (e) => {
        setType(type === e.target.value ? null : e.target.value);
        console.log("radio checked type", type);
    };

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
        console.log("radio checked location", country);
    };

    const onChangeStatus = (e) => {
        setStatus(e.target.value);
        console.log("radio checked location", status);
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

    const onClickCreate = ()=>{
        setIsCreateAct(true);
    };

    const disabledDateEnd = (current) => {
        // Lấy ngày hiện tại
        // Trả về true nếu current là trước hoặc cùng ngày với today, ngược lại trả về false
        return current.valueOf() < dateStart.valueOf();
    };

    const createAct = (newAct)=>{
        setListAct([...listAct, newAct])
    };


    return (
        <div class="participating-activity-wrapper">
            <div class="participating-activity-tabbar">
                <div class="tabbar-category">
                    <p class="tabbar-title">Category</p>
                    <Radio.Group onChange={onChangeType} value={type}>
                        <Space direction="vertical">
                            <Radio value={0} className="tabbar-radio">
                                All
                            </Radio>
                            
                            {Object.entries(TYPES).map(([key, value]) => (
                                <Radio value={key} className="tabbar-radio">
                                    {value}
                                </Radio>
                            ))}
                        </Space>
                    </Radio.Group>
                </div>
                <hr />
                <div class="tabbar-country">
                    <p class="tabbar-title">Country</p>
                    <Radio.Group onChange={onChangeCountry} value={country}>
                        <Space direction="vertical">
                            <Radio value={0} className="tabbar-radio">
                                All
                            </Radio>
                            {Object.entries(COUNTRY).map(([key, value]) => (
                                <Radio value={key} className="tabbar-radio">
                                    {value}
                                </Radio>
                            ))}
                        </Space>
                    </Radio.Group>
                </div>
                <hr />
                <div class="tabbar-status">
                    <p class="tabbar-title">Status</p>
                    <Radio.Group onChange={onChangeStatus} value={status}>
                        <Space direction="vertical">
                            <Radio value={0} className="tabbar-radio">
                                All
                            </Radio>
                            {Object.entries(STATUS).map(([key, value]) => (
                                <Radio value={key} className="tabbar-radio">
                                    {value}
                                </Radio>
                            ))}
                        </Space>
                    </Radio.Group>
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
                    closeOnClick= {true}
                    pauseOnHover= {true}
                    draggable= {true}
                    progress= {undefined}
                    theme="colored"
                />
                <div class="content-header">
                    <div class="content-sort-wrapper">
                        <p class="content-sort-title" style={{width : "55px"}}>Sort by</p>
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
                                width : "150px",
                                textAlign : "center"
                            }}
                        />

                        <p class="content-sort-title" style={{width : "75px"}}>Sort order</p>
                        <Select
                            defaultValue={sortOrder}
                            onChange={onChangeSortOrder}
                            className="content-sort-select"
                            options={[
                                { value: 1, label: "Increase" },
                                { value: 2, label: "Decrease" },
                            ]}
                            style={{width : "120px", textAlign : "center"}}
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

                    <Button className="content-create-button" onClick={onClickCreate}>
                        Create
                    </Button>
                    {isCreateAct && <CreateActModal isCreateAct={isCreateAct} setIsCreateAct={setIsCreateAct} createAct={createAct}/>}
                </div>
                <hr class='header-hr' />
                <div class='content-activity'>
                    {showListAct.map((item)=> <ActivityComponent data={item}/>)}
                </div>
                <Pagination
                    total={listAct.length}
                    pageSize={limit}
                    onChange={changePage}
                />
            </div>
        </div>
    );
}

export default ParticipatingActivities;
