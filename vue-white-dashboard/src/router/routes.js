import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import AuthLayout from '@/layout/dashboard/AuthLayout.vue';

// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

//import middleware
import auth from "@/middleware/auth";
import guest from "@/middleware/guest";

const Login = () =>
  import(/* webpackChunkName: "pages" */ '@/pages/Login.vue');
const Register = () =>
  import(/* webpackChunkName: "pages" */ '@/pages/Register.vue');
const PasswordReset = () =>
  import(/* webpackChunkName: "password" */ "@/pages/Password/Reset.vue");
const PasswordEmail = () =>
  import(/* webpackChunkName: "password" */ "@/pages/Password/Email.vue");

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");

// Example pages
const UserProfile = () => import('@/pages/Examples/UserProfile.vue');
// User Management
const ListUserPage = () => import("@/pages/Examples/UserManagement/ListUserPage.vue");

let authPages = {
  path: "/",
  redirect: "/login",
  component: AuthLayout,
  children: [
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { middleware: guest }
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: { middleware: guest }
    },
    {
      path: "/password/reset",
      name: "Password Reset",
      component: PasswordReset,
      meta: { middleware: guest }
    },
    {
      path: "/password/email",
      name: "Password Reset",
      component: PasswordEmail,
      meta: { middleware: guest }
    },
  ]
};

let examplesMenu = {
  path: "/examples",
  component: DashboardLayout,
  name: "Examples",
  children: [
    {
      path: "user-profile",
      name: "User Profile",
      components: { default: UserProfile },
      meta: { middleware: auth }
    },
    {
      path: "user-management/list-users",
      name: "List Users",
      components: { default: ListUserPage },
      meta: { middleware: auth }
    },
  ]
};

const routes = [
  examplesMenu,
  authPages,
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
        meta: { middleware: auth }
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
