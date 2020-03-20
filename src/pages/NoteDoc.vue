<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-64">
        <!-- Here should be a component displaying those note -->
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
          <md-list-item md-expand>
            <stats-card data-background-color="green">
              <template slot="header">
                <md-icon>store</md-icon>
              </template>
            </stats-card>

            <md-list slot="md-expand">
              <md-list-item class="md-inset">World</md-list-item>
              <md-list-item class="md-inset">Europe</md-list-item>
              <md-list-item class="md-inset">South America</md-list-item>
            </md-list>
          </md-list-item>
        </div>
        
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-35">
        <user-card> </user-card>
        <add-note-form data-background-color="orange"> </add-note-form>
      </div>
    </div>
  </div>
</template>

<script>
import { UserCard} from "@/pages";
import AddNoteForm from './NoteDoc/AddNoteForm';
import StatsCard from '../components/Cards/StatsCard';

export default {
  components: {
    // EditProfileForm,
    UserCard,
    'add-note-form': AddNoteForm,
    'stats-card':StatsCard,
  }
};
</script>