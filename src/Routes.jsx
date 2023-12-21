import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Audioinput = React.lazy(() => import("pages/Audioinput"));
const UM3AUDIOVIDEOINPUTS = React.lazy(
  () => import("pages/UM3AUDIOVIDEOINPUTS"),
);
const UM5TACKLINGDEPRESSION = React.lazy(
  () => import("pages/UM5TACKLINGDEPRESSION"),
);
const Moodtracker = React.lazy(() => import("pages/Moodtracker"));
const Myjournal = React.lazy(() => import("pages/Myjournal"));
const UM6MOODTRACKERJOURNAL = React.lazy(
  () => import("pages/UM6MOODTRACKERJOURNAL"),
);
const UserDashboard = React.lazy(() => import("pages/UserDashboard"));
const MacBookAirOne = React.lazy(() => import("pages/MacBookAirOne"));
const Signup = React.lazy(() => import("pages/Signup"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/macbookairone" element={<MacBookAirOne />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route
            path="/um6moodtrackerjournal"
            element={<UM6MOODTRACKERJOURNAL />}
          />
          <Route path="/myjournal" element={<Myjournal />} />
          <Route path="/moodtracker" element={<Moodtracker />} />
          <Route
            path="/um5tacklingdepression"
            element={<UM5TACKLINGDEPRESSION />}
          />
          <Route
            path="/um3audiovideoinputs"
            element={<UM3AUDIOVIDEOINPUTS />}
          />
          <Route path="/audioinput" element={<Audioinput />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
