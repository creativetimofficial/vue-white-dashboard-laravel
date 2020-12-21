<template>
<div class="content">
    <div class="row mt-5">
      <div class="col-12">
         <div class="pro-feature alert alert-danger">
          <strong
            >Add, Edit, Delete features are not functional. This is a PRO feature!
            Click
            <a
              href="https://www.creative-tim.com/live/vue-white-dashboard-pro-laravel"
              target="_blank"
              >here</a
            >
            to see the PRO product.</strong
          >
        </div>
        <card card-body-classes="table-full-width">
          <h4 slot="header" class="card-title">Users List</h4>
          <div>
            <div class="text-right mb-3">
              <base-button @click="onProFeature" class="mt-3" type="primary">Add User</base-button>
            </div>
            <div class="table-responsive">
              <base-table tbody-classes="list" :data="users">
                <template slot="columns">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Created At</th>
                  <th></th>
                </template>

                <template slot-scope="{ row }">
                  <td>
                    {{ row.name }}
                  </td>
                  <td>
                    {{ row.email }}
                  </td>
                  <td>
                    {{ row.created_at }}
                  </td>
                  <td>
                    <base-button
                      @click="onProFeature"
                      class="edit btn-link"
                      type="warning"
                      size="sm"
                      icon
                    >
                      <i class="tim-icons icon-pencil"></i>
                    </base-button>
                    <base-button
                      @click="onProFeature"
                      class="remove btn-link"
                      type="danger"
                      size="sm"
                      icon
                    >
                      <i class="tim-icons icon-simple-remove"></i>
                    </base-button>
                  </td>
                </template>
              </base-table>
            </div>
          </div>
        </card>
      </div>
    </div>
</div>
</template>

<script>
import { BaseTable } from "@/components";

const tableColumns = ["Name", "Email", "Created At"];
  export default {
    components: {
      BaseTable,
    },

    data: () => ({
      users: [],
      footerTable: ["Name", "Created At", "Actions"],
      columns: [...tableColumns],
    }),

    created() {
      this.getList()
    },

    methods: {
      getList() {
        this.users = [{
          name: "Admin",
          email: "admin@jsonapi.com",
          created_at: "2020-01-01"
        }]
      },

      onProFeature() {
        this.$notify({
          type: 'danger',
          message: 'This is a PRO feature.'
        })
      },
    }
  }
</script>
