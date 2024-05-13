import TextArea from "antd/es/input/TextArea";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import FakeData from "../../../data/fake_data.json";
import { Anchor, Dropdown, Pagination } from "antd";
import OrganizationItem from "./Component/OrganizationItem";
import CandidateItem from "./Component/CandidateItem";
import useDropDownListPeopleItem from "./Component/Dropdown";
import contactAPI from "../../../api/contactAPI";

function ListPeople() {
    const [search, setSearch] = useState("");

    const limit = 6;

    const [listAllOrganization, setListAllOrganization] = useState(
        []
    );
    const [listPopularOrganization, setListPopularOrganization] = useState(
        []
    );
    const [listAllCandidate, seListAllCandidate] = useState(
        FakeData.ListAccountCandidate
    );
    const [listEnthusiasticCandidate, setListEnthusiasticCandidate] = useState(
        listAllCandidate.slice(0, 5)
    );

    const [startIndexOrg, setStartIndexOrg] = useState(0);
    const [startIndexCan, setStartIndexCan] = useState(0);

    const [showListOrg, setShowListOrg] = useState(
        listAllOrganization.slice(startIndexOrg, startIndexOrg + limit)
    );
    const [showListCan, setShowListCan] = useState(
        listAllCandidate.slice(startIndexCan, startIndexCan + limit)
    );
    const [listAccountSearch, setListAccountSearch] = useState([
        ...listAllCandidate,
        ...listAllOrganization,
    ]);

    useEffect(() => {
        const callAPI = async () => {
            contactAPI
                .getAllOrganization()
                .then((response) => {
                    // set all organization
                    setListAllOrganization(response.data);

                    // set popular organization
                    let organizationsWithValidActivities = response.data.filter(org => {
                        return org.activities.length > 0 ;
                    });

                    let popularOrganization = organizationsWithValidActivities.sort((a, b) => {

                        return b.activities.length - a.activities.length;
                    });
                    
                    setListPopularOrganization(popularOrganization.slice(0,6));

                })
                .catch((error) => {
                    console.log(error);
                });
        };
        callAPI();
    }, []);

    useEffect(() => {
        setShowListOrg(
            listAllOrganization.slice(startIndexOrg, startIndexOrg + limit)
        );
    }, [startIndexOrg, listAllOrganization]);

    useEffect(() => {
        setShowListCan(
            listAllCandidate.slice(startIndexCan, startIndexCan + limit)
        );
    }, [startIndexCan, listAllCandidate]);

    useEffect(() => {
        if (search.length !== 0)
            setListAccountSearch(
                [...listAllCandidate, ...listAllOrganization].filter(
                    (account) =>
                        account.name
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                        account.account
                            .toLowerCase()
                            .includes(search.toLowerCase())
                )
            );
        else
            setListAccountSearch([...listAllCandidate, ...listAllOrganization]);
    }, [listAllCandidate, listAllOrganization, search]);

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

    const { getItemDropDownSearchAccount } = useDropDownListPeopleItem();

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
                    <Dropdown
                        menu={{
                            items: getItemDropDownSearchAccount(
                                listAccountSearch
                            ),
                        }}
                        trigger={["click"]}
                        placement="bottom"
                    >
                        <TextArea
                            value={search}
                            onChange={onChangeSearch}
                            placeholder="Input account's name or email to search"
                            autoSize={{ minRows: 1, maxRows: 1 }}
                        />
                    </Dropdown>
                </div>

                {listAllOrganization && listAllOrganization.length !== 0 && (
                    <>
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
                                    <OrganizationItem
                                        organizationInfo={organization}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* All organization  */}
                        <div
                            id="allOrganization"
                            class="list-people-content-big-holder"
                        >
                            <h3 class="list-people-content-title">
                                All organization
                            </h3>
                            <div class="list-people-content-grid-layout">
                                {showListOrg.map((organization) => (
                                    <OrganizationItem
                                        organizationInfo={organization}
                                    />
                                ))}
                            </div>
                            <Pagination
                                total={listAllOrganization.length}
                                pageSize={limit}
                                onChange={onChangePageOrg}
                                className="list-people-pagination"
                            />
                        </div>
                    </>
                )}

                {listAllCandidate && listAllCandidate.length !== 0 && (
                    <>
                        {/* Enthusiastic candidate   */}
                        <div
                            id="enthusiasticCandidate"
                            class="list-people-content-big-holder"
                        >
                            <h3 class="list-people-content-title">
                                Enthusiastic candidate
                            </h3>
                            <div class="list-people-content-grid-layout">
                                {listEnthusiasticCandidate.map((candidate) => (
                                    <CandidateItem candidateInfo={candidate} />
                                ))}
                            </div>
                        </div>

                        {/* All candidate   */}
                        <div
                            id="allCandidate"
                            class="list-people-content-big-holder"
                        >
                            <h3 class="list-people-content-title">
                                All candidate
                            </h3>
                            <div class="list-people-content-grid-layout">
                                {showListCan.map((candidate) => (
                                    <CandidateItem candidateInfo={candidate} />
                                ))}
                            </div>
                            <Pagination
                                total={listAllOrganization.length}
                                pageSize={limit}
                                onChange={onChangePageCan}
                                className="list-people-pagination"
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default ListPeople;
