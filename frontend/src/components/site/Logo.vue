<template>
  <div id="logo">
    <router-link :to="'/'">
      <div id="logo-view">
        <svg viewBox="-10 -10 290 170">
          <path
            d="
              M 125,0 95,17.5 65,35 35,52.5 5,70 35,87.5 65,105 95,87.5 125,70 
              V 35 
              Z 

              m 10,0 
              V 35 70 
              L 165,87.5 195,105 225,87.5 255,70 225,52.5 195,35 165,17.5 
              Z 

              M 0,80 
              v 35 27.91602 
              L 11.085938,136.44922 53.927734,111.45898 30,97.5 
              Z 

              M 130,80 100,97.5 76.072266,111.45898 130,142.91602 183.92773,111.45898 160,97.5 
              Z 

              m 130,0 -30,17.5 -23.92773,13.95898 41.0625,23.95313 
              L 260,142.91602 
              V 115 
              Z
            "
          />
        </svg>
      </div> <!-- /logo-view -->
    </router-link>
  </div> <!-- /logo -->
</template>

<style lang="scss" scoped>
$aberration: 6px;

#logo {
  &-view {
    position: relative;
        
    svg {
      width: 200px;
      height: 120px;
      fill: rgba(247, 243, 239, 0.5);
        
      transition-property: fill, filter;
      transition-duration: 0.1s;
      transition-timing-function: cubic-bezier();
      
      &:hover {
        transition-property: fill, filter;
        transition-duration: 0.6s;
        transition-timing-function: cubic-bezier();

        fill: rgba(255, 255, 255, 1);
        filter: 
          drop-shadow(-$aberration 0 rgba(255, 0, 0, 1))
          drop-shadow($aberration 0 rgba(0, 255, 0, 1))
          drop-shadow(0 $aberration rgba(0, 0, 255, 1));
      }

      &:active {
        transition-property: fill, filter;
        transition-duration: 0.1s;
        transition-timing-function: cubic-bezier();

        fill: rgba(255, 255, 255, 1);
        filter: 
          drop-shadow((-$aberration - 5) 0 rgba(255, 0, 0, 1))
          drop-shadow(($aberration + 5) 0 rgba(0, 255, 0, 1))
          drop-shadow(0 ($aberration + 5) rgba(0, 0, 255, 1));
      }
    }
  }
}
</style>