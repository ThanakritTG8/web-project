<template>
  <div id="text-box">
    <div class="form-group">
      <textarea class="form-control" cols="30" rows="10" placeholder="text input" />
    </div>

    <div class="row">
      <div class="col-6 text-left">
        <router-link to="/Csv">
            <button type="button" class="btn btn-primary">
            Import CSV
            </button>
        </router-link>
      </div>
      <div class="col-6 text-right">
        <button type="button" class="btn btn-primary">Detect</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TextBox'
};
</script>

<style scoped>
button {
  margin-top: 50px;
  width: 120px;
  height: 50px;
  border-radius: 10px;
}
router-link{
    color: #ffffff;
}
</style>