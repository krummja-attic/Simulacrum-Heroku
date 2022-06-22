<template>
  <div class="card">
    <div class="face face1">
      <div class="content">
        <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
        <h3>Design</h3>
      </div>
    </div>
    <div class="face face2">
      <div class=content>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  cursor: pointer;

  & .face {
    width: 300px;
    height: 200px;
    transition: 0.5s;
  }
}

.card {
  & .face.face1 {
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);

    & .content {
      opacity: 0.2;
      transition: 0.5s;
      width: auto;

      & img {
        max-width: 100px;
      }

      & h3 {
        margin: 10px;
        padding: 0;
        color: #fff;
        text-align: center;
        font-size: 1.5em;
      }
    }
  }

  & .face.face2 {
    position: relative;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    transform: translateY(-100px);

    & .content {
      color: black;

      p {
        margin: 0;
        padding: 0;
      }

      a {
        margin: 15px 0 0;
        display: inline-block;
        text-decoration: none;
        font-weight: 900;
        color: #300;
        padding: 5px;
        border: 1px solid #333;

        &:hover {
          background: #333;
          color: #fff;
        }
      }
    }
  }

  &:hover {
    & .face.face1 {
      background: #ff0057;
      transform: translateY(0);

      & .content {
        opacity: 1;
      }
    }

    & .face.face2 {
      transform: translateY(0);
    }
  }
}
</style>
