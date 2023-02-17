<template>
  <div class="card">
    <h1 class="title ml-2 mt-5">
      {{ title }}
    </h1>
    <div class="card-content">
      <form @submit.prevent="submitForm">
        <div
          v-for="(field, fieldName) in config"
          :key="fieldName"
          class="field"
        >
          <label :for="fieldName" class="label">{{ field.label }}</label>
          <div class="control">
            <input
              v-if="
                field.type !== 'select' &&
                field.type !== 'radio' &&
                field.type !== 'checkbox' &&
                field.type !== 'textarea'
              "
              class="input"
              :id="fieldName"
              :name="fieldName"
              :type="field.type"
              :value="formData[fieldName]"
              :required="field.required"
              :min="field.min"
              :max="field.max"
              :step="field.step"
              :list="field.list"
              @input="updateFormData(fieldName, $event.target.value)"
            />
            <textarea
              v-if="field.type === 'textarea'"
              :id="fieldName"
              v-model="formData[fieldName]"
              class="textarea"
              :name="fieldName"
              :rows="field.rows"
              :required="field.required"
              :disabled="field.disabled"
            ></textarea>
            <select
              v-if="field.type === 'select'"
              :id="fieldName"
              class="select"
              :name="fieldName"
              :required="field.required"
              @change="updateFormData(fieldName, $event.target.value)"
            >
              <option
                v-for="(option, index) in field.options"
                :key="index"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
            <div v-if="field.type === 'radio'">
              <div v-for="(option, index) in field.options" :key="index">
                <label :for="fieldName + '-' + index" class="radio">
                  <input
                    :id="fieldName + '-' + index"
                    :name="fieldName"
                    :value="option.value"
                    :required="field.required"
                    :checked="option.value === formData[fieldName]"
                    type="radio"
                    @change="updateFormData(fieldName, option.value)"
                  />
                  {{ option.label }}
                </label>
              </div>
            </div>
            <div v-if="field.type === 'checkbox'">
              <div v-for="(option, index) in field.options" :key="index">
                <label :for="fieldName + '-' + index" class="checkbox">
                  <input
                    :id="fieldName + '-' + index"
                    :name="fieldName"
                    :value="option.value"
                    :required="field.required"
                    :checked="formData[fieldName].includes(option.value)"
                    type="checkbox"
                    @change="
                      updateFormData(
                        fieldName,
                        $event.target.checked
                          ? formData[fieldName].concat(option.value)
                          : formData[fieldName].filter(
                              (v) => v !== option.value
                            )
                      )
                    "
                  />
                  {{ option.label }}
                </label>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" class="button is-primary mt-3">Submit</button>
        <button type="submit" class="button is-info mt-3 ml-2">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      formData: Object.fromEntries(
        Object.keys(this.config).map((field) => [field, ""])
      ),
    };
  },
  methods: {
    updateFormData(fieldName, value) {
      this.formData = { ...this.formData, [fieldName]: value };
    },
    submitForm() {
      console.log(this.formData);
    },
  },
};
</script>
