<!-- I am a simple page sub title -->
<script>
  export let subtitle
</script>

<!-- <h2 class="w-[800px] bg-indigo-700 rounded-full text-xl text-white pl-8 ml-12 mt-2 shadow shadow-inner shadow-md shadow-white">{@html subtitle}</h2> -->


<div class="">
  <h1 class="special">Style Three
    <!-- <span>Example Tagline Text</span> -->
  </h1>
</div>
            <!-- Component starts here -->
<div class="container">
  <p>{subtitle}</p>
</div>
<style>
 .container{
    width: 60%;
    margin: 1rem ;
    /* padding: 2rem; */
    text-align: justify;
    transition: all 0.3s;
}
.container p{
    line-height: 1.5;
    letter-spacing: 0.3px;
    word-spacing: 2px;
}

.container p:first-child::first-letter{
    color:#FE5F55;
    font-weight: bold;
    font-size: 70px;
    float: left;
    line-height: 60px;
    padding-right: 2px;
    margin-top: -3px;
}
</style>