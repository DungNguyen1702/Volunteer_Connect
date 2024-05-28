import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoute from "./public-route";
import CandidateRoute from "./candidate-route";
import AdminRoute from "./admin-route";
import LoadableComponent from "../../components/loadable-component";
import MainLayout from "../../components/layout/MainLayout.jsx";
import OrganizationRoute from "./organization-route.js";

const UserHomePage = LoadableComponent(() =>
    import("../pages/Homepage/index.jsx")
);

const ListPeople = LoadableComponent(() =>
    import("../pages/ListPeople/index.jsx")
);
const ListActivity = LoadableComponent(() =>
    import("../pages/ListActivity/index.jsx")
);
const PostDetail = LoadableComponent(() =>
    import("../pages/PostDetail/index.jsx")
);
const ActivityDetail = LoadableComponent(() =>
    import("../pages/ActivityDetail/index.jsx")
);
const CreatePost = LoadableComponent(() =>
    import("../pages/CreatePost/index.jsx")
);
const Introduce = LoadableComponent(() =>
    import("../pages/Introduce/Introduce.js")
);
const About = LoadableComponent(() => import("../pages/About/About.js"));
const Login = LoadableComponent(() => import("../pages/login/LogIn.js"));
const SignUp = LoadableComponent(() => import("../pages/SignUp/SignUp.js"));
const Profile = LoadableComponent(() => import("../pages/Profile/index.jsx"));
const ChatBox = LoadableComponent(() => import("../pages/ChatBox/index.jsx"));
const AccountContact = LoadableComponent(() =>
    import("../pages/ContactProfile/index.jsx")
);
const ManageAccount = LoadableComponent(() =>
    import("../pages/ManageAccount/index.jsx")
);
const ManageActivity = LoadableComponent(() =>
    import("../pages/ManageActivity/index.jsx")
);
const ForgotPassword = LoadableComponent(() =>
    import("../pages/ForgotPassword/index.jsx")
);
const AuthAnnounce = LoadableComponent(() =>
    import("../pages/AuthAnnouncement/index.jsx")
);
const ResetPassword = LoadableComponent(() =>
    import("../pages/ResetPassword/index.jsx")
);
const ConfirmSignUp = LoadableComponent(() =>
    import("../pages/SignUp/ConfirmSignUp/index.jsx")
);

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/introduce"} />} />

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

                <Route path="/introduce" element={<Introduce />} />

                <Route path="/about" element={<About />} />

                <Route path="/auth/login" element={<Login />} />

                <Route path="/auth/register" element={<SignUp />} />

                <Route
                    path="/auth/forgot-password"
                    element={<ForgotPassword />}
                />

                <Route
                    path="/auth/announcement/:status"
                    element={<AuthAnnounce />}
                />

                <Route
                    path="/auth/reset-password/:token"
                    element={<ResetPassword />}
                />

                <Route
                    path="/auth/register/valid/:token"
                    element={<ConfirmSignUp />}
                />

                <Route path="/profile/:activepage" element={<Profile />} />

                <Route
                    path="/chat-box/:accountId"
                    element={
                        <MainLayout component={ChatBox} isNoFooter={true} />
                    }
                />

                <Route
                    path="/contact-user/:accountId/:role"
                    element={<MainLayout component={AccountContact} />}
                />

                <Route
                    path="/people-searching"
                    element={
                        <MainLayout component={ListPeople} stateButton={3} />
                    }
                />

                <Route
                    path="/list-activity"
                    element={
                        <MainLayout component={ListActivity} stateButton={2} />
                    }
                />

                <Route
                    path="/people-searching"
                    element={
                        <MainLayout component={ListPeople} stateButton={3} />
                    }
                />

                <Route
                    path="/activity-detail/:id"
                    element={<MainLayout component={ActivityDetail} />}
                />
            </Route>

            {/* organization route */}
            <Route element={<OrganizationRoute />}>
                <Route
                    path="/create-post/:activityId"
                    element={<MainLayout component={CreatePost} />}
                />
            </Route>

            {/* candidate route */}
            <Route element={<CandidateRoute />}></Route>

            {/* Admin route */}
            <Route element={<AdminRoute />}>
                <Route
                    path="/admin/manage-account"
                    element={
                        <MainLayout component={ManageAccount} stateButton={3} />
                    }
                />

                <Route
                    path="/admin/manage-activity"
                    element={
                        <MainLayout
                            component={ManageActivity}
                            stateButton={2}
                        />
                    }
                />
            </Route>
        </Routes>
    );
};

export default AllRoutes;
