<template>
  <b-card title="Formulario de tennis" class="mt-3">
    <b-form-group label="Tu equipo de tennis">
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
