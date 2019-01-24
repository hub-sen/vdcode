/* 供应商select2 */
function vendorSelect2Init(){
	var selectIndex;
	$("#vendor-select2").select2({
		language: "zh-CN",
		width: "100%", //设置下拉框的宽度
		placeholder: "请选择",
		ajax: {
			type: 'POST',
			url: conf.ctx + "/vendor/listVendor.do",
			delay: 250,
			dataType: 'json',
			data: function (params) {//params指内置select2对象，params.term指输入的值
				/*console.log(params);*/
				selectIndex = $(this);
				return  { vendorName : params.term };
			},
			processResults: function (data, params) {
				var rows = [];
				if(data.rows != null){
					rows = data.body;
				}
				return {
					results: rows,
					pagination: {
						more: (params.page * 30) < data.total
					}
				};
			},
			cache: true
		},
		escapeMarkup: function (markup) { return markup; },
		minimumInputLength: 0,
		templateResult: function(repo){
			var vendorType;
			if (repo.loading) return repo.text;
			var markup = "<div form-control>"+repo.vendorName+"</div>";
			return markup;
		},
		templateSelection: function(repo){
			 if(isNotBlank(repo) && isNotBlank(repo.text)){
					return repo.text;
			}else if(isNotBlank(repo) && isNotBlank(repo.id) && isNotBlank(selectIndex)){
				selectIndex.parent().find("input[name=vendorId]").val(repo.id);
				selectIndex.parent().find("input[name=vendorName]").val(repo.vendorName);
				$('input[name=vendorTypeCd]').val(repo.vendorClassCd);
				$('#vendorType').val(repo.vendorClassCd);
				return repo.vendorName;
			}else{
				return '';
			}
		}
	});
};

vendorSelect2Init();

//清除
function clearSearch(){
	$('#search-params').clear();
	$("#vendor-select2").empty();
}

function searchParams(){
	var params = {};
	params.vendorName = $("input[name=vendorName]").val();
	params.vendorId = $("input[name=vendorId]").val();
	params.contractTypeCdStr = "B,C";
	params.userTypeCd = $("#userTypeCd").val();
	params.contractStartDate = $("#startDate").val();
	params.contractEndDate = $("#endDate").val();
	params.contractStateCd = $("#contractStateCd").val();
	params.contractNo = $("#contractNo").val();
	params.resName = $("#resName").val();
	params.contractRouteName = $("#contractRouteName").val();
	params.isLast = "1";
	params.page = 1;
	params.pagesize = 20;
	return params;
}

//临时合同列表显示
var ListDt;
$(function() {
	ListDt = new DataTable({
		id:"#list-dt",
		url:conf.ctx + "/tempVendorContract/list.do",
		type:'post',
		params: searchParams(),
		selectOne:true,  //单选
		pageInterval:10,
		columns:[
		    {field:"contractId",title:"",checkbox:true}
			,{field:"",title:"序号",className:"center",format:function(val,row,i){
				return i+1;
			 }}
			,{field:"contractNo",title:"合同编号",className:"center",
				format : function(val, row, i) {
		
					if(color(row)){
						var html = "";
						html = '<a style="color:green" href="/tempVendorContract/toTempContactDeteail.do?tempContactcontractId='
								+ row.contractId + '" >' + val + '</a> ';
						return html;
					}else{
						var html = "";
						html = '<a href="/tempVendorContract/toTempContactDeteail.do?tempContactcontractId='
								+ row.contractId + '" >' + val + '</a> ';
						return html;
					}	
			}}
			,{field:"vendorName",title:"承运商名称",className:"center"}
			,{field:"userTypeCd",title:"会员类型",className:"center",format:function(val,row,i){
				switch(val){
					case "B":
						return "企业";
						break;
					case "C":
						return "个人";
						break;
					default:
						return "";
						break;
				}
			}}
			,{field:"contractStateCd",title:"合同状态",className:"center",format:function(val,row,i){
				switch(val){
					case "NEW":
						return "待提交";
					case "SBT":
						return "待审核";
					case "PASS":
						return "审核通过";
					case "REJECT":
						return "已驳回";
					case "EFFECT":
						return "已生效";
					case "STOP":
						return "已终止";
					case "OVERDUE":
						return "已到期";
					default:
						return "";
				}
			}}
			,{field:"contractRouteName",title:"合作线路",className:"center"}
			,{field:"tkNum",title:"车头数",className:"center"}
			,{field:"trNum",title:"挂箱数",className:"center"}
			,{field:"createdByName",title:"创建人 ",className:"center"}
			,{field:"contractStartDate",title:"合同开始时间 ",className:"center",format:function(val,row,i){
				if(val != ""){
					return formatDateTime(val).substring(0,10);
				}else{
					return "";
				}
			}}
			,{field:"contractEndDate",title:"合同结束时间 ",className:"center",format:function(val,row,i){
				if(val != ""){
					return formatDateTime(val).substring(0,10);
				}else{
					return "";
				}
			}}
			,{field:"createdTime",title:"签约时间 ",className:"center",format:function(val,row,i){
				if(val != ""){
					return formatDateTime(val);
				}else{
					return "";
				}
			}}
		]
	});
	ListDt.init();
	
	$(".reload-table").click(function(){
		console.log(searchParams());
		ListDt.reload(searchParams());
	})
});

function updateTempcapacity() {
	if(ListDt.getSelecteds().length != 1){
		toastr["error"]("请选择一条数据！");
		return false;
	}
	var row = ListDt.getSelecteds()[0];
	console.log(row);
	window.location.href = conf.ctx + "/tempVendorContract/toupdate.do?contractId=" + row.contractId;
}

// 格式化日期yyyy-MM-dd HH:mm:ss
function formatDateTime(strTime) {
	var date = new Date(strTime);

	var year = date.getFullYear();

	var month = date.getMonth() + 1;
	if (month.toString().length < 2) {
		month = "0" + month;
	}

	var dt = date.getDate();
	if (dt.toString().length < 2) {
		dt = "0" + dt;
	}

	var hours = date.getHours();
	if (hours.toString().length < 2) {
		hours = "0" + hours;
	}

	var minutes = date.getMinutes();
	if (minutes.toString().length < 2) {
		minutes = "0" + minutes;
	}

	var seconds = date.getSeconds();
	if (seconds.toString().length < 2) {
		seconds = "0" + seconds;
	}

	return year + "-" + month + "-" + dt + " " + hours + ":" + minutes + ":"
			+ seconds;
}

//判断合同编号颜色
function color(row){
	if(row.contractResRelDtos.length<(row.tkNum+row.trNum)){
		return true;
	}
}

//外雇合同导出
function exportTempContract(){
	var data = searchParams();
	data.exportTemplateId = 49;
	$.ajax({
		url:conf.ctx + '/adminExport/tempContractListExport.do',
		type:'post',
		dataType:'json',
		data:JSON.stringify(data),
		contentType:"application/json",
		success:function(data){
			if(data.success){	
				toastr["success"]("导出任务已创建,请至下载中心查看!", "温馨提示");
			}else{
				toastr["error"](data.message ? data.message : "操作失败");
			}
		},
		error:function(e){
			toastr["error"]("连接服务器超时，请稍后重试");
		}
	}); 
}
//点击导入按钮
$('#import').click(function(){
	$('#dialog_temp_import').modal('show');
	var tempFileUpload = document.getElementById('tempFileUpload');
	tempFileUpload.outerHTML=tempFileUpload.outerHTML;
});

//Excel上传
$('#import-button').click(function(){  
    if(checkFile()){  
        $('#importForm').ajaxSubmit({    
            url: conf.ctx + '/tempVendorContract/fileimport.do', 
            dataType: 'json',  
            success: function(data){
            	if(data.success){
            		$('#dialog_temp_import').modal('hide');
            		toastr["success"](data.message);
            	}else{
            		$('#dialog_temp_import').modal('hide');
            		toastr["error"](data.message);
            	}
            },  
            error:function(e){
				toastr["error"]("连接服务器超时，请稍后重试");
			} 
        });   
    }  
});

function checkFile(){
	var fileDir = $("#tempFileUpload").val();  
    if("" == fileDir){  
    	toastr["error"]("请选择需要导入的Excel文件！");
        return false;  
    }  
    var suffix = fileDir.substr(fileDir.lastIndexOf("."));  
    if(".xls" != suffix && ".xlsx" != suffix ){  
    	toastr["error"]("请选择Excel文件进行导入！");
        return false;  
    }  
    return true;  
}
