import TextArea from "antd/es/input/TextArea";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import FakeData from "../../../data/fake_data.json";
import { Anchor } from "antd";
import OrganizationItem from "./Component/OrganizationItem";

function ListPeople() {
    const [search, setSearch] = useState("");

    const listAllOrganization = FakeData.ListAccountOrganization;
    const listPopularOrganization = listAllOrganization.slice(0, 5);
    const listAllCandidate = FakeData.ListAccountCandidate;
    const listEnthusiasticCandidate = listAllCandidate.slice(0, 5);

    const topRef = useRef(null);
    const [targetOffset, setTargetOffset] = useState();
    useEffect(() => {
        setTargetOffset(topRef.current?.clientHeight);
    }, []);

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
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
                <div 
                    id="search-bar" 
                    class="list-people-content-big-holder"    
                    ref={topRef}
                >
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
                        <OrganizationItem organizationInfo={listPopularOrganization[0]}/>
                    </div>
                </div>

                {/* All organization  */}
                <div
                    id="allOrganization"
                    class="list-people-content-big-holder"
                >
                    <h3 class="list-people-content-title">All organization</h3>
                    <div class="list-people-content-grid-layout"></div>
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
                    <div class="list-people-content-grid-layout"></div>
                </div>
            </div>
        </div>
    );
}

export default ListPeople;
