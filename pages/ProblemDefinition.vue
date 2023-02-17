<template>
  <div>
    <DynamicForm
      v-model="formData"
      :form-config="fieldConfig"
      title="Problem Definition"
      :form-data="myData"
      :on-submit="submitForm"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      myData: {
        problem: "John",
        targetDate: "02.07.2023",
        sponsor: "john.doe@example.com",
        startState: "25",
        desiredState: "35",
        boundaries: "Test",
        impact:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      fieldConfig: {
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
        beginningState: {
          label: "Beginning State",
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
      readOnly: true,
    };
  },
  methods: {
    submitForm(data) {
      // Handle form submission here
      console.log(data);
    },
  },
};
</script>
