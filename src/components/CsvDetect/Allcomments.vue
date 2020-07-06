<template>
  <div id="all-comments">
    <table class="table">
      <thead class="thead-inverse">
        <tr>
          <th v-for="(obj, ind) in config" :key="ind">{{ obj.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableData" :key="index">
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
      tableData: undefined,
      config: [
          {
              key: 'Review',
              title: 'Review'
          },
          {
              key: 'Name',
              title: 'Name'
          },
          {
              key: 'Address',
              title: 'Address'
          },
          {
              key: 'Time',
              title: 'Date'
          },
          {
              key: 'Rating',
              title: 'Rating'
          },
          {
              key: 'Thai',
              title: 'Thai'
          }
          
      ]
  }),
  mounted() {
    this.$axios.get("http://localhost:5000/PatongBeachTripadvisor").then(({ data }) => {
      this.tableData = data;
    });
  }
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
  padding: 8px;
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
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>