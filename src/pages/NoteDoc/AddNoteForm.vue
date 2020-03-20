<template>
  <form @submit="addNote">
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Add Note</h4>
        <p class="category">Complete your Note</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Major</label>
              <!-- <md-input v-model="disabled" disabled></md-input> -->
              <md-input v-model="major" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Sub Category</label>
              <md-input v-model="subcategory" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Title</label>
              <md-input v-model="title" type="text"></md-input>
            </md-field>
          </div>
          <!-- <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>First Name</label>
              <md-input v-model="firstname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Last Name</label>
              <md-input v-model="lastname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Adress</label>
              <md-input v-model="address" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>City</label>
              <md-input v-model="city" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Country</label>
              <md-input v-model="country" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Postal Code</label>
              <md-input v-model="code" type="number"></md-input>
            </md-field>
          </div> -->
          <div class="md-layout-item md-size-100">
            <label>Details</label>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <vue-editor v-model="details"></vue-editor>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-warning" type="submit">Submit</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import Vue from 'vue'
import { VueEditor } from "vue2-editor";
// Java have total 8 types of primitive literal: short, long, int, byte, float, double, boolean and char
import NoteDataService from '../../service/NoteDataService';

export default {
  name: "add-note-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },

  components:{
    VueEditor
  },

  data() {
    return {
      major: null,
      subcategory: null,
      title: null,
    //   lastname: null,
    //   firstname: null,
    //   address: null,
    //   city: null,
    //   country: null,
    //   code: null,
      details: null,
    };
  },

  methods: {

      addNote: function(e){
          e.preventDefault();
          console.log({
              major: this.major,
              subcategory: this.subcategory,
              title: this.title,
              details: this.details
          });
          NoteDataService.AddNote(this.major,{
              major: this.major,
              subcategory: this.subcategory,
              title: this.title,
              details: this.details
          }).then(() => {
              console.log('success..');
              this.$router.push('/dashboard');
          })
      }
  }
};
</script>
<style></style>
