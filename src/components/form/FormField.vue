<template>
  <div>
    <div class="label">
      {{ formField.label }}
    </div>

    <input
      class="input"
      v-if="formField.type === FormFieldType.INPUT"
      v-model="formField.value"
      :placeholder="formField.label"
      type="text"
    />
    <textarea
      class="textarea"
      v-else-if="formField.type === FormFieldType.TEXT_AREA"
      v-model="formField.value"
      :placeholder="formField.label"
    />

    <div v-if="displayFormFieldError">
      <p class="field-error-message">invalid field data</p>
    </div>
    <div v-else class="field-error-message-placeholder"></div>
  </div>
</template>
<script>
import Vue from "vue";
import { FormField } from "@/js/FormField";
import { Prop, Component } from "vue-property-decorator";
import FormFieldType from "@/js/FormFieldType";

@Component({
  components: {},
})
export default class FormEntry extends Vue {
  @Prop({ type: FormField, required: true }) formField;

  data() {
    return {
      FormFieldType: FormFieldType,
    };
  }

  get displayFormFieldError() {
    return this.formField.value.length && !this.formField.isValid();
  }
}
</script>

<style>
.label {
  margin-bottom: 8px;
  font-size: 20px;
}

.input,
.textarea {
  padding: 8px;
  border-radius: 16px;
  border: 1px solid black;
  font-size: 16px;
}

.input {
  text-align: center;
}

.textarea {
  width: 100%;
  min-height: 64px;
}

.field-error-message {
  color: red;
  font-size: 12px;
  margin: 0;
  padding: 0;
}

.field-error-message-placeholder {
  min-height: 14px;
}
</style>
