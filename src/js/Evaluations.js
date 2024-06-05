import { FormField } from "@/js/FormField";
import Validators from "@/js/Validators";
import StepData from "@/js/StepData";
import FormFieldType from "@/js/FormFieldType";

export default class Evaluations extends StepData {
  constructor() {
    super();
    this.speakerEvaluation = new FormField({
      label: "Speaker evaluation (1 - 10)",
      validator: Validators.NUMBER_REQUIRED,
      type: FormFieldType.INPUT,
    });
    this.speakerComment = new FormField({
      label: "Additional feedback on speakers (optional, 500 characters)",
      validator: Validators.TEXTAREA_STRING_NOT_REQUIRED,
      type: FormFieldType.TEXT_AREA,
    });
    this.contentEvaluation = new FormField({
      label: "Content evaluation (1 - 10)",
      validator: Validators.NUMBER_REQUIRED,
      type: FormFieldType.INPUT,
    });
    this.contentComment = new FormField({
      label: "Additional feedback on the content (optional, 500 characters)",
      validator: Validators.TEXTAREA_STRING_NOT_REQUIRED,
      type: FormFieldType.TEXT_AREA,
    });
    this.cateringEvaluation = new FormField({
      label: "Catering evaluation (1 - 10)",
      validator: Validators.NUMBER_REQUIRED,
      type: FormFieldType.INPUT,
    });
    this.cateringComment = new FormField({
      label: "Additional feedback on the catering (optional, 500 characters)",
      validator: Validators.TEXTAREA_STRING_NOT_REQUIRED,
      type: FormFieldType.TEXT_AREA,
    });
  }

  getFields() {
    return [
      this.speakerEvaluation,
      this.speakerComment,
      this.contentEvaluation,
      this.contentComment,
      this.cateringEvaluation,
      this.cateringComment,
    ];
  }

  getLabel() {
    return "Evaluation";
  }
}
