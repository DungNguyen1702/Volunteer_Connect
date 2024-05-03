import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoute from "./public-route";
import GuestRoute from "./guest-route";
import CandidateRoute from "./candidate-route";
import AdminRoute from "./admin-route";
import LoadableComponent from "../../components/loadable-component";
import MainLayout from "../../components/layout/MainLayout.jsx";

const UserHomePage = LoadableComponent(() =>
    import("../pages/candidate/Homepage/index.jsx")
);

const PeopleSearching = LoadableComponent(() =>
    import("../pages/candidate/PeopleSearching/peopleSearching.jsx")
);
const ParticipatingActivities = LoadableComponent(() =>
    import("../pages/candidate/ParticipatingActivities/index.jsx")
);
const PostDetail = LoadableComponent(() =>
    import("../pages/candidate/PostDetail/index.jsx")
);
const ActivityDetail = LoadableComponent(() => 
    import("../pages/candidate/ActivityDetail/index.jsx")
);
const CreatePost = LoadableComponent(() =>
    import("../pages/candidate/CreatePost/index.jsx")
)


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/user-homepage"} />} />

            {/* // public route  */}
            <Route element={<PublicRoute />}>
                
                <Route
                    path="/user-homepage"
                    element={
                        <MainLayout component={UserHomePage} stateButton={1} />
                    }
                />

                <Route
                    path="/post-detail/:id"
                    element={<MainLayout component={PostDetail} />}
                />

                <Route
                    path="/create-post/:activityId"
                    element={<MainLayout component={CreatePost} />}
                />

                <Route
                    path="/participating-activity"
                    element={
                        <MainLayout
                            component={ParticipatingActivities}
                            stateButton={2}
                        />
                    }
                />

                <Route
                    path="/people-searching"
                    element={
                        <MainLayout
                            component={PeopleSearching}
                            stateButton={3}
                        />
                    }
                />

                <Route
                    path="/activity-detail/:id"
                    element={<MainLayout component={ActivityDetail} />}
                />
            </Route>

            {/* guest route */}
            <Route element={<GuestRoute />}></Route>

            {/* candidate route */}
            <Route element={<CandidateRoute />}></Route>

            {/* Admin route */}
            <Route element={<AdminRoute />}></Route>
        </Routes>
    );
};

export default AllRoutes;
