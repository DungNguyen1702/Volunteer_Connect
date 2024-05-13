import React, { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import FakeData from "../../../data/fake_data.json";
import "./index.scss";
import AvatarAccount from "../../../components/avatar/AvatarAccount";
import { Button, Pagination } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import SupportFunction from "../../../support/support_function";
import MediumActivityComponent from "../../../components/activity/medium-activity";
import contactAPI from "../../../api/contactAPI";

function AccountContact() {
    const { accountId, role } = useParams();
    const limit = 9;
    const [startIndex, setStartIndex] = useState(0);

    // Data candidate
    const [data, setData] = useState(null);
    // Data organization
    // const data = FakeData.OrganizationContact;
    const [listActivity, setListActivity] = useState(null);
    const [listShowAct, setListShowAct] = useState(
        listActivity ? listActivity.slice(startIndex, startIndex + limit) : []
    );

    useEffect(() => {
        const callAPI = async () => {
            await contactAPI
                .getContactDetail(accountId, role)
                .then((response) => {
                    setData(response.data);
                    setListActivity(response.data.activities)
                })
                .catch((error) => console.log(error));
        };
        callAPI();
    }, []);

    useEffect(() => {
        console.log(startIndex);
        setListShowAct(
            listActivity
                ? listActivity.slice(startIndex, startIndex + limit)
                : []
        );
    }, [startIndex, listShowAct, listActivity]);

    const changePage = (page, pageSize) => {
        setStartIndex((page - 1) * limit);
    };

    const onClickChat = () => {};

    return (
        <div class="contact-profile-wrapper">
            {data && (
                <>
                    <div class="contact-profile-information-wrapper">
                        {parseInt(data.role) === 1 && data.User && (
                            <div class="contact-profile-candidate-info-wrapper">
                                <div class="contact-profile-candidate-avatar">
                                    <AvatarAccount
                                        name={data.name}
                                        avatar={data.avatar}
                                        backgroundNoAva={data.backgroundNoAva}
                                        size={150}
                                    />
                                    <Button
                                        className="contact-button-chat"
                                        onClick={onClickChat}
                                    >
                                        Chat
                                    </Button>
                                </div>
                                <div class="contact-profile-info-container">
                                    <h1 class="contact-profile-info-title">
                                        Information
                                    </h1>
                                    <div class="display-flex">
                                        <div class="contact-profile-left-info-wrapper">
                                            <div class="contact-profile-item">
                                                <p class="contact-profile-item-title">
                                                    <strong>Name : </strong>
                                                </p>
                                                <p class="contact-profile-item-content">
                                                    {data.name}
                                                </p>
                                            </div>
                                            <div class="contact-profile-item">
                                                <p class="contact-profile-item-title">
                                                    <strong>Email : </strong>
                                                </p>
                                                <p class="contact-profile-item-content">
                                                    {data.account}
                                                </p>
                                            </div>
                                            <div class="contact-profile-item">
                                                <p class="contact-profile-item-title">
                                                    <strong>Tel :</strong>
                                                </p>
                                                <p class="contact-profile-item-content">
                                                    {data.User.tel}
                                                </p>
                                            </div>
                                            <div class="contact-profile-item">
                                                <p class="contact-profile-item-title">
                                                    <strong>Address : </strong>
                                                </p>
                                                <p class="contact-profile-item-content">
                                                    {data.User.address}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="contact-profile-right-info-wrapper">
                                            <div class="contact-profile-item">
                                                <p class="contact-profile-item-title">
                                                    <strong>Gender : </strong>
                                                </p>
                                                {data.User.gender.toLowerCase() ===
                                                "male" ? (
                                                    <FontAwesomeIcon
                                                        icon={faMars}
                                                        className="contact-icon-male contact-profile-item-content"
                                                    />
                                                ) : (
                                                    <FontAwesomeIcon
                                                        icon={faVenus}
                                                        className="contact-icon-female contact-profile-item-content"
                                                    />
                                                )}
                                            </div>
                                            <div class="contact-profile-item">
                                                <p class="contact-profile-item-title">
                                                    <strong>Birthday : </strong>
                                                </p>
                                                <p class="contact-profile-item-content">
                                                    {data.User.birthday}
                                                </p>
                                            </div>
                                            <div class="contact-profile-item">
                                                <p class="contact-profile-item-title">
                                                    <strong>
                                                        Number of received
                                                        certificates :{" "}
                                                    </strong>
                                                </p>
                                                <p class="contact-profile-item-content">
                                                    {SupportFunction.getStringCertificate(
                                                        data.EarnedCertificateNumber
                                                    )}
                                                </p>
                                            </div>
                                            <div class="contact-profile-item">
                                                <p class="contact-profile-item-title">
                                                    <strong>
                                                        Number of joined
                                                        activities :{" "}
                                                    </strong>
                                                </p>
                                                <p class="contact-profile-item-content">
                                                    {SupportFunction.getStringActivity(
                                                        data.activityNumber
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {parseInt(data.role) === 2 && (
                            <div class="contact-profile-organization-info-wrapper">
                                <div class="contact-profile-organization-info-container">
                                    <h1 class="contact-profile-info-title">
                                        Information
                                    </h1>
                                    <div class="contact-profile-item">
                                        <p class="contact-profile-item-title">
                                            <strong>Name : </strong>
                                        </p>
                                        <p class="contact-profile-item-content">
                                            {data.name}
                                        </p>
                                    </div>
                                    <div class="contact-profile-item">
                                        <p class="contact-profile-item-title">
                                            <strong>Email : </strong>
                                        </p>
                                        <p class="contact-profile-item-content">
                                            {data.account}
                                        </p>
                                    </div>
                                </div>
                                <div class="contact-profile-item-avatar-wrapper">
                                    <AvatarAccount
                                        name={data.name}
                                        avatar={data.avatar}
                                        backgroundNoAva={data.backgroundNoAva}
                                        size={150}
                                    />
                                    <Button
                                        className="contact-button-chat"
                                        onClick={onClickChat}
                                    >
                                        Chat
                                    </Button>
                                </div>
                                <div class="contact-profile-item margin-top-50">
                                    <p class="contact-profile-item-title">
                                        <strong>
                                            Number of managed activities :{" "}
                                        </strong>
                                    </p>
                                    <p class="contact-profile-item-content">
                                        {SupportFunction.getStringActivity(
                                            data.activityNumber
                                        )}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                    {listActivity && listActivity.length !== 0 ? (
                        <div className="contact-profile-list-act-wrapper">
                            {listShowAct.map((act) => (
                                <MediumActivityComponent data={act} />
                            ))}
                        </div>
                    ) : (
                        <div class="contact-profile-list-act-no-act">
                            <h3 class="contact-profile-list-act-title">
                                {parseInt(data.role) === 2
                                    ? "This account didn't manage any activities"
                                    : "This account didn't join in any activities"}
                            </h3>
                        </div>
                    )}
                    {listActivity && listActivity.length !== 0 && (
                        <Pagination
                            total={listActivity.length}
                            pageSize={limit}
                            onChange={changePage}
                        />
                    )}
                </>
            )}
        </div>
    );
}

export default AccountContact;
