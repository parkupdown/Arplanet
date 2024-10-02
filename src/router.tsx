import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Artist from "./pages/Artist";
import Concert from "./pages/Concert";
import ConcertDetail from "./components/Concert/ConcertDetail";
import News from "./pages/News";
import Ticket from "./pages/Ticket";
import CEO from "./pages/CEO";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AdminNews from "./components/Admin/News/AdminNews";
import AdminArtists from "./components/Admin/Artists/AdminArtists";
import AdminCeo from "./components/Admin/CEO/AdminCeo";
import AdminConcert from "./components/Admin/Concerts/AdminConcert";
import AdminHistory from "./components/Admin/History/AdminHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/ceo",
    element: (
      <Layout>
        <CEO />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/artist",
    element: (
      <Layout>
        <Artist />
      </Layout>
    ),
  },
  {
    path: "/concert",
    element: (
      <Layout>
        <Concert />
      </Layout>
    ),
  },
  {
    path: "/concert/detail",
    element: (
      <Layout>
        <ConcertDetail />
      </Layout>
    ),
  },
  {
    path: "/news",
    element: (
      <Layout>
        <News />
      </Layout>
    ),
  },
  {
    path: "/ticket",
    element: (
      <Layout>
        <Ticket />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/admin",
    element: (
      <Layout>
        <Admin />
      </Layout>
    ),
  },
  {
    path: "/admin/news",
    element: (
      <Layout>
        <AdminNews />
      </Layout>
    ),
  },
  {
    path: "/admin/artists",
    element: (
      <Layout>
        <AdminArtists />
      </Layout>
    ),
  },
  {
    path: "/admin/ceo",
    element: (
      <Layout>
        <AdminCeo />
      </Layout>
    ),
  },
  {
    path: "/admin/concert",
    element: (
      <Layout>
        <AdminConcert />
      </Layout>
    ),
  },
  {
    path: "/admin/history",
    element: (
      <Layout>
        <AdminHistory />
      </Layout>
    ),
  },
]);
