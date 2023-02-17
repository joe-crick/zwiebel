<template>
  <div>
    <DynamicForm
      v-model="formData"
      :config="formConfig"
      title="Problem Definition"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      formConfig: {
        problem: {
          label: "Problem Description",
          type: "textarea",
          required: true,
        },
        targetDate: {
          label: "What is the target date for the project?",
          type: "date",
          required: true,
        },
        sponsor: {
          label: "Who is/are the sponsor(s)?",
          type: "text",
          required: true,
        },
        startState: {
          label: "Start State",
          type: "textarea",
          required: true,
        },
        desiredState: {
          label: "Desired State/Success Criteria",
          type: "textarea",
          required: true,
        },
        boundaries: {
          label: "Project Boundaries",
          type: "textarea",
          required: true,
        },
        impact: {
          label: "Who will be impacted by this project?",
          type: "textarea",
          required: true,
        },
        benefits: {
          label: "What are the benefits of completing the project?",
          type: "textarea",
          required: true,
        },
        dataCollection: {
          label: "What data will we need to collect?",
          type: "textarea",
          required: true,
        },
        resources: {
          label: "What resources are required?",
          type: "textarea",
          required: true,
        },
      },
      formData: {},
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log(this.formData);
    },
  },
};
</script>
