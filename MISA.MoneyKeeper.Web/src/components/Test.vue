<template>
  <div class="danhsach">
    <h2>{{title}}</h2>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Password</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2</td>
          <td>Vũ Văn Hưng</td>
          <td>NoPassWord</td>
          <td>22</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Nguyễn Văn Tài</td>
          <td>Justforu!21</td>
          <td>26</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Nguyễn Bửu Đạt</td>
          <td>BGDALDAMDMDMDMD</td>
          <td>27</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Dương Đổ Hồng Ngọc</td>
          <td>KhiGapEmTrieuTraiTimTanVo</td>
          <td>26</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ListUsers',
  data () {
    return {
      title: 'Danh sách User'
    }
  }
}
</script>

<style>
  table {
    right: 1000;
    left: 0;
    top: 0;
    margin: auto;
  }

    table tr th {
      background: rgba(0,145,234,1);
      padding: 10px;
      color: #fff;
    }

    table tr td {
      padding: 10px;
      border-right: 1px solid rgba(0,0,0,0.1);
      font-size: 15px;
    }
</style>
