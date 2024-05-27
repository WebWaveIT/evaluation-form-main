import { FormField } from "@/js/FormField";
import Validators from "@/js/Validators";
import StepData from "./StepData";
import FormFieldType from '@/js/FormFieldType';

export default class ClientData extends StepData {

	constructor() {
		super();
		this.firstName = new FormField({
            label: 'First Name',
            validator: Validators.NOT_EMPTY_STRING,
            type: FormFieldType.INPUT,
        });
		/**
		 * //todo add more fields
		 **/
	}
	
	getFields() {
        return [this.firstName];
    }
}
