import TextArea from "antd/es/input/TextArea";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import FakeData from "../../../data/fake_data.json";
import { Anchor, Pagination } from "antd";
import OrganizationItem from "./Component/OrganizationItem";

function ListPeople() {
    const [search, setSearch] = useState("");

    const limit = 6;
    

    const listAllOrganization = FakeData.ListAccountOrganization;
    const listPopularOrganization = listAllOrganization.slice(0, 5);
    const listAllCandidate = FakeData.ListAccountCandidate;
    const listEnthusiasticCandidate = listAllCandidate.slice(0, 5);


    const [startIndexOrg, setStartIndexOrg] = useState(0);
    const [startIndexCan, setStartIndexCan] = useState(0);

    const [showListOrg, setShowListOrg] = useState(listAllOrganization.slice(startIndexOrg, startIndexOrg + limit));
    const [showListCan, setShowListCan] = useState(listAllCandidate.slice(startIndexCan, startIndexCan + limit));

    useEffect(()=>{
        setShowListOrg(startIndexOrg, startIndexOrg + limit);
    },[startIndexOrg]);

    useEffect(()=>{
        setShowListCan(startIndexCan, startIndexCan + limit);
    },[startIndexCan]);
    

    const topRef = useRef(null);
    const [targetOffset, setTargetOffset] = useState();
    useEffect(() => {
        setTargetOffset(topRef.current?.clientHeight);
    }, []);

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const onChangePageOrg = (page, pageSize) => {
        setStartIndexOrg((page - 1) * limit);
    };

    const onChangePageCan = (page, pageSize) => {
        setStartIndexCan((page - 1) * limit);
    };

    return (
        <div class="list-people-wrapper">
            <div class="list-people-navigation">
                <Anchor
                    targetOffset={targetOffset}
                    items={[
                        {
                            key: "popularOrganization",
                            href: "#popularOrganization",
                            title: "Popular organizations",
                        },
                        {
                            key: "allOrganization",
                            href: "#allOrganization",
                            title: "All organizations",
                        },
                        {
                            key: "enthusiasticCandidate",
                            href: "#enthusiasticCandidate",
                            title: "Enthusiastic candidates",
                        },
                        {
                            key: "allCandidate",
                            href: "#allCandidate",
                            title: "All candidates",
                        },
                    ]}
                />
            </div>
            <div class="list-people-content-wrapper">
                <div id="search-bar" class="search-bar-wrapper" ref={topRef}>
                    <h3 class="list-people-content-title">Searching</h3>
                    <TextArea
                        className="search-bar"
                        value={search}
                        onChange={onChangeSearch}
                        autoSize
                    />
                </div>

                {/* Popular organization  */}
                <div
                    id="popularOrganization"
                    class="list-people-content-big-holder"
                >
                    <h3 class="list-people-content-title">
                        Popular organization
                    </h3>
                    <div class="list-people-content-grid-layout">
                        {listPopularOrganization.map((organization) => (
                            <OrganizationItem organizationInfo={organization} />
                        ))}
                    </div>
                </div>

                {/* All organization  */}
                <div
                    id="allOrganization"
                    class="list-people-content-big-holder"
                >
                    <h3 class="list-people-content-title">All organization</h3>
                    <div class="list-people-content-grid-layout">
                        {showListOrg.map((organization) => (
                            <OrganizationItem organizationInfo={organization} />
                        ))}
                        <Pagination
                            total={listAllOrganization.length}
                            pageSize={limit}
                            onChange={onChangePageOrg}
                        />
                    </div>
                </div>

                {/* Enthusiastic candidate   */}
                <div
                    id="enthusiasticCandidate"
                    class="list-people-content-big-holder"
                >
                    <h3 class="list-people-content-title">
                        Enthusiastic candidate
                    </h3>
                    <div class="list-people-content-grid-layout"></div>
                </div>

                {/* All candidate   */}
                <div id="allCandidate" class="list-people-content-big-holder">
                    <h3 class="list-people-content-title">All candidate</h3>
                    <div class="list-people-content-grid-layout">
                        
                        <Pagination
                            total={listAllOrganization.length}
                            pageSize={limit}
                            onChange={onChangePageOrg}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListPeople;
