// import PrivateRoutes from "../components/PrivateRoutes";
import { Navigate } from "react-router-dom";
import LayoutDefault from "../layout/LayoutDefault";
import Company from "../pages/Company";
import Home from "../pages/Home";
import JobDetail from "../pages/JobDetail";
import Search from "../pages/Search";
import CompanyDetail from "../pages/CompanyDetail";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import PrivateRoutes from "../components/PrivateRoutes";
import LayoutAdmin from "../layout/LayoutAdmin";
import Dashboard from "../pages/Dashboard";
import CompanyInfo from "../pages/CompanyInfo";
import JobsManage from "../pages/JobsManage";
import JobDetailAdmin from "../pages/JobDetailAdmin";
import CreateJob from "../pages/CreateJob";
import CVManage from "../pages/CVManage";
import CVDetail from "../pages/CVManage/CVDetail";


export const routes = [
  {
    path: "/",
    element: <LayoutDefault/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "search",
        element: <Search/>
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "logout",
        element: <Logout/>
      },
      {
        path: "job/:id",
        element: <JobDetail/>
      },
      {
        path: "company",
        element: <Company/>
      },
      {
        path: "company/:id",
        element: <CompanyDetail/>
      },
      {
        path: "*",
        element: <Navigate to="/"/>
      },
    ]
  },
  //Private
  {
    element: <PrivateRoutes/>,
    children: [
      {
        element: <LayoutAdmin/>,
        children: [
          {
            path: "admin",
            element: <Dashboard/>
          },
          {
            path: "info-company",
            element: <CompanyInfo/>
          },
          {
            path: "jobs-manage",
            element: <JobsManage/>
          },
          {
            path: "detail-job/:id",
            element: <JobDetailAdmin/>
          },
          {
            path: "create-job",
            element: <CreateJob/>
          },
          {
            path: "cv-manage",
            element: <CVManage/>
          },
          {
            path: "detail-cv/:id",
            element: <CVDetail/>
          },
        ]
      }
    ]
  }
];
