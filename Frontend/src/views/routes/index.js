import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoute from "./public-route";
import GuestRoute from "./guest-route";
import CandidateRoute from "./candidate-route";
import AdminRoute from "./admin-route";
import LoadableComponent from "../../components/loadable-component";
import MainLayout from "../../components/layout/MainLayout.jsx";

const UserHomePage = LoadableComponent(() =>
    import("../pages/Homepage/index.jsx")
);

const ListPeople = LoadableComponent(() =>
    import("../pages/ListPeople/index.jsx")
);
const ParticipatingActivities = LoadableComponent(() =>
    import("../pages/ParticipatingActivities/index.jsx")
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
const Introduce = LoadableComponent(()=>
    import('../pages/Introduce/Introduce.js')
);
const About = LoadableComponent(()=>
    import('../pages/About/About.js')
);
const Login = LoadableComponent(()=>
    import('../pages/login/LogIn.js')
);
const SignUp = LoadableComponent(()=>
    import('../pages/SignUp/SignUp.js')
);
const Profile = LoadableComponent(()=>
    import('../pages/Profile/index.jsx')
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
                            component={ListPeople}
                            stateButton={3}
                        />
                    }
                />

                <Route
                    path="/activity-detail/:id"
                    element={<MainLayout component={ActivityDetail} />}
                />

                <Route 
                    path="/introduce" 
                    element={<Introduce />} 
                />

                <Route 
                    path="/about" 
                    element={<About />} 
                />

                <Route
                    path='/auth/login'
                    element={<Login/>}
                />

                <Route
                    path='/auth/register'
                    element={<SignUp/>}
                />

                <Route
                    path='/profile/:page'
                    element={<MainLayout component={Profile} />}
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
