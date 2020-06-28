<template>
  <div id="all-comments">
    <table class="table table-striped table-inverse table-responsive">
      <thead class="thead-inverse">
        <tr>
          <th>Comment</th>
          <th>Translate Comment</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="comment in comments" :key="comment.id">
          <td>{{ comment.comment }}</td>
          <td>{{ comment.translate }}</td>
          <td>{{ comment.rating }}</td>
        </tr>
      </tbody>
    </table>


  </div>
</template>

<script>
export default {
  name: "AllComments",
  data() {
    return {
      data() {
        return;
      }
    };
  },
  props: {
    comments: Array
  }
};
</script>

<style scoped>
table {
  padding-left: 350px;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color: #ddd;}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}

</style>