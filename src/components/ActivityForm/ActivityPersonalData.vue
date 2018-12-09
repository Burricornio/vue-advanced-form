<template>
  <b-card title="Datos personales" class="mt-3">
    <b-row>
      <b-col>
        <b-form-group label="Nombre">
          <b-form-input
            autocomplete="off"
            v-model="personal_data.name"
            v-validate="'required|min:2'"
            data-vv-as="nombre"
            name="name"
            placeholder="Introduce tu nombre"
            :state="$parent.validateState('name')"
          >
          </b-form-input>
          <b-form-invalid-feedback>
            {{ errors.first('name') }}
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="Apellidos">
          <b-form-input
            autocomplete="off"
            v-model="personal_data.surname"
            v-validate="'required|min:4'"
            data-vv-as="apellidos"
            name="surname"
            placeholder="Introduce tus apellidos"
            :state="$parent.validateState('surname')"
          >
          </b-form-input>
          <b-form-invalid-feedback>
            {{ errors.first('surname') }}
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  inject: ['$validator'],
  props: {
    personal_data: {
      type: Object,
      required: true
    }
  }
}
</script>
