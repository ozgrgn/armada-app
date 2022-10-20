<script>
      import Carousel from "svelte-carousel";

</script>
<div class="box flex justify-center mt-20 ">
  
    <div class=" w-full hidden md:block">
      <div class="outerb">
        
        <!-- Comments -->
        <div class="rows">
          <Carousel particlesToShow={6} particlesToScroll={1} dots={false} arrows={false} swiping="true" >
            <div>
              <div class="review-container">
                <div class="small-image">
                  <img
                    class="small-image"
                    src="/assets/img/clinic/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="review-container">
              <div class="small-image">
                <img
                  class="small-image"
                  src="/assets/img/clinic/2.png"
                  alt=""
                />
              </div>
            </div>
            <div class="review-container">
              <div class="small-image">
                <img
                  class="small-image"
                  src="/assets/img/clinic/3.png"
                  alt=""
                />
              </div>
            </div>
            <div class="review-container">
              <div class="small-image">
                <img
                  class="small-image"
                  src="/assets/img/clinic/4.png"
                  alt=""
                />
              </div>
            </div>
            <div class="review-container">
              <div class="small-image">
                <img
                  class="small-image"
                  src="/assets/img/clinic/5.png"
                  alt=""
                />
              </div>
            </div>
            <div class="review-container">
              <div class="small-image">
                <img
                  class="small-image"
                  src="/assets/img/clinic/6.png"
                  alt=""
                />
              </div>
            </div>
            <div class="review-container">
              <div class="small-image">
                <img
                  class="small-image"
                  src="/assets/img/clinic/7.png"
                  alt=""
                />
              </div>
            </div>
            <div class="review-container">
              <div class="small-image rounded">
                <img
                  class="small-image "
                  src="/assets/img/clinic/8.png"
                  alt=""
                />
              </div>
            </div>
          </Carousel>
          
        </div>
      </div>
    </div>
  </div>
  <style>
 .small-image {
  border-radius: 10px;
 }
  </style>