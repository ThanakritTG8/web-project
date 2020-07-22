<template>
  <div id="pagination">
    <section>
    <p class="pagination-container">
        <i class="fa fa-chevron-circle-left" @click="changePage(0)"></i>
        <i class="fa fa-chevron-left" @click="changePage(-1)"></i>
        <span class="inner-pagination-content">
            Showing Page {{ page }} of {{ pages }}
        </span>
        <i class="fa fa-chevron-right" @click="changePage(1)"></i>
        <i class="fa fa-chevron-circle-right" @click="changePage(pages)"></i>
        <span class="pagination-seperator">|</span>
            Showing:
            <a                 
                class="showing"
                :class="perPage === amount && 'active'"
                v-for="(amount, index) in perPageOptions"
                :key="index"
                @click="setPerPage(amount)">
            {{amount}}
            </a>
    </p>
    </section>
  </div>
</template>

<script>
export default {
    name:'pagination',
    props: ['totalRecords', 'perPageOptions'],
    data: function () {
        return {
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
            this.$emit('input', {page: this.page, perPage: amount})
        },
        changePage (val) {
            switch (val) {
                case 0: this.page = 1; break;
                case -1: this.page = this.page > 1 ? this.page - 1 : this.page; break;
                case 1: this.page = this.page < this.pages ? this.page + 1 : this.page; break;
                case this.pages: this.page = this.pages; break;
            }
            this.$emit('input', { page: this.page, perPage: this.perPage })
        }
    }
}
</script>

<style>
    p {
        font-size: 20px;   
    }
    span, a {
        word-spacing: 5px;
    }
    a, i:hover {
        color: #C1FFED;
    }
</style>