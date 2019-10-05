<template>
  <article class="page-list">
    <h3>Pages</h3>
    <hr><br>
    <div>
      <b-table striped hover head-variant="light" :items="routes" :fields="fields"></b-table>
    </div>
  </article>
</template>

<script>
import { routes } from "@/router/router"
export default {
  data:()=>({
    routes,
    fields: [
      {key:'name',label: 'Страница'},
      {key:'accessDescr', label:'Доступ'},
      {key: 'path', label: 'Путь'}
    ]
  })
}
</script>
<style scoped>
.page-list{
  text-align: center;
  width: 60%;
  margin: 0 auto;
}
</style>