import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoute from "./public-route";
import GuestRoute from "./guest-route";
import CandidateRoute from "./candidate-route";
import AdminRoute from "./admin-route";
import LoadableComponent from "../../components/loadable-component";
import MainLayout from "../../components/layout/MainLayout.jsx";

const UserHomePage = LoadableComponent(() =>
    import("../pages/candidate/homepage.jsx")
);

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/user-homepage"} />} />

            {/* // public route  */}
            <Route element={<PublicRoute />}>
                <Route
                    path="/user-homepage"
                    element={<MainLayout component={UserHomePage} />}
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
