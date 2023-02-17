<template>
  <div class="card">
    <h1 class="title ml-2 mt-5">
      {{ title }}
    </h1>
    <div class="card-content">
      <form v-if="editMode === true" @submit.prevent="onSubmit">
        <div v-for="(field, key) in formConfig" :key="key" class="field">
          <label :for="key" class="label">{{ field.label }}</label>
          <div
            v-if="
              field.type === 'text' ||
              field.type === 'number' ||
              field.type === 'date' ||
              field.type === 'email'
            "
          >
            <input
              class="input"
              :type="field.type"
              :name="key"
              :id="key"
              :required="field.required"
              v-model="formData[key]"
            />
          </div>
          <div v-else-if="field.type === 'range'">
            <input
              class="range"
              :type="field.type"
              :name="keyname"
              :id="key"
              :min="field.min"
              :max="field.max"
              :step="field.step"
              v-model.number="formData[key]"
            />
          </div>
          <div v-else-if="field.type === 'select'">
            <select
              class="select"
              :name="key"
              :id="key"
              :required="field.required"
              v-model="formData[key]"
            >
              <option
                v-for="option in field.options"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
          <div v-else-if="field.type === 'radio'">
            <div v-for="option in field.options" :key="option.value">
              <input
                :type="field.type"
                :name="key"
                :id="option.value"
                :value="option.value"
                :required="field.required"
                v-model="formData[key]"
              />
              <label :for="option.value" class="radio">{{
                option.label
              }}</label>
            </div>
          </div>
          <div v-else-if="field.type === 'checkbox'">
            <div v-for="option in field.options" :key="option.value">
              <input
                :type="field.type"
                :name="key"
                :id="option.value"
                :value="option.value"
                v-model="formData[key]"
              />
              <label :for="option.value" class="checkbox">{{
                option.label
              }}</label>
            </div>
          </div>
          <div v-else-if="field.type === 'textarea'">
            <textarea
              class="textarea"
              :name="key"
              :id="key"
              :required="field.required"
              v-model="formData[key]"
            ></textarea>
          </div>
        </div>
        <button type="submit" class="button is-primary mr-2">Save</button>
        <button @click="onEdit" class="button is-info">Cancel</button>
      </form>
      <div v-else>
        <div v-for="(value, key) in formConfig" :key="key">
          <div>
            <strong>{{ value.label }}:</strong>
            <span>{{ formData[key] }}</span>
          </div>
        </div>
        <button @click="onEdit" class="button">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import cloneDeep from "clone-deep";
import { not, keys, eq } from "ljsp-core";

export default {
  props: {
    formConfig: {
      type: Object,
      required: true,
    },
    formData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      formState: {},
      formErrors: {},
      editMode: false,
    };
  },
  created() {
    this.initializeForm();
  },
  methods: {
    initializeForm() {
      this.formState = cloneDeep(this.formData);
      const fields = keys(this.formConfig);
      fields.forEach((field) => {
        if (not(this.formState.hasOwnProperty(field))) {
          this.formState[field] = "";
        }
      });
    },
    validateForm() {
      let isValid = true;
      this.formErrors = {};
      const fields = keys(this.formConfig);
      fields.forEach((prop) => {
        const value = this.formState[prop];
        const field = this.formConfig[prop];
        if (prop.required && not(value)) {
          this.formErrors[prop] = "Field is required.";
          isValid = false;
        }
        if (eq(field.type, "email") && value && not(isValidEmail(value))) {
          this.formErrors[prop] = "Invalid email address.";
          isValid = false;
        }
        if (eq(field.type, "number") && value && not(isNumeric(value))) {
          this.formErrors[prop] = "Invalid number.";
          isValid = false;
        }
        if (
          prop.validationRegex &&
          value &&
          not(value.match(prop.validationRegex))
        ) {
          this.formErrors[prop] = prop.validationError;
          isValid = false;
        }
      });
      return isValid;
    },
    saveForm() {
      if (this.validateForm()) {
        this.$emit("save", cloneDeep(this.formState));
      }
    },
    resetForm() {
      this.initializeForm();
    },
    onEdit() {
      this.editMode = not(this.editMode);
    },
  },
};
</script>
