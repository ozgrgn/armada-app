<script>
  import { onMount } from "svelte";
  import { lang } from "../../../services/store";

export let home;
console.log(home,"efse")

  let heroVideo;
  onMount(() => {
    if (typeof heroVideo.loop == "boolean") {
      heroVideo.loop = true;
    } else {
      heroVideo.on(
        "ended",
        () => {
          this.currentTime = 0;
          this.play();
        },
        false
      );
    }
  });
</script>

<section class="showcase" id="home">
  <div class="video-container">
    <video
      src="assets/dental.webm"
      autoplay
      muted
      playsinline
      bind:this={heroVideo}
    />
  </div>

  <div class="  content content-end text-gray-300">
    <div class=" mt-80 text-center">
      <h1
        class="text-5xl tracking-tight font-extrabold text-white sm:text-5xl md:text-xxl"
      >
        <span class=" block xl:inline">{home.entHeader[`${$lang}`]}
        </span>
      </h1>
    </div>
    <div class=" text-center w-full">
      <img
        class="text-center w-96 inline pt-2"
        src="assets/img/logos/smilewhite.png"
        alt=""
      />
    </div>
  </div>
</section>

<style>
  h1 {
    font-size: 3.5rem;
  }
  .showcase {
    height: 100vh;
    position: relative;
  }
  /* TODO, Fallback background here */
  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .video-container video {
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
  .video-container:after {
    content: "";
    z-index: 1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: #00000031;
    position: absolute;
  }
  .content {
    box-shadow: inset 50vw 0 70px -7px rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    /* background-color: rgba(0, 0, 0, 0.5); */
    background-image: linear-gradient(
      to right top,
      #039be520,
      #1da5ea20,
      #2fafee20,
      #3fb9f320,
      #4fc3f720
    );
  }
</style>
