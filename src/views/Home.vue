<template>
  <div class="wrapper">
    <h1>Wybierz checkliste</h1>
    <div class="cards-wrapper">
      <div class="card">
        <div class="card__top-background red">
          <div class="card__circle">
            <span
              ><img src="../../public/img/Icons/online-shopping.svg"
            /></span>
          </div>
        </div>
        <div class="card__bottom-background">
          <h3 class="card__title">Checklista UI dla ecommerce</h3>
          <router-link class="card__link-to" to="/ecommerce-checklist"
            >Wejdź</router-link
          >
        </div>
      </div>
      <div class="card">
        <div class="card__top-background blue">
          <div class="card__circle">
            <span><img src="../../public/img/Icons/clipboard.svg" /></span>
          </div>
        </div>
        <div class="card__bottom-background">
          <h3 class="card__title">Checklista UI - strona usługowa</h3>
          <router-link class="card__link-to" to="/services-checklist"
            >Wejdź</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@font-face {
  font-family: "Roboto", sans-serif;
  src: url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
}
body {
  position: relative;
  color: black;
  background-color: #f8f8f8;
}
div.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  h1 {
    text-align: center;
  }
  .cards-wrapper {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 85%;
    min-height: 60vh;
    .card {
      display: flex;
      flex-direction: column;
      width: 268px;
      height: 321px;
      margin: 0 100px;
      box-shadow: 0 4px 4px 0 rgba(#000000, 0.25);
      transition: 0.3s linear all;
      &:hover {
        box-shadow: 0 4px 20px 0 rgba(#000000, 0.25);
      }
      .card__top-background {
        height: 50%;
        position: relative;
        &.red {
          background: linear-gradient(
            40deg,
            rgba(255, 255, 255, 100%) 20%,
            rgba(249, 162, 162, 100%)
          );
        }
        &.blue {
          background: linear-gradient(
            40deg,
            rgba(255, 255, 255, 100%) 20%,
            rgba(175, 218, 245, 100%)
          );
        }
        .card__circle {
          background-color: white;
          position: absolute;
          top: 50%;
          left: 50%;
          width: 95px;
          height: 95px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
      .card__bottom-background {
        height: 50%;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .card__link-to {
          font-size: 18px;
          text-transform: uppercase;
          margin: 0 10% 0 auto;
          transition: 0.3s linear all;
          &::after {
            content: "\2192";
            opacity: 0;
            display: inline-block;
            transition: 0.3s all linear;
          }
          &:hover {
            color: rgb(33, 33, 33);
            text-decoration: none;
            transform: scale(1.1);
            &::after {
              opacity: 1;
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
a {
  color: black;
}
h1 {
  margin: 100px;
}
</style>