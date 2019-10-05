<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
import tabledata from '@/mixins/tabledata'
export default {
  mixins:[tabledata],
  data:()=>({

  })
}
</script>
<style scoped>
.table {
  width: 80% !important;
  margin: 0 auto !important;
}
</style>