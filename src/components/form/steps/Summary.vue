<template>
  <div class="summary-container">
    <div v-html="userData.printSummary()"></div>
  </div>
</template>
<script>
import UserData from "@/js/UserData";
import Vue from "vue";
import { Prop, Component } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Summary extends Vue {
  @Prop({ type: UserData, required: true, default: () => [] }) userData;
}
</script>

<style>
.summary-container {
  max-width: 600px;
}
</style>
