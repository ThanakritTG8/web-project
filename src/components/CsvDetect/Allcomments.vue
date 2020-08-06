<template>
  <div id="all-comments">
      <table class="table">
        <thead class="thead">
          <tr>
            <th v-for="(obj, ind) in config" :key="ind">{{ obj.title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in theData" :key="index">
            <td v-for="(obj, ind) in config" :key="ind">{{ row[obj.key] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  name: "all-comments",
  data: () => ({
  }),
  props: ["theData", "config"],
};
</script>

<style scoped>
table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  background: rgb(253, 252, 252);
  border: 1px solid rgb(116, 114, 114);
}
table td,
table th {
  border: 1px;
  padding: 35px;
}
table tr:hover {
  background-color: #ddd;
}
table th {
  background: rgb(140, 180, 255);
}
table tr {
  border: 1px solid rgb(161, 161, 161);
}

</style>