<script>
export default{
    name: 'SearchPage',
    data(){
        return{

        }
    }
}
</script>

<template>
      <div class="top-nav">
    <div style="display: flex;">
      <div></div>
      <input type="text" placeholder="Search Product">
      <div id="searchstuff"></div>
    </div>
  </div>
<p>Search</p>
</template>

<style>
#searchstuff{
    background-image: url(../Jeji/Search.svg);
    width: 50px;
    height: 50px;
}
</style>