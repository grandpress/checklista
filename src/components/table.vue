<template>
  <div class="rightSide">
    <form no-validate @submit="submitForm">
      <md-table
        v-model="searched"
        md-sort="id"
        md-sort-order="asc"
        md-card
        @md-selected="onSelect"
      >
        <md-table-toolbar>
          <div class="md-toolbar-section-start">
            <h1 class="md-title">Checklista</h1>
          </div>
          <md-field md-clearable class="md-toolbar-section-end">
            <md-input
              placeholder="Wyszukaj po nazwie"
              v-model="search"
              @input="searchOnTable"
            />
          </md-field>
        </md-table-toolbar>
        <md-table-empty-state
          md-label="Brak wyników :("
          :md-description="`Nie znaleźliśmy wyników dla frazy ${search}. Spróbuj z inną, lub skontaktuj się z administratorem!`"
        ></md-table-empty-state>
        <md-table-row
          slot="md-table-row"
          md-selectable="multiple"
          slot-scope="{ item }"
        >
          <md-table-cell md-label="id" md-numeric>{{ item.id }}</md-table-cell>
          <md-table-cell md-label="Nazwa">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Dobrze | Uwaga | Źle">
            <md-radio v-model="item.status" value="dobrze">|</md-radio>
            <md-radio v-model="item.status" value="uwaga">|</md-radio>
            <md-radio v-model="item.status" value="zle"></md-radio>
          </md-table-cell>
        </md-table-row>
      </md-table>
      <div class="otherElements">
        <div>
          <md-field md-clearable class="md-primary domainName">
            <label>Domena</label>
            <md-input required v-model="form.domainName" />
            <span class="md-error">There is an error</span>
          </md-field>
        </div>
        <div>
          <md-field class="mainPhoto">
            <label>Wybierz zdjęcie</label>
            <md-file
              required
              md-inline
              v-model="form.mainImg"
              accept="image/*"
              @change="processFileUpload"
            />
          </md-field>
        </div>
      </div>
      <div class="generateSection">
        <md-button
          type="submit"
          @click="trackClick"
          class="md-accent md-raised generateButton"
          >Generuj</md-button
        >
        <p class="isLoading" v-if="isLoading">
          Trwa generowanie PDF, proszę czekać...
        </p>
      </div>

      <md-snackbar
        md-position="center"
        :md-duration="duration"
        :md-active.sync="showSnackbar"
        md-persistent
      >
        <span>Uzupełnij statusy dla podanych ID: {{ emptyStatuses }}</span>
      </md-snackbar>
    </form>
  </div>
</template>

<script>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import footer from "../assets/footer.png";
import header from "../assets/header.jpg";
import htmlToPdfmake from "html-to-pdfmake";
import success from "../assets/statuses/success.jpg";
import warning from "../assets/statuses/warning.jpg";
import error from "../assets/statuses/error.jpg";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
const toLower = (text) => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter((item) => toLower(item.name).includes(toLower(term)));
  }
  return items;
};

export default {
  name: "TableSearch",
  props: ["pointsIncoming", "textData", "button"],
  data: () => ({
    form: {
      domainName: "",
      mainImg: null,
    },
    showSnackbar: false,
    emptyStatuses: "",
    duration: 5000,
    statuses: {},
    search: null,
    searched: [],
    isLoading: false,
    selected: [],
    base64Images: [],
  }),
  created() {
    const vm = this;
    this.searched = this.$props.pointsIncoming;
    (async function () {
      vm.statuses.dobrze = await vm.getBase64ImageFromURL(success);
      vm.statuses.uwaga = await vm.getBase64ImageFromURL(warning);
      vm.statuses.zle = await vm.getBase64ImageFromURL(error);
    })();
  },
  methods: {
    trackClick() {
      this.$lyticus.trackClick(this.button);
    },
    searchOnTable() {
      this.searched = searchByName(this.pointsIncoming, this.search);
    },
    sortCheckedItems(a, b) {
      const indexA = a.id;
      const indexB = b.id;

      let comparison = 0;
      if (indexA > indexB) {
        comparison = 1;
      } else if (indexA < indexB) {
        comparison = -1;
      }
      return comparison;
    },
    onSelect(items) {
      this.prepareBase64Images(items);
      this.selected = items;
    },
    prepareBase64Images(items) {
      items.forEach(async (singleItem) => {
        let currentImage = singleItem.img;
        if (currentImage) {
          this.base64Images[singleItem.id] = await this.getBase64ImageFromURL(
            currentImage
          );
        }
      });
    },
    processFileUpload(e) {
      var vm = this;
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      var FR = new FileReader();
      FR.addEventListener("load", async function (e) {
        vm.base64Images["mainPhoto"] = await vm.getBase64ImageFromURL(
          e.target.result
        );
      });
      FR.readAsDataURL(files[0]);
      vm.form.mainImg = files[0];
    },
    prepareHtmlFromObject() {
      let htmlContent =
        "" +
        "<style>p{margin-bottom: 0;}</style>" +
        `<div class="pagebreak">  </div><subheader class="subheader pdf-pagebreak-before">Wstęp</subheader>${this.textData.introduction}`;
      this.selected.forEach((singleItem, index) => {
        let headerNumber = index + 1;
        let currentImage = singleItem.id;
        let modifiedContent = singleItem.content.replace(
          /images\/[0-9]+.[0-9]+\.png/i,
          this.base64Images[currentImage]
        );
        modifiedContent = modifiedContent.replace(
          /<subheader class="subheader pdf-pagebreak-before">/,
          `<subheader class="subheader pdf-pagebreak-before">${headerNumber}. `
        );
        modifiedContent = modifiedContent.replace(
          /<\/subheader>/,
          `</subheader><img height="26" width="322" style="margin-top:12px;" alt="" src="${
            this.statuses[singleItem.status]
          }" />`
        );
        htmlContent += '<div class="pagebreak">  </div>' + modifiedContent;
      });
      htmlContent = htmlToPdfmake(htmlContent);
      htmlContent.forEach((item) => {
        if (item.style && item.style.includes("pagebreak")) {
          item.pageBreak = "before";
        }
      });
      return htmlContent;
    },
    async submitForm(e) {
      e.preventDefault();
      this.selected.sort(this.sortCheckedItems);
      var vm = this;
      vm.isLoading = true;
      let withoutStatuses = "";
      const selectedLen = this.selected.length;
      this.selected.map((item, i) => {
        if (item.status === "") {
          vm.isLoading = false;
          if (i + 1 !== selectedLen) {
            withoutStatuses += item.id + " | ";
          } else {
            withoutStatuses += item.id;
          }
        }
      });
      if (withoutStatuses) {
        this.emptyStatuses = withoutStatuses;
        this.showSnackbar = true;
      } else {
        let preparedHtml = await this.prepareHtmlFromObject();
        let docDefinition = {
          header: {
            margin: [40, 10, 10, 10],
            image: await this.getBase64ImageFromURL(header),
            width: 500,
          },
          footer: {
            margin: [20, 10, 10, 0],
            image: await this.getBase64ImageFromURL(footer),
            width: 530,
          },
          pageMargins: [40, 120, 60, 150],
          content: [
            {
              text: "Analiza UI",
              style: "title",
              alignment: "center",
            },
            {
              text: this.form.domainName,
              alignment: "center",
              style: "domain",
            },
            {
              image: this.base64Images["mainPhoto"],
              width: 400,
              alignment: "center",
              margin: [0, 10, 0, 0],
            },
            preparedHtml,
          ],

          styles: {
            title: {
              fontSize: 22,
              color: "#001872",
            },
            domain: {
              fontSize: 18,
            },
            subheader: {
              fontSize: 16,
              color: "#001872",
            },
            dobrze: {
              fontSize: 14,
              color: "#4E9A06",
            },
            uwaga: {
              fontSize: 14,
              color: "#F6CB20",
            },
            zle: {
              fontSize: 14,
              color: "#F44336",
            },
          },
          defaultStyle: {
            fontSize: 10,
            font: "Muli",
          },
        };
        let fonts = {
          Muli: {
            normal: location.origin + "/fonts/Muli/Muli.ttf",
            bold: location.origin + "/fonts/Muli/Muli-Bold.ttf",
            italics: location.origin + "/fonts/Muli/Muli-Italic.ttf",
            bolditalics: location.origin + "/fonts/Muli/Muli-BoldItalic.ttf",
          },
        };
        pdfMake
          .createPdf(docDefinition, null, fonts)
          .download(this.form.domainName + "-Analiza-UI.pdf", function () {
            vm.isLoading = false;
          });
      }
    },
    getBase64ImageFromURL(url) {
      return new Promise((resolve, reject) => {
        var img = new Image();
        img.setAttribute("crossOrigin", "anonymous");
        img.onload = () => {
          var canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          var dataURL = canvas.toDataURL("image/png");
          resolve(dataURL);
        };
        img.onerror = (error) => {
          reject(error);
        };
        img.src = url;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.md-field {
  max-width: 300px;
}

.md-table-cell.md-numeric {
  text-align: center !important;
}

.md-table-head {
  text-align: center;
}

.isLoading {
  color: #fff;
}

.generateSection {
  width: 100%;
  background: #424242;
  padding: 10px 16px;
  text-align: left;
}

.generateButton {
  border-radius: 25px;
}

.otherElements {
  width: 100%;
  margin: 0;
  background: #424242;
  max-width: none;
  padding-top: 1rem;
}

.otherElements .md-field {
  max-width: none;
  width: 95%;
  margin-bottom: 0;
}

.domainName,
.mainPhoto {
  margin: 1rem 2rem;
}

.md-field.md-theme-default:before {
  background: #64dd17;
}

.md-focused label,
.md-has-value label,
.md-field.md-theme-default.md-has-value .md-input,
.md-focused .md-input {
  color: #fff !important;
}

.md-card.md-theme-default {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.rightSide {
  margin-bottom: 2rem;
}

.md-snackbar {
  background-color: #920303 !important;
  color: #fff !important;
}
</style>
