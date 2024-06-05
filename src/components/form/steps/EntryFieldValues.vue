<template>
  <div class="step-entry-container">
    <FormField
      v-for="(field, id) in stepData.getFields()"
      v-bind:key="id"
      class="step-entry"
      :form-field="field"
    />
  </div>
</template>

<script>
import FormField from "../FormField.vue";
import StepData from "@/js/StepData";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  components: {
    FormField,
  },
})
export default class EntryFieldValues extends Vue {
  @Prop({ type: StepData, required: true }) stepData;
}
</script>

<style>
.step-entry-container {
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
</style>
