<template>
  <b-card title="Formulario de basket" class="mt-3">
    <b-form-group label="Tu equipo de basket">
      <b-form-input
        autocomplete="off"
        v-model="activity_selected_data.team"
        v-validate="'required|min:2'"
        data-vv-as="Equipo"
        name="team"
        placeholder="Introduce tu equipo"
        :state="$parent.validateState('team')"
      >
      </b-form-input>
      <b-form-invalid-feedback>
        {{ errors.first('team') }}
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="Información del equipo">
      <b-form-textarea
        v-model="activity_selected_data.information"
        v-validate="'required|min:10'"
        data-vv-as="Información del equipo"
        name="team_info"
        :state="$parent.validateState('team_info')"
        :rows="3"
        :max-rows="6"
      >
      </b-form-textarea>
      <b-form-invalid-feedback>
        {{ errors.first('team_info') }}
      </b-form-invalid-feedback>
    </b-form-group>
  </b-card>
</template>

<script>
export default {
  inject: ['$validator'],
  props: {
    activity_selected_data: {
      type: Object,
      required: true
    }
  }
}
</script>
