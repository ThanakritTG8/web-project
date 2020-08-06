<template>
  <div id="pagination">
    <section>
    <h4 class="pagination-container">
       <a href="#"> <i class="fa fa-chevron-circle-left" @click="changePage(0)"></i></a>
        <a href="#"> <i class="fa fa-chevron-left" @click="changePage(-1)"></i></a>
        <span class="inner-pagination-content">
            Showing Page {{ page }} of {{ pages }}
        </span>
       <a href="#">  <i class="fa fa-chevron-right" @click="changePage(1)"></i></a>
        <a href="#"> <i class="fa fa-chevron-circle-right" @click="changePage(pages)"></i></a>
        <span class="pagination-seperator">|</span>
            Showing:
            <a href="#"                
                class="showing"
                :class="perPage === amount && 'active'"
                v-for="(amount, index) in perPageOptions"
                :key="index"
                @click="setPerPage(amount)">
            {{amount}}
            </a>
           
    </h4>
    </section>
  </div>
</template>

<script>
export default {
    name:'pagination',
    props: ['totalRecords', 'perPageOptions'],
    data: function () {
        return {
           num:0,
            page: 1,
            perPage: this.perPageOptions[0]
        }
    },
    computed: {
        pages () {
            const remainder = this.totalRecords % this.perPage
            if (remainder > 0) {
                return Math.floor(this.totalRecords / this.perPage) + 1
            } else {
                return this.totalRecords / this.perPage
            }
        }
    },
    methods: {
        setPerPage(amount) {
            this.perPage = amount
            this.page = 1
            this.$emit('input', {page: this.page, perPage: amount})
        },
        changePage (val) {
            
         if(this.num%2==1){
            switch (val) {
                case 0: this.page = this.pages; break;
                case -1: this.page = this.page > 1 ? this.page - 1 : this.page; break;
                case 1: this.page = this.page < this.pages ? this.page + 1 : this.page; break;
                case this.pages: this.page = 1; break;
                default : this.page = 1 ; break;
                
            }
            }
        
            if(this.num%2==0){
            switch (val) {
                case 0: this.page = 1; break;
                case -1: this.page = this.page > 1 ? this.page - 1 : this.page; break;
                case 1: this.page = this.page < this.pages ? this.page + 1 : this.page; break;
                case this.pages: this.page = this.pages; break;
                default : this.page = 1 ; break;
                
            }
            }
            this.$emit('input', { page: this.page, perPage: this.perPage })
            this.num+=1
        }
    }
}
</script>

<style scoped>
    p {
        font-size: 20px;   
    }
    span {
        word-spacing: 5px;
        color: #000000;
    }
    a{
        color: rgb(82, 82, 247);
    }
    a:hover {
        color: rgb(5, 192, 120);
    }
</style>