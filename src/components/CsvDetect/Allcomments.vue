<template>
  <div id="all-comments">
      <table class="table table-striped bg-white">
        <thead class="thead-inverse">
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
  props: ['theData', 'config']

};
</script>

<style scoped>

table {
  margin-top: 50px;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td,
table th {
  border: 1px solid #ddd;
  padding: 35px;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #4caf50;
  color: white;
}
</style>