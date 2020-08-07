<template>
  <div id="comment-page">
    <div id="space"></div>
    <div class="row">
      <div class="col-lg-8" id="comments">
        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-8">
        

            <pagination
              class="paginate text-right"
              :totalRecords="tableData.length"
              :perPageOptions="perPageOptions"
              v-model="pagination"
            />
          </div>
        </div>
    
        <all-comments
          :theData="computedTableData"
          :config="config"
        />
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 text-center">
        <div id="blank"></div>
        <div class="card bg-white">
          <div class="card-body">
            <accuracy />
          </div>
        </div>
        <div class="card bg-white">
          <div class="card-body">
            <pos-neg />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accuracy from "@/components/CsvDetect/Accuracy";
import PosNeg from "@/components/CsvDetect/PosNeg";
import AllComments from "@/components/CsvDetect/AllComments";
import Pagination from "@/components/CsvDetect/Pagination";


const perPageOptions = [10, 20, 50];

export default {
  name: "comment-page",
  components: {
    Accuracy,
    PosNeg,
    AllComments,
    Pagination,
    
  },props:{value:Number},
  data: function () {
    return {
      perPageOptions,
      tableData: [],
      pagination: { page: 1, perPage: perPageOptions[0] },
      rating: 0,
      config: [
        {
          key: "Review",
          title: "Review",
          type: "text",
        },
        {
          key: "Rating",
          title: "Rating",
          type: "number",
        },
      ],
    };
  },
  computed: {
    computedTableData() {
      if (!this.tableData) return [];
      else {
        const firstIndex = (this.pagination.page - 1) * this.pagination.perPage;
        const lastIndex = this.pagination.page * this.pagination.perPage;

        return this.tableData.slice(firstIndex, lastIndex);
      }
    },
  },
  mounted() {
    var text = [];
    this.$axios
      .get("http://localhost:5000/PatongBeachTripadvisor")
      .then(({ data }) => {
        if(this.value==0){
        for (const key in data) {
            text.push(data[key]);
        }      
          this.tableData = text;
        }
        else{
        for (const key in data) {
          if ((data[key].Rating = this.value)) {
            text.push(data[key]);
          }
          this.tableData = text;
        }
        }
      });
  },
}
</script>

<style scoped>
.card {
  height: 300px;
  border-radius: 20px;
  margin-bottom: 35px;
}
/* #space {
  margin-top: 60px;
} */
#blank {
  margin-top: 60px;
}
.paginate {
  margin-bottom: 30px;
}
</style>