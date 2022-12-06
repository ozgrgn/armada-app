<script>
  import Carousel from "svelte-carousel";
  import { lang } from "../../../services/store";
  import { Translate } from "../../../services/language.js";
  export let reviews;

  let filteredReviews = reviews.filter((filteredReviews) => {
    return filteredReviews.reviewLang == $lang;
  });
  console.log(reviews, "reviews");
  let toShow;
  let toScroll;
  let dots;
  if (window.innerWidth <= 640) {
    toShow = 1;
    toScroll = 1;
  } else {
    toShow = 4;
    toScroll = 3;
  }

  $: filteredReviews = reviews.filter((filteredReviews) => {
    return filteredReviews.reviewLang == $lang;
  });
</script>

<!-- REVIEWS -->
<div class="box mx-5 md:mx-0 hidden-xs">
  <div class="container ">
    <div class="outerb">
      <div class="rows">
        <Carousel
          particlesToShow={toShow}
          particlesToScroll={toScroll}
          dots={false}
        >
          {#each filteredReviews as review}
            <div class="review-container">
              <a
                class="review-header "
                rel="external"
                href={review.reviewLink}
                target="_blank"
              >
                <div class="review-avatar">
                  <div
                    class="review-avatar-bg flex flex-col justify-center text-center "
                  >
                    {#if review.reviewAvatar}
                      <img
                        src={`https://super--bucket.s3.eu-west-3.amazonaws.com/${review.reviewAvatar}`}
                        alt=""
                        width="44"
                        height="44"
                        class="ReviewAvatar__Avatar-sc-1lraoly-2 TOyBs"
                      />
                    {:else}
                      {review.reviewName.charAt(0)}
                    {/if}
                  </div>
                </div>
                <div class="review-info">
                  <span class="review-author">{review.reviewName}</span>
                  <div class="review-info2">
                    <div class="ratings">
                      <div class="empty-stars" />
                      <div
                        class="full-stars-tp {review.reviewPlatform == 'Google'
                          ? 'g-color'
                          : review.reviewPlatform == 'TrustPilot'
                          ? 't-color'
                          : review.reviewPlatform == 'Facebook'
                          ? 'f-color'
                          : ''} {review.reviewStars == 1
                          ? 'w-1/5'
                          : review.reviewStars == 2
                          ? 'w-2/5'
                          : review.reviewStars == 3
                          ? 'w-3/5'
                          : review.reviewStars == 4
                          ? 'w-4/5'
                          : 'w-full'}"
                      />
                      <img
                        style="width:85px"
                        src="assets/images/reviews/stars.svg"
                        alt=""
                      />
                    </div>
                    <div class="review-date hidden xl:block">
                      {review.reviewDate}
                    </div>
                  </div>
                </div></a
              >
              <div class="review-text">
                <div class="review-text-outer">
                  <div class="review-text-inner">
                    <div>
                      {review.reviewText}
                    </div>
                  </div>
                </div>
              </div>
              <a href={review.reviewLink}>
                <div class="review-readmore">{$Translate("readmore")}</div></a
              >
              <a
                class="review-link"
                href={review.reviewLink}
                target="_blank"
                rel="noopener noreferrer nofollow"
                ><div class="review-logo-container">
                  <div class="review-postedon">{$Translate("posted_on")}</div>
                  <div title="Google" class="review-icon w-28">
                    <div>
                      <img
                        src="assets/img/reviews/{review.reviewPlatform}.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div></a
              >
            </div>
          {/each}
        </Carousel>
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    z-index: 49;
  }
  /* REVIEWS */

  .box {
    margin-top: -180px;
    display: flex;
    justify-content: center;
  }

  .box .outerb {
    min-height: 150px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 5px 5px 10px 0 rgba(97, 97, 97, 0.7);
  }
  /* REVIEWS */
  .g-color {
    color: rgb(252, 191, 2) !important;
  }
  .t-color {
    color: #00b67b !important;
  }
  .f-color {
    color: #4267b2 !important;
  }
  .review-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    padding-top: 20px;
  }
  .review-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 18px;
    padding-top: 40px;
  }
  .review-header {
    flex-wrap: nowrap !important;
    display: flex !important;
    position: static !important;
    color: inherit !important;
    max-width: 100% !important;
    text-decoration: none !important;
    border: none !important;
  }
  .review-avatar {
    flex: 0 0 auto;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    overflow: hidden;
  }
  .review-avatar-bg {
    width: 100%;
    height: 100%;
    transition: opacity 1s ease-out 0s;
    background-color: rgb(210, 210, 210);
    border-radius: 50%;
    overflow: hidden;
    opacity: 1;
  }
  .review-info {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    min-width: 0px;
  }
  .review-author {
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    color: rgb(17, 17, 17);
  }
  .review-info2 {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
  }
  .ratings {
    position: relative;
    vertical-align: top;
    display: inline-block;
    color: #b1b1b1;
    overflow: hidden;
  }

  .full-stars-tp {
    position: absolute;
    left: 0;
    top: 0;
    white-space: nowrap;
    overflow: hidden;
  }
  .empty-stars:before,
  .full-stars-tp:before {
    content: "\2605\2605\2605\2605\2605";
    font-size: 12pt;
  }
  .empty-stars:before {
    -webkit-text-stroke: 1px #b1b1b1;
  }

  /* Webkit-text-stroke is not supported on firefox or IE */

  /* Firefox */
  @-moz-document url-prefix() {
    .full-stars {
      color: rgb(252, 191, 2) !important;
    }
  }
  .review-date {
    padding-left: 10px;
    overflow: hidden;
    min-width: 0px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: rgba(17, 17, 17, 0.5);
  }
  .review-text {
    font-weight: 400;
    margin-top: 8px;
    width: 100%;
    line-height: 1.3;
    color: rgb(17, 17, 17);
    font-size: 13px;
    text-align: left;
  }
  .review-text-outer {
    position: relative;
    overflow: hidden;
    height: 67px;
    width: 100%;
    line-height: 1.3;
    color: rgb(17, 17, 17);
    font-size: 13px;
    text-align: left;
  }
  .review-link {
    margin-top: 12px;
    display: block !important;
    position: static !important;
    color: inherit !important;
    max-width: 100% !important;
    text-decoration: none !important;
    border: none !important;
  }
  .review-postedon {
    color: rgba(17, 17, 17, 0.5);
    font-family: Montserrat;
    font-weight: 400;
    font-size: 13px;
  }
  .review-icon {
    font-size: 18px !important;
    flex: 0 1 0%;
  }
  .review-readmore {
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    color: rgba(17, 17, 17, 0.5);
  }
</style>
