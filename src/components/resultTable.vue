<template>
  <div class="oikura">
    <div class="blockTitle"><h2>{{ $t("Detail") }}</h2></div>
    <div class="block_table"  v-if="tabelData.length>0">
      <table>
        <thead>
          <tr>
            <th rowspan="2">{{ $t('Pattern') }}</th>
            <th rowspan="2">{{ $t('Total Probability') }}</th>
            <th rowspan="2">{{ $t('Probability') }}</th>
            <th colspan="2">{{ $t('Mon') }}</th>
            <th colspan="2">{{ $t('Tue') }}</th>
            <th colspan="2">{{ $t('Wed') }}</th>
            <th colspan="2">{{ $t('Thu') }}</th>
            <th colspan="2">{{ $t('Fri') }}</th>
            <th colspan="2">{{ $t('Sat') }}</th>
          </tr>
          <tr>
            <th>{{ $t('AM') }}</th>
            <th>{{ $t('PM') }}</th>
            <th>{{ $t('AM') }}</th>
            <th>{{ $t('PM') }}</th>
            <th>{{ $t('AM') }}</th>
            <th>{{ $t('PM') }}</th>
            <th>{{ $t('AM') }}</th>
            <th>{{ $t('PM') }}</th>
            <th>{{ $t('AM') }}</th>
            <th>{{ $t('PM') }}</th>
            <th>{{ $t('AM') }}</th>
            <th>{{ $t('PM') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tabelData">
            <td>{{ $t(item.pattern) }}</td>
            <td>{{ item.total_Probability }}%</td>
            <td>{{ item.Probability }}%</td>
            <td>{{ item.price[0].am }}</td>
            <td>{{ item.price[0].pm }}</td>
            <td>{{ item.price[1].am }}</td>
            <td>{{ item.price[1].pm }}</td>
            <td>{{ item.price[2].am }}</td>
            <td>{{ item.price[2].pm }}</td>
            <td>{{ item.price[3].am }}</td>
            <td>{{ item.price[3].pm }}</td>
            <td>{{ item.price[4].am }}</td>
            <td>{{ item.price[4].pm }}</td>
            <td>{{ item.price[5].am }}</td>
            <td>{{ item.price[5].pm }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div  v-else>暫無資料</div>
 </div>
</template>

<script> 
export default {
  props: ['tabelData'],
  name: 'resultTable',
  data() {
    return {
    }
  },
  watch: {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scope>
table {
  text-align: center;
  margin: 0;
  min-width:100%;
  /* border-collapse:collapse; */
  border-spacing:1;
}
thead {
  background-color: orange;
}
.block_table {
  max-height: 400px;
  overflow: auto;
  margin-bottom: 20px; 
}
</style>
