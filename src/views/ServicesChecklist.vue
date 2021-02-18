<template>
  <div class="page-container">
    <div class="header md-layout">
      <div class="md-layout-item left-side md-size-30">
        <img class="robotImg" src="../assets/servicesBackground.svg" />
      </div>
      <div class="md-layout-item md-size-60">
        <p class="md-title">Checklista UI dla stron usługowych</p>
        <p class="md-subtitle">Narzędzie do generowania raportów</p>
        <TableSearch
          :pointsIncoming="pointsIncoming"
          :textData="textData"
          button="services"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TableSearch from "../components/table";
import {
  pointsIncoming,
  textData,
} from "../components/checklist-for-services/content";
export default {
  name: "ServicesChecklist",
  components: {
    TableSearch,
  },
  data() {
    return {
      pointsIncoming,
      textData,
    };
  },
};
</script>

<style>
.left-side {
  position: relative;
}
.robotImg {
  position: fixed;
  left: 0;
  top: 10%;
  max-width: inherit;
  width: inherit;
}
.page-container,
.header {
  background: white;
  min-height: 100vh;
}

.md-title {
  font-size: 30px !important;
  margin: 2rem 0 1rem;
  color: #3786b2;
}
.md-subtitle {
  font-size: 20px;
  color: #5db6e6;
}
.md-helper-text {
  color: #3786b2;
}
.md-table-head.md-numeric {
  text-align: center !important;
}
</style>