import React, { useEffect, useState } from "react";
import "./Certificate.scss";
import fakeData from "../../../data/fake_data.json";
import { Pagination } from "antd";
import CertificateComponent from "../../certificate";
import candidateAPI from "../../../api/candidateAPI";

const Certificate = () => {
    const limit = 6;
    const [data, setData] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [showCertificate, setShowCertificate] = useState(
        data.slice(startIndex, startIndex + limit)
    );

    const onChangePage = (page, pageSize) => {
        setStartIndex((page - 1) * limit);
    };

    useEffect(() => {
        const callAPI = async () => {
            await candidateAPI
                .getAllCertificate()
                .then((response) => {
                    console.log(response)
                    setData(
                        response.data.filter(
                            (candidate) =>
                                candidate.certificate !== "" ||
                                candidate.certificate != null
                        )
                    );
                })
                .catch((error) => console.log(error));
        };
        callAPI();
    }, []);

    useEffect(() => {
        setShowCertificate(data && data.slice(startIndex, startIndex + limit));
    }, [startIndex, data]);

    return (
        <div class="certificate-wrapper">
            <h1 id="certificate-profile-title">Certificate</h1>
            <div class="certificate-grid-layout">
                {showCertificate &&
                    showCertificate.length > 0 &&
                    showCertificate.map((candidate) => (
                        <CertificateComponent data={candidate} />
                    ))}
            </div>
            <div class="certificate-profile-footer">
                {data && data.length > 0 && (
                    <Pagination
                        total={data.length}
                        pageSize={limit}
                        onChange={onChangePage}
                    />
                )}
            </div>
        </div>
    );
};

export default Certificate;
