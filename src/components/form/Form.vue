<template>
  <div>
    <div class="header">
      <h1>{{ stepHeader }}</h1>
    </div>
    <div class="content">
      <EntryFieldValues
        v-if="currentStep !== Steps.Summary"
        :step-data="stepData"
      />
      <Summary v-else :user-data="userData" />
    </div>
    <div class="footer">
      <div>
        <button v-if="showBackButton" @click="handleBackClick">
          {{ backButtonLabel }}
        </button>
      </div>
      <div>
        <button @click="handleNextClick">
          {{ nextButtonLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import EntryFieldValues from "./steps/EntryFieldValues.vue";
import Summary from "@/components/form/steps/Summary";
import Steps from "@/js/Steps.js";
import UserData from "@/js/UserData.js";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {
    Summary,
    EntryFieldValues,
  },
})
export default class FormLayout extends Vue {
  data() {
    return {
      Steps: Steps,
      currentStep: Steps.ClientData,
      userData: new UserData(),
    };
  }

  get backButtonLabel() {
    return "back";
  }

  get nextButtonLabel() {
    //todo implement return button text with other step
    return "next";
  }

  /**
   *
   * @returns {boolean}
   */
  get showBackButton() {
    return this.currentStep !== Steps.ClientData;
  }

  /**
   * @returns{StepData}
   */
  get stepData() {
    if (this.currentStep === Steps.ClientData) {
      return this.userData.clientData;
    } else if (this.currentStep === Steps.Evaluations) {
      return this.userData.evaluations;
    }
    return undefined;
  }

  /**
   *
   * @returns {string}
   */
  get stepHeader() {
    //todo implement return current step name
    return "";
  }

  handleBackClick() {
    if (this.showBackButton) {
      this.currentStep--;
    }
  }

  handleNextClick() {
    //todo implement action after click next button(validate forms before going to next step)
    this.currentStep++;
  }

  /**
   *
   * @returns {boolean}
   */
  isValidStep() {
    return this.userData.isValidStepData(this.currentStep);
  }
}
</script>
