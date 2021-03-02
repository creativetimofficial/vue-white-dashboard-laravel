## Vue Frontend Setup

To start using this design system you will need to to install some dependencies or copy some files to your
project.

<hr>

#### Steps to install

1. Navigate to your Vue White Dashboard project folder: `cd your-vue-white-dashbord-project`
2. Install project dependencies: `npm install`
3. Create a new .env file: `cp .env.example .env`
4. `VUE_APP_BASE_URL` should contain the URL of your Vue White Dashboard Project (eg. http://localhost:8080/)
5. `VUE_APP_API_BASE_URL` should contain the URL of your Laravel JSON:API Project. (eg. http://localhost:3000/api/v1)
6. Run `npm run dev` to start the application in a local development environment or `npm run build` to build release distributables.

#### Vue White Dashboard

Vue White Dashboard is built as Vue plugin so you can simply import it and use it.

```js
import Vue from 'vue';
import DashboardPlugin from '@/plugins/whiteDashboard'
Vue.use(DashboardPlugin);
```

#### Global Components

White comes with an extensive set of custom Vue components. Some of them are globally instantiated so
it's easier to use them across the app without importing them each time.

Here's the list of global components:

- **BaseButton**
- **BaseCheckbox**
- **BaseDropdown**
- **Card**
- **BaseInput**

#### Local components

Besides the components mentioned above, we have some extra components/plugins that are usually less used
and bigger. In order to not affect the overall bundle size of the White Kit, they should be imported locally.

Here's the list of local components:

- **BarChart**
- **BaseAlert**
- **BaseNav**
- **BaseTable**
- **CloseButton**
- **LineChart**
- **Modal**
- **NavbarToogleButton**
- **Notifications**
- **StatsCard**
- **Sidebar**
- **SidebarLink**

#### Starter template

To get started faster, we provide a starter template inside the project. It's a bare bones
layout with nav, footer and a hello world. To enable it go to **main.js** and change line 3

```js{3}
import Vue from "vue";
import App from "./App.vue";
import router from "./starterRouter";
```
