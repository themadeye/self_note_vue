<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Major">{{ item.major }}</md-table-cell>
        <md-table-cell md-label="Sub Category">{{ item.subcategory }}</md-table-cell>
        <md-table-cell md-label="Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Details">{{ item.details }}</md-table-cell>
        <!-- <md-table-cell md-label="City">{{ item.city }}</md-table-cell> -->
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import PersonDataService from '../../service/PersonDataService';
export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      // users: [
      //   {
      //     id: 1,
      //     name: "Dakota Rice",
      //     salary: "$36,738",
      //     country: "Niger",
      //     city: "Oud-Turnhout"
      //   },
      //   {
      //     id: 2,
      //     name: "Minerva Hooper",
      //     salary: "$23,738",
      //     country: "Curaçao",
      //     city: "Sinaai-Waas"
      //   },
      //   {
      //     id: 3,
      //     name: "Sage Rodriguez",
      //     salary: "$56,142",
      //     country: "Netherlands",
      //     city: "Overland Park"
      //   },
      //   {
      //     id: 4,
      //     name: "Philip Chaney",
      //     salary: "$38,735",
      //     country: "Korea, South",
      //     city: "Gloucester"
      //   }
      // ],
      users:[],
      INSTRUCTOR: "v1"
    };
  },

  methods: {
    init(){
      PersonDataService.initNote(this.INSTRUCTOR)
      .then(
        response => {
          console.log('data',response );
          this.users = response.data;
      });
    },
  },
  created() {
    this.init();
  },
};
</script>
