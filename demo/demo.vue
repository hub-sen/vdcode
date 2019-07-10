<template>
<div>
  <div id="map-core"></div>
  <transition name="slide-fade">
    <div class="routes" v-if="showSlide" v-loading="loading">
      <el-card shadow="hover">
        <div class="flexcon">
          <el-input
            class="search-line"
            @change="searchlineFn"
            placeholder="请输入单号查询"
            v-model="searchline"
            clearable>
          </el-input>
          <i class="el-icon-close" @click="close()"></i>
        </div>
      <div class="list">
        <div class="nav bgf5">
          <span>线路</span>
          <span>单号</span>
          <span>用箱时间</span>
          <span>运单单龄</span>
        </div>
        <div class="scrolllist">
          <div v-for="(v,i) in listdata" class="listdata-con">
            <div class="nav bge3">
              <span>{{v.routeName}}</span>
              <span>{{v.orderNo}}</span>
              <span>{{v.trailerUseTime}}</span>
              <span>{{v.age}}</span>
            </div>
            <div class="list-con">
              <div class="con1">
                <div>
                  <span>{{v.transCompayName}}</span>
                </div>
                <div class="flexcol">
                  <span>{{v.cargoName}}</span>
                  <span><cite>{{v.cargoQuantity}}件</cite><cite>{{v.cargoWeight}}T</cite><cite>{{v.cargoVolume}}方</cite></span>
                </div>
                <div>
                  <span>{{v.totalFee}}元</span>
                </div>
                <div>
                  <el-button size="small" type="primary" @click="dispatchFn(v)">调度</el-button>
                </div>
              </div>
              <div class="con2">
                <span>{{v.custName}}|{{v.departAddr}}</span>
                <span class="plateNo">{{v.trResName}}</span>
              </div>
            </div>
          </div>
        </div>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[5,10,20,40]"
        :page-size="pagesize"
        layout="total,sizes,prev,pager,next,jumper"
        :total="total"
        ></el-pagination>
      </div>
    </el-card>
  </div>
  </transition>
<!-- dialog -->
<el-dialog
  title="调度计划发布"
  :visible.sync="dialogVisible"
  width="50%"
  :before-close="handleClose">
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="线路">
      <div class="flexline">
        <span>{{form.routeName}}</span>
        <span class="plateNo">{{form.plateNo}}</span>
      </div>
   </el-form-item>
    <el-form-item label="计划名称">
      <el-input v-model="form.planName"></el-input>
    </el-form-item>
    <el-form-item label="发车类型">
      <el-radio-group v-model="form.departTypeCd" size="small">
        <el-radio-button label="SG">甩挂</el-radio-button>
        <el-radio-button label="DG">定挂</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="发车模式">
      <el-radio-group v-model="form.contractDepartCd" size="small">
        <el-radio-button label="P">挂池</el-radio-button>
        <el-radio-button label="D">客户</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="班次">
      <el-select v-model="form.classes" @change="selectClass(banciList,form.classes)" placeholder="请选择">
        <el-option v-for="(v,i) in banciList" :key="i" :label="v.shiftNo" :value="i"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="时间段">
      <el-date-picker
      :disabled="dateDisabled"
      v-model="form.date"
      @change="getTime"
      format="yyyy-MM-dd HH:mm:ss"
      value-format="yyyy-MM-dd HH:mm:ss"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
    </el-form-item>
    <el-form-item label="车头">
      <span class="wt50">{{plateNo}}</span>
      <el-popover
      placement="right"
      width="500"
      trigger="click">
        <el-form ref="formInner" :model="form">
          <el-form-item class="mr10">
            <el-col :span='7'>
              <el-input
              v-model="formInner.searchkey"
              placeholder="请输入车牌号"
              @change="selectResSignTypeCd"
              clearable
              ></el-input>
            </el-col>
            <el-col :span='16' class="checkwt">
              <el-radio-group v-model="formInner.searchList" @change="selectResSignTypeCd()">
                <el-radio label="">全部</el-radio>
                <el-radio label="QY">合同</el-radio>
                <el-radio label="LS">临时</el-radio>
                <el-radio label="CP">常跑</el-radio>
              </el-radio-group>
            </el-col>
          </el-form-item>
          <!-- <el-form-item>
            <el-button type="primary" size="mini">在地图上全部显示</el-button>
            <el-button type="primary" size="mini">推荐</el-button>
          </el-form-item> -->
          <el-form-item>
            <el-table
              :data="tkRes"
              :row-class-name="tableRowClassName"
              style="width: 100%">
              <el-table-column
                prop="resName"
                label="车牌"
                width="120">
              </el-table-column>
              <el-table-column
                prop="resSignTypeCd"
                label="类型"
                width="120">
                <template slot-scope="scope">
                  <span v-html="trsResSignTypeCd(scope.row.resSignTypeCd)"></span>
                </template>
              </el-table-column>
              <el-table-column
                label="操作">
                <template slot-scope="scope">
                  <el-button @click="handlelocation(scope.row)" type="text" size="small">选择车头</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              @current-change="handleCurrentChange2"
              small
              layout="prev, pager, next"
              :current-page="tkpage"
              :page-size="tkpagesize"
              :total="total2">
            </el-pagination>
          </el-form-item>
        </el-form>
        <el-button slot="reference" type="primary" size="mini" @click="resListFn()">选择车头</el-button>
      </el-popover>
    </el-form-item>
    <el-form-item label="司机">
      <span class="wt50">{{resName}}{{driverTel}}</span>
      <!-- <el-button type="primary" size="mini">重新选择</el-button> -->
      <el-popover
      placement="right"
      width="500"
      trigger="click">
      <el-form ref="formInner" :model="form">
        <!-- <el-form-item class="mr10">
          <el-col :span='6'>
            <el-input v-model="formInner.searchkey"></el-input>
          </el-col>
          <el-col :span='12' class="checkwt">
            <el-checkbox-group v-model="formInner.searchList">
              <el-checkbox label="全部"></el-checkbox>
              <el-checkbox label="合同"></el-checkbox>
              <el-checkbox label="临时"></el-checkbox>
              <el-checkbox label="常跑"></el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col :span='2'>
            <el-button type="primary" size="mini">搜索</el-button>
          </el-col>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" size="mini">在地图上全部显示</el-button>
          <el-button type="primary" size="mini">推荐</el-button>
        </el-form-item>
        <el-form-item>
          <el-table
            :data="tdRes"
            style="width: 100%">
            <el-table-column
              prop="resId"
              label="推荐"
              width="100">
            </el-table-column>
            <el-table-column
              prop="resName"
              label="司机"
              width="120">
            </el-table-column>
            <el-table-column
              prop="driverTel"
              label="联系电话"
              width="120">
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <el-button @click="handleDriver(scope.row)" type="text" size="small">选择司机</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @current-change="handleCurrentChange3"
            small
            layout="prev, pager, next"
            :current-page="tdpage"
            :page-size="tdpagesize"
            :total="total3">
          </el-pagination>
        </el-form-item>
      </el-form>
        <el-button slot="reference" type="primary" size="mini" @click="SJListFn()">选择司机</el-button>
      </el-popover>
    </el-form-item>
    <el-form-item label="路径">
      <el-input class="ads-result" v-model="departAddr" type="text" id="suggestId" @focus="showDds('suggestId')" placeholder="请输入出发地址"></el-input>
      <el-input class="ads-result" v-model="arriveAddr" type="text" id="suggestId2" @focus="showDds('suggestId2')" placeholder="请输入到达地址"></el-input>
    </el-form-item>
  </el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="publishBtn()">发布计划</el-button>
  </span>
</el-dialog>
<!-- footer -->
  <div>
    <div class="footer">
      <el-row class="btns">
          <el-button>待处理短驳<i class="icon-custom-pending"></i></el-button>
        <el-badge :value="total" class="item" type="primary">
          <el-button type="primary" @click="showSlideFn()">待处理干线<i class="icon-custom-pending"></i></el-button>
        </el-badge>
        <el-button type="success">无运单发车<i class="icon-custom-car"></i></el-button>
        <el-button type="info">计划监控<i class="icon-custom-pendwatch"></i></el-button>
        <el-button type="warning">资源监控<i class="icon-custom-datewatch"></i></el-button>
        <el-badge :value="1" class="item msgbox" :hidden="showmarquee">
          <el-button type="danger" @click="showmarqueeFn()">消息<i class="icon-custom-message"></i></el-button>
          <div class="marquee" v-if="showmarquee">
            <div class="marquee_box">
              <ul class="marquee_list" :class="{marquee_top:animate}">
                <li v-for="(item, index) in marqueeList">
                  <span>{{item.name}}</span>
                  <span>在</span>
                  <span class="red"> {{item.city}}</span>
                  <span>调度中,成交额</span>
                  <span class="red"> {{item.amount}}</span>
                  <span>万</span>
                </li>
              </ul>
            </div>
          </div>
        </el-badge>
      </el-row>
    </div>
  </div>
</div>
</template>

<script>
import BMap from 'BMap';
import {
  queryLHList,//干线列表
  mapPotList,//智能调度,根据城市code查询在城和在途资源
  planList,//计划定义模板
  shiftList,//初始化班次
  resList,//车头和司机选择
  validateShiftAsPlan,//校验班次是否可以
  taskPublish,//干线发布
  listCompany//根据公司类型查询公司列表
} from '@/apis'
import {gettime,getServerDate,selectDate,translatetime} from '@/utils/date.js'
var pcMap;
export default{
  data(){
    return{
       showSlide:false,
       dialogVisible:false,
       listdata:[],
       searchline:'',
       form: {
         planName:'',
         routeName: '',
         plateNo: '',
         name:'',
         departTypeCd:'SG',
         contractDepartCd:'P',
         classes:'',
         date: []
       },
       formInner:{
         searchkey:'',
         searchList:'',
       },
          animate: false,
          showmarquee:false,
          marqueeList: [{
              name: '沪B1235',
              city: '北京',
              amount: '10'
            },
            {
              name: '沪B1899',
              city: '上海',
              amount: '20'
            },
            {
              name: '沪B14654',
              city: '广州',
              amount: '30'
            },
            {
              name: '沪B12222',
              city: '重庆',
              amount: '40'
            },
            {
              name: '沪B18888',
              city: '重庆',
              amount: '40'
            }
          ],
          page:1,
          pagesize:10,
          total:0,
          tkpage:1,
          tkpagesize:5,
          total2:0,
          tdpage:1,
          tdpagesize:5,
          total3:0,
          loading:true,
          banciList:[],
          //地图相关
          map: {},
          geolocation:{},
          mapData:[],
          ac:{},
          departLon: "", //通过详细地址获取经纬度
          departLat: "",
          destLon: "",
          destLat: "",
          departAddr:"",
          arriveAddr:"",
          //要提交的数据
          trResId:'',
          departCt:'',
          routeId:'',
          waybillDto:{},
          //模板
          planDefId :'',
          planDefCode :'',
          planDefName :'',
          taskDefId :'',
          taskDefCode :'',
          taskDefName :'',
          //班次
          shiftNo:'',
          departTime:'',
          arriveTime:'',
          duration:'',
          orderNo:'',
          shiftDepartTime:'',
          shiftArriveTime:'',
          dateDisabled:true,
          //车头
          plateNo:'',
          tkResId:'',
          vendorId:'',
          truck:{},
          tkRes: [],
          //司机
          tdRes:[],
          tdResId:'',
          truckDriver:{},
          resName:'',
          driverTel:'',
    }
  },
  created() {
    setInterval(this.showMarquee, 2000)
  },
  mounted(){
    this.mapPotListFn();
    this.planListFn();
    this.queryLHListFn();
    this.setMap();
  },
  methods:{
    gettime,getServerDate,selectDate,translatetime,
    setMap(){
      this.map = new BMap.Map('map-core',{minZoom:4,maxZoom:15});
      // this.geolocation = new BMap.Geolocation();
      // var that = this;
      // this.geolocation.getCurrentPosition((r)=>{
      //   if (that.getStatus()==BMAP_STATUS_SUCCESS) {
      //     console.log(123);
      //   }
      // })
      this.map.centerAndZoom(new BMap.Point(121.38737,31.185834),11);//获取当前ip的经纬度
      // 地图缩放控件
      const topLeftControl = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT})
      // 比例尺控件
      const topLeftNavigation = new BMap.NavigationControl()
      this.map.addControl(topLeftControl)
      this.map.addControl(topLeftNavigation)
      // 鼠标缩放
      const _this = this;
      setTimeout(function () {
        _this.map.setZoom(12)
      }, 2000) // 2秒后放大到11级
      this.map.enableScrollWheelZoom(true);
    },
    // 弹出框
    openInfo(){
      var point = new BMap.Point('121.38737', '31.185834');
      var InfoWindow = new BMap.InfoWindow('自定义',{
        width:250,
        height:80,
        title:'信息',
        enableMessage:true
      })
      this.map.openInfoWindow(InfoWindow,point);
    },
    showMapData(){
      for (var i = 0; i < this.mapData.length; i++) {
        var dataIndex = this.mapData[i];
        var point = new BMap.Point(dataIndex.locationLon,dataIndex.locationLat);
        var marker = new BMap.Marker(point);
        this.map.addOverlay(marker);
        var that = this;
        marker.addEventListener("click", ()=> {
            that.openInfo();
        });
      }
    },
    //搜索位置功能实现
    getmap(suggest) {
      // 百度地图
      var th = this;
      // 创建Map实例
      // 初始化地图,设置中心点坐标，
      pcMap = new BMap.Autocomplete({
        //建立一个自动完成的对象
        input: suggest,
        location: ""
      });
      var myValue;
      pcMap.addEventListener("onconfirm", function(e) {
        //鼠标点击下拉列表后的事件
        var that = this;
        var _value = e.item.value;
        myValue =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business;
        if (suggest == "suggestId") {
          th.departAddr = myValue;
        }
        if (suggest == "suggestId2") {
          th.arriveAddr = myValue;
        }
        new BMap.Geocoder().getPoint(myValue, function(point) {
          if (point && suggest == "suggestId") {
            th.departLon = point.lng;
            th.departLat = point.lat;
            console.log(point);
          }
          if (point && suggest == "suggestId2") {
            th.destLon = point.lng;
            th.destLat = point.lat;
            console.log(point);
          }
        });
      });
      // this.calculateLonLat(suggest);
    },
    listCompanyFn(){
      listCompany({

      })
      .then((res)=>{

      })
      .catch((err)=>{

      })
    },
    tableRowClassName({row,rowIndex}){
      if (row.isExsitsShift===1) {
        return 'warning-row';
      }
    },
    trsResSignTypeCd(v){
      switch (v) {
        case 'QY':
        return '合同';
        case 'CP':
        return '常跑';
        case 'LS':
        return '临时';
      }
    },
    selectResSignTypeCd(){
      this.resListFn();
    },
    showDds(i){
      this.getmap(i)
    },
    queryLHListFn(){
      queryLHList({
        'page':this.page,
        'pagesize':this.pagesize
      })
      .then((res)=>{
        if (res.data.rows) {
          this.listdata = res.data.rows;
          this.total = res.data.total;
          this.loading = false;
        }
      })
      .catch((err)=>{

      })
    },
    handleSizeChange(size){
      this.loading = true;
      this.pagesize = size;
      this.queryLHListFn();
    },
    handleCurrentChange(currentPage){
      this.loading = true;
      this.page = currentPage;
      this.listdata = [];
      this.queryLHListFn();
    },
    handleCurrentChange2(currentPage){
      this.tkpage = currentPage;
      this.tkRes = [];
      this.resListFn();
    },
    handleCurrentChange3(currentPage){
      this.tdpage = currentPage;
      this.tdRes = [];
      this.SJListFn();
    },
    close(){
      this.showSlide = false;
    },
    showSlideFn(){
      this.showSlide =!this.showSlide;
    },
    dispatchFn(v){
      this.dialogVisible = true;
      this.waybillDto = v;
      this.form.routeName = v.routeName;
      this.form.plateNo = v.trResName;
      this.trResId = v.trResId;
      this.departCt = v.departCt;
      this.routeId = v.routeId;
      this.orderNo = v.orderNo;
      this.shiftListFn(v);
    },
    handleClose(done) {
      done();
        // this.$confirm('确认关闭？')
        //   .then(_ => {
        //     done();
        //   })
        //   .catch(_ => {});
      },
    handlelocation(e){
      this.plateNo = e.resName;
      this.tkResId = e.resId;
      this.vendorId = e.vendorId;
      this.truck = e;
      console.log(e);
    },
    handleDriver(e){
      this.resName = e.resName;
      this.tdResId = e.resId;
      this.driverTel = e.driverTel;
      this.truckDriver = e;
    },
    showMarquee() {
      this.animate = true;

      setTimeout(() => {
        this.marqueeList.push(this.marqueeList[0]);
        this.marqueeList.shift();
        this.animate = false;
      }, 500);

    },
    showmarqueeFn(){
      this.showmarquee = !this.showmarquee;
    },
    getTime(data){
      console.log(data);
    },
    mapPotListFn(){
      mapPotList({
        'locationCt':150100
      })
      .then((res)=>{
        if (res.data.success) {
          this.mapData = res.data.body;
          this.showMapData();
        }
      })
      .catch((err)=>{

      })
    },
    searchlineFn(v){
      console.log(v);
      queryLHList({
        'page':this.page,
        'pagesize':this.pagesize,
        'orderNo':v
      })
      .then((res)=>{
        if (res.data.rows) {
          this.listdata = res.data.rows;
        }
      })
      .catch((err)=>{

      })
    },
    planListFn(){
      planList({

      })
      .then((res)=>{
        if (res.data.success) {
          const datas = res.data.body;
          const dtodatas = res.data.body.planTaskDefRelDtos[0];
          this.planDefId = datas.planDefId;
          this.planDefCode = datas.planDefCode;
          this.planDefName = datas.planDefName;
          this.taskDefId = dtodatas.taskDefId;
          this.taskDefCode = dtodatas.taskDefCode;
          this.taskDefName = dtodatas.taskDefName
        }
      })
      .catch((err)=>{

      })
    },
    shiftListFn(v){
      shiftList({
        "routeId": v.routeId
      })
      .then((res)=>{
        if (res.data.success) {
          this.banciList = res.data.body;
          this.banciList.unshift({
            'shiftNo':'计划外班次',
            'shiftId':''
          })
        }
      })
      .catch((err)=>{

      })
    },
    selectClass(v,i){
      this.shiftNo = v[i].shiftNo;
      if (v[i].shiftNo) {
        this.dateDisabled = false;
      }
      if (v[i].duration) {
        this.duration = v[i].duration;
        this.shiftDepartTime = v[i].departTime;
        this.shiftArriveTime = v[i].arriveTime;
        this.departTime = this.gettime().slice(0,10) + v[i].departTime.slice(-9);
        let nexttime = new Date(this.departTime).getTime()+this.duration*1000;
        this.arriveTime = this.translatetime(nexttime);
        this.form.date = [this.departTime,this.arriveTime];
      }
    },
    resListFn(){
      if (!this.form.date.length) {
        this.$message('请先选择时间段！');
        return false;
      }
      let data = {
          "resTypeCd": 'TK',   //（资源类型:TK-车头;TR-车厢;TD-司机.车头传TK，司机传TD）
          "occupyFromDate": this.form.date[0],
          "occupyToDate": this.form.date[1],
          "departCt": this.departCt,
          "usageType": 1,     //（使用类型: 1=干线 0=短驳 ，车头传1，司机传0）
          "routeId": this.routeId,
          "shiftNo": this.shiftNo,  //（车头必传，司机不传）
          "resName": this.formInner.searchkey,
          "resSignTypeCd": this.formInner.searchList
        }
      resList(data)
      .then((res)=>{
        // if (res.data.success) {
          this.total2 = res.data.rows.length;
          this.tkRes = res.data.rows.slice(5*(this.tkpage-1),5*this.tkpage);
        // }
      })
      .catch((err)=>{

      })
    },
    SJListFn(){
      if (!this.vendorId) {
        this.$message('请先选择车头！');
        return false;
      }
      let data = {
          "resTypeCd": 'TD',   //（资源类型:TK-车头;TR-车厢;TD-司机.车头传TK，司机传TD）
          "occupyFromDate": this.form.date[0],
          "occupyToDate": this.form.date[1],
          "departCt": this.departCt,
          "usageType": 0,     //（使用类型: 1=干线 0=短驳 ，车头传1，司机传0）
          "routeId": this.routeId,
          "vendorId" : this.vendorId   //（承运商id：司机必传，车头不传）
        }
        resList(data)
        .then((res)=>{
            this.total3 = res.data.rows.length;
            this.tdRes = res.data.rows.slice(5*(this.tdpage-1),5*this.tdpage);
        })
        .catch((err)=>{

        })
    },
    validateShiftAsPlanFn(){
      validateShiftAsPlan({
        'shiftNo':this.shiftNo,
        'planStartTime':this.departTime
      })
      .then((res)=>{
        if (res.data.success) {
          if (res.data.body) {
            this.$message('该班次已被使用！');
          }
        }
      })
      .catch((err)=>{

      })
    },
    publishBtn(){
      this.validateShiftAsPlanFn();
      if (!this.form.planName) {
        this.$message({
            message: '请填写计划名称！',
            type: 'warning'
          });
        return false;
      }
      if (!this.form.date.length) {
        this.$message({
            message: '请选择时间段！',
            type: 'warning'
          });
        return false;
      }
      if (!this.tkResId) {
        this.$message({
            message: '请选择车头！',
            type: 'warning'
          });
        return false;
      }
      if (!this.tdResId) {
        this.$message({
            message: '请选择司机！',
            type: 'warning'
          });
        return false;
      }
      if (!this.arriveAddr||!this.departAddr) {
        this.$message({
            message: '请填写路径！',
            type: 'warning'
          });
        return false;
      }
      if (this.shiftNo=='计划外班次') {
        this.departTime = this.form.date[0];
        this.arriveTime = this.form.date[1];
        this.shiftNo = '';
      }
      var data = {
        'taskPublishDto':{
          'planDto':{
            'planDefId':this.planDefId,
            'planDefCode':this.planDefCode,
						"planDefName": this.planDefName,
						"planName": this.form.planName,
						"transTypeCd": "LH",
						"planStartTime": this.departTime,
						"planEndTime": this.arriveTime,
						"departTypeCd": this.form.departTypeCd,
						"contractDepartCd": this.form.contractDepartCd,
						"shiftNo": this.shiftNo,
						"shiftDepartTime": this.shiftDepartTime,
						"shiftArriveTime": this.shiftArriveTime,
						"shiftDuration": this.duration/3600
          },
          'waybillDto':this.waybillDto,
          'taskList': [{
            'taskDefId':this.taskDefId,
						"taskDefCode": this.taskDefCode,
						"taskDefName": this.taskDefName,
						"shiftNo": this.shiftNo,
            "shiftDepartTime": this.shiftDepartTime,
						"shiftArriveTime": this.shiftArriveTime,
						"shiftDuration": this.duration/3600,
						"taskSeq": 1,
            "planStartTime": this.departTime,
						"planEndTime": this.arriveTime,
						"departRefNo": this.waybillDto.departRefNo,
						"departAddr": this.departAddr,
						"departLon": this.departLon,
						"departLat": this.departLat,
						"arriveRefNo": this.waybillDto.arriveRefNo,
						"arriveAddr": this.arriveAddr,
						"arriveLon": this.destLon,
						"arriveLat": this.destLat,
            "trResId":this.trResId,
            "tkResId":this.tkResId,
            "truck":this.truck,
            "tdResId":this.tdResId,
            "truckDriver":this.truckDriver
          }]
        },
        "taskOrderDtoList": [{
					"taskSeq": 1,
					"trailerTaskCharge": "",
					"shuttleAdjustCharge": ""
				}]
      }
      taskPublish(data)
      .then((res)=>{
        if (res.data.success) {
          this.dialogVisible = false;
          this.$message({
              message: res.data.message,
              type: 'success'
            });
        }else{
          this.$message({
              message: res.data.message,
              type: 'warning'
            });
        }
      })
      .catch((err)=>{

      })
    }
  }
}
</script>

<style scoped>
@import "../assets/css/routePage.css";
</style>



// WEBPACK FOOTER //
// src/components/routePage.vue