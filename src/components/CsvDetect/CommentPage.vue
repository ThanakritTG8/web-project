<template>
  <div id="comment-page">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 text-center">
        <div class="card bg-white">
          <div class="card-body">
            <accuracy />
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 text-center">
        <div class="card bg-white">
          <div class="card-body">
            <pos-neg />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">  
        <pagination 
        v-if="tableData"
        :totalRecords="tableData.length"
        :perPageOptions="perPageOptions"
        v-model="pagination"
        />
        <all-comments 
        v-if="tableData"
        :theData="computedTableData"
        :config="config"
        :style="{height: '600px'}"
        />
      </div>
      <div class="col-lg-4"></div>
    </div>
  </div>
</template>

<script>
import Accuracy from '@/components/CsvDetect/Accuracy'
import PosNeg from '@/components/CsvDetect/PosNeg'
import AllComments from '@/components/CsvDetect/AllComments'
import Pagination from '@/components/CsvDetect/Pagination'

const perPageOptions = [10, 20 ,50]

export default {
    name: 'comment-page',
    components: {
        Accuracy,
        PosNeg,
        AllComments,
        Pagination
    },  
    data: function ()  {
      return {
        perPageOptions,
        tableData: undefined,
        pagination: { page: 1, perPage: perPageOptions[0] },
        config: [
            {
              key: "Review",
              title: "Review",
              type: "text"
            },
            {
              key: "Rating",
              title: "Rating",
              type: "number"
            }
          ]
        }
      },
  computed: {
    computedTableData () {
      if (!this.tableData) return []
      else {
        const firstIndex = (this.pagination.page - 1) * this.pagination.perPage
        const lastIndex = this.pagination.page * this.pagination.perPage

        return this.tableData.slice(firstIndex, lastIndex)
      }
    }
  },
  mounted() {
    this.$axios
      .get("http://localhost:5000/PatongBeachTripadvisor")
      .then(({ data }) => {
        this.tableData = data;
      });
  },
    
    methods: {

    },
};
</script>

<style scoped>
.row {
  margin-top: 60px;
}
button {
  text-align: center;
  margin-top: 60px;
}
.card {
  height: 300px;
  margin-bottom: 50px;
}
</style>