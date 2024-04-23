import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoute from "./public-route";
import GuestRoute from "./guest-route";
import CandidateRoute from "./candidate-route";
import AdminRoute from "./admin-route";
import LoadableComponent from "../../components/loadable-component";
import MainLayout from "../../components/layout/MainLayout.jsx";
import PeopleSearching from "../pages/candidate/PeopleSearching/peopleSearching.jsx";
import ParticipatingActivities from "../pages/candidate/participatingActivities/participatingActivities.jsx";

const UserHomePage = LoadableComponent(() =>
    import("../pages/candidate/homepage/homepage.jsx")
);
const ActivityDetail = LoadableComponent(() =>
    import("../pages/candidate/postDetail/index.jsx")
);

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/user-homepage"} />} />

            {/* // public route  */}
            <Route element={<PublicRoute />}>
                <Route
                    path="/user-homepage"
                    element={<MainLayout component={UserHomePage} stateButton={1} isLogined ={false}/>}
                />
                <Route
                    path="/user-homepage/isLogined"
                    element={<MainLayout component={UserHomePage} stateButton={1} isLogined ={true}/>}
                />
            </Route>

            {/* guest route */}
            <Route element={<GuestRoute />}></Route>
                <Route
                    path="/activity-detail/:id"
                    element={<MainLayout component={ActivityDetail} />}
                />

                <Route
                    path="/participating-activity"
                    element={<MainLayout component={ParticipatingActivities} stateButton={2}/>}
                />

                <Route
                    path="/people-searching"
                    element={<MainLayout component={PeopleSearching} stateButton={3}/>}
                />

            {/* candidate route */}
            <Route element={<CandidateRoute />}></Route>

            {/* Admin route */}
            <Route element={<AdminRoute />}></Route>
        </Routes>
    );
};

export default AllRoutes;
