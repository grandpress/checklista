<template>
  <div class="page-container">
    <div class="header md-layout">
      <div class="md-layout-item left-side md-size-30">
        <img class="robotImg" src="../assets/background.png" />
      </div>
      <div class="md-layout-item md-size-60">
        <p class="md-title">Checklista UI dla ecommerce</p>
        <p class="md-subtitle">Narzędzie do generowania raportów</p>
        <TableSearch :pointsIncoming="pointsIncoming" :textData="textData" />
      </div>
    </div>
  </div>
</template>

<script>
import TableSearch from "../components/table";
import {
  pointsIncoming,
  textData,
} from "../components/checklist-for-ecommerce/content";
export default {
  name: "EcommerceChecklist",
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

<style lang="scss" scoped>
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
  background: #fffadc;
  min-height: 100vh;
}

.md-title {
  font-size: 30px !important;
  margin: 2rem 0 1rem;
  color: #baaf72;
}
.md-subtitle {
  font-size: 20px;
  color: #baaf00;
}
.md-helper-text {
  color: #baaf00;
}
.md-table-head.md-numeric {
  text-align: center !important;
}
</style>
