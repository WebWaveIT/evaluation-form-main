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
    return this.currentStep === Steps.Summary ? "send" : "next";
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
    switch (this.currentStep) {
      case Steps.ClientData:
        return "Client Data";
      case Steps.Evaluations:
        return "Evaluations";
      case Steps.Summary:
        return "Summary";
      default:
        return "Client Data";
    }
  }

  handleBackClick() {
    if (this.showBackButton) {
      this.currentStep--;
    }
  }

  handleNextClick() {
    //todo implement action after click next button(validate forms before going to next step)
    const valid = this.isValidStep()
    if (valid && this.currentStep < 2) {
      this.currentStep++;
    } else {
      console.log("invalid step data")
    }
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
