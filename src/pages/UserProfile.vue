<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <!-- <edit-profile-form data-background-color="green"> </edit-profile-form> -->
        <add-note-form data-background-color="orange"> </add-note-form>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <user-card> </user-card>
        <edit-profile-form data-background-color="green"> </edit-profile-form>
      </div>
    </div>
  </div>
</template>

<script>
import { EditProfileForm, UserCard} from "@/pages";
import AddNoteForm from './UserProfile/AddNoteForm';

export default {
  components: {
    EditProfileForm,
    UserCard,
    'add-note-form': AddNoteForm
  }
};
</script>