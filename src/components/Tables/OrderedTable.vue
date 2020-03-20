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
import NoteDataService from '../../service/NoteDataService';
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
      users:[],
      INSTRUCTOR: "v1"
    };
  },

  methods: {
    init(){
      NoteDataService.initNote(this.INSTRUCTOR)
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
