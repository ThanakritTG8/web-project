<template>
  <div id="rating-page">
    <div class="wrapper">
      <div class="rating">
        <span class="star" name="1">&#9733;</span>
        <span class="star" name="2">&#9733;</span>
        <span class="star" name="3">&#9733;</span>
        <span class="star" name="4">&#9733;</span>
        <span class="star" name="5">&#9733;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "rating-page",
    components:{

    }
};
</script>

<script>
  // ส่วน javascript หาวิธีไม่ได้ หาเองได้ป่ะ
  // $(".star").on("click", function () {
  //     $(".star").addClass("selected");
  //     var count = $(this).attr("name");
  //     for (var i = 0; i < count - 1; i++) {
  //       $(".star").eq(i).removeClass("selected");
  //     }
  //   });
</script>

<style scoped>
.rating {
  unicode-bidi: bidi-override;
  direction: rtl;
  text-align: center;
}
.rating > span {
  display: inline-block;
  position: relative;
  /*width: 1.1em;*/
}
.rating > span:hover,
.rating > span:hover ~ span {
  color: transparent;
}
.rating > span:hover:before,
.rating > span:hover ~ span:before {
  content: "\2605";
  position: absolute;
  left: 0;
  color: gold;
  cursor: pointer;
}
span {
  font-size: 60px;
  color: white;
  text-shadow: 0px 5px 5px #000;
}
.wrapper {
  background-color: #55a0ef;
  box-shadow: 0px 2px 3px #000;
}
.selected {
  color: gold;
}
</style>