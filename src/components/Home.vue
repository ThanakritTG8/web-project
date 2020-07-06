<template>
  <div id="home">
    <h1 class="text-center">{{ text }}</h1>
    <section>
        <div class="card">
          <div class="card-body col-lg-4">
            <text-box></text-box>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import TextBox from '@/components/TextBox'

export default {
  name: 'home',
  components: {
    TextBox
  },
  data(){
    return {
      text: 'Detect Word Sense'
    }
  }

}
</script>

<style scoped>

    h1 {
    color: #fff;
    font-size: 3rem;
    padding-top: 102px;
    font-family: "Lato", Arial, sans-serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    }
    section {
    padding: 85px 70px;
    }
    .card {
    height: 500px;
    }
    #column{
    width: 100%;
    height: 10rem;
    }

</style>