//图片的相关操作
var files = tempContractFiles;
if(files =='0'){
	files = new Array();
}

//会员类型
var userTypeCd = memberUserTypeCd;
$(function() {

	// 地址选择器
	$('.fmc-city-selector').each(function() {
		$(this).cityPicker({
			level : 2
		});
	});
	$(".citypicker").css("z-index", 99999);

	// 初始化起运地、目的地下拉
	loadSelect();
	listContract(files)
		
	//li标签disable样式
	$(".disabled").click(function(event) {
		event.preventDefault();
	});
	

	
	$("select[name=truckTypeCd]").change(function(){
		if($('#memberType').val() == "C"){
			if($(this).val() == "L960"){
				if($('#contractId').val() != ""){
		    		if($('#trChoose').val() != ""){
		    			clearTransRes(trIds,trResIds,"tr");
		    		}
		    	}
				$('#trChoose').prop("disabled", true);
				$('#trNum').prop("disabled", true);
				$('#trNum').val('');
		    	$('#trChoose').val('');
			}else{
				$('#trNum').prop("disabled", false);
			}
			if($('#tkNum').val() != ""){
				if($(this).val() != "L960" && Number($('#tkNum').val()) == 1){
					$('#tkChoose').prop("disabled", false);
				}
				if($(this).val() != "L960" && Number($('#tkNum').val()) != 1){
					$('#tkChoose').prop("disabled", true);
					//toastr["error"]("临时车车头数只能为1");
				}
			}
			/*if($('#trNum').val() != ""){
				if($(this).val() != "L960" && Number($('#trNum').val()) == 1){
					$('#trChoose').prop("disabled", false);
				}
				if($(this).val() != "L960" && Number($('#trNum').val()) != 1){
					$('#trChoose').prop("disabled", true);
					//toastr["error"]("临时车车厢数只能为1");
				}
			}*/
		}
		if($('#memberType').val() == "B"){
			if(Number($('#tkNum').val()) >= 1){
				$('#tkChoose').prop("disabled", false);
			}
			if(Number($('#trNum').val()) >= 1){
				$('#trChoose').prop("disabled", false);
			}
			$('#trNum').prop("disabled", false);
			$('#tkNum').prop("disabled", false);
		}
	})
	
	$('#tkNum').change(function(){
		if($('#memberType').val() == "C"){
    		if(Number($(this).val()) != 1 && Number($(this).val()) != 0){
    			$('#tkChoose').prop("disabled", true);
    			toastr["error"]("临时车车头数只能为1或者0");
    		}else if(!($(this).validationEngine('validate')&&Number($(this).val()) > 0)){
        		$('#tkChoose').prop("disabled", true);
        	}else{
    			$('#tkChoose').prop("disabled", false);
    		}
    	}

		if($('#memberType').val() == "B"){
			if(Number($(this).val()) < 0){
    			$('#tkChoose').prop("disabled", true);
    			toastr["error"]("常跑车车头数必须大于等于0");
    		}else if(!($(this).validationEngine('validate')&&Number($(this).val()) > 0)){
        		$('#tkChoose').prop("disabled", true);
        	}else{
        		$('#tkChoose').prop("disabled", false);
        	}
		}
    })
    
    $('#trNum').change(function(){
    	
    	if($('#memberType').val() == "C" && $("select[name=truckTypeCd]").val() != "L960" && Number($(this).val()) > 1){
    		$('#trChoose').prop("disabled", true);
			toastr["error"]("临时车车厢数只能为1或者0");
		}else if(!($(this).validationEngine('validate')&&Number($(this).val()) > 0)){
    		$('#trChoose').prop("disabled", true);
    	}else{
    		$('#trChoose').prop("disabled", false);
    	}
    	
    	/*if($('#memberType').val() == "C" && $("select[name=truckTypeCd]").val() != "L960"){
    		if(Number($(this).val()) != 1){
    			$('#trChoose').prop("disabled", true);
    			toastr["error"]("临时车车厢数只能为1或者0");
    		}else{
    			$('#trChoose').prop("disabled", false);
    		}
    	}*/
    	/*if($('#memberType').val() == "B"){
    		if(!($(this).validationEngine('validate')&&Number($(this).val()) > 0)){
        		$('#trChoose').prop("disabled", true);
        	}else{
        		$('#trChoose').prop("disabled", false);
        	}
    	}*/
    })
	
	//显示车头或挂厢列表
    $('#tkChoose,#trChoose').click(function(){
    		var contractId = $("#contractId").val();
        	if("" == contractId){
        		toastr["error"]("请先保存基础信息！再选择车头和挂厢");
        	}else{
        		if($(this).attr('id') == 'tkChoose'){
        			$("#txt-resTypeCd").val('TK');
        			$("#txt-resNum").val($('#tkNum').val());
        			$("#txt-contractStateCd").val($("#contractStateCd").val())
        		}else if($(this).attr('id') == 'trChoose'){
        			$("#txt-resTypeCd").val('TR');
        			$("#txt-resNum").val($('#trNum').val());
        			$("#txt-contractStateCd").val($("#contractStateCd").val())
        		}
        		newTrukListDt();
            	TruckListDt.init();
            	newTruckListDt2();
            	TruckListDt2.init();
            	$('#truck-search-modal').modal('show');
        	}
    })
    
     //修改承运商，同步清除已选车头和车厢
    $('#vendor-select2').change(function(){
    	if($('#contractId').val() != ""){
    		if($('#tkChoose').val() != ""){
    			clearTransRes(tkIds,tkResIds,"tk");
    		}
    		if($('#trChoose').val() != ""){
    			clearTransRes(trIds,trResIds,"tr");
    		}
    	}
    	$('#tkChoose').val('');
    	$('#trChoose').val('');
    })
    
    //修改合同日期，同步清除已选车厢
    $('#startTime').change(function(){
    	if($('#contractId').val() != ""){
    		if($('#trChoose').val() != ""){
    			clearTransRes(trIds,trResIds,"tr");
    		}
    	}
    	$('#trChoose').val('');
    })
     $('#endTime').change(function(){
    	if($('#contractId').val() != ""){
    		if($('#trChoose').val() != ""){
    			clearTransRes(trIds,trResIds,"tr");
    		}
    	}
    	$('#trChoose').val('');
    })
    
    $("#truck-list-reload").click(function(){
		TruckListDt.reload(searchParams());
	})
	
	$("#spare-truck-list-reload").click(function(){
		SpareTruckListDt.reload(searchParams3());
	})
	
	//trchoose 或 tkchoose 是否可选
	$('#tkChoose').prop("disabled", !Number($('#tkNum').val()) >= 1);
	$('#trChoose').prop("disabled", !Number($('#trNum').val()) >= 1);
	
});

/* 供应商select2A */
function vendorSelect2InitF(){
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
				selectIndex = $(this);
				return  { vendorName : params.term };
			},
			processResults: function (data, params) {
				var rows = [];
				if(data.body != null){
					rows = data.body.result;
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
				$('#memberType').val(repo.memberType);
				$("#baseInfo").find("select[name=vendorTypeCd]").selectpicker();
				$("#baseInfo").find("select[name=vendorTypeCd]").selectpicker("val",repo.vendorClassCd);
				$('#paymentCompanyName').val(repo.paymentCompanyName);
				$('#paymentCompanyId').val(repo.paymentCompanyId);
				return repo.vendorName;
			}else{
				return '';
			}
		}
	});
};
vendorSelect2InitF();


/* 司机select2 */
function driverSelect2Init() {
	var selectIndex;
	
	$("#driver-select2").select2(
			{
				language : "zh-CN",
				width : "100%", // 设置下拉框的宽度
				placeholder : "请选择",
				ajax : {
					type : 'POST',
					url : conf.ctx + "/truckDriver/list.do",
					delay : 250,
					dataType : 'json',
					data : function(params) {// params指内置select2对象，params.term指输入的值
						selectIndex = $(this);
						var vendorId = $("input[name=vendorId]").val();
					return  { driverName : params.term,vendorId:vendorId};
					},
					processResults : function(data, params) {
						var rows = [];
						if(data.body != null){
							rows = data.body.result;
						}
						var i = 1;
						var times = new Date().getTime();
						rows.forEach(function(e) {
							e.id = times + i++;
						});
						return {
							results : rows,
							pagination : {
								more : (params.page * 30) < data.total
							}
						};
					},
					cache : true
				},
				escapeMarkup : function(markup) {
					return markup;
				},
				templateResult : function(repo) {
					if (repo.loading)
						return repo.text;
					var markup = "<div form-control>" + repo.driverName
							+ "</div>";
					return markup;
				},
				templateSelection : function(repo) {
					if (isNotBlank(repo) && isNotBlank(repo.text)) {
						return repo.text;
					} else if (isNotBlank(repo) && isNotBlank(repo.id)
							&& isNotBlank(selectIndex)) {
						selectIndex.parent().find("input[name=driverName]")
								.val(repo.driverName);
						selectIndex.parent().find("input[name=driverProfileId]")
						.val(repo.driverProfileId);
						
						$("input[name=idNo]").val(repo.idNo);

						return repo.driverName;
					} else {
						return '';
					}
				}
			});
};
driverSelect2Init();

//日期校验
function dateCheck(){
	var date =new Date();
	date.setHours(0, 0, 0, 0);//设为当天0点0分0秒0毫秒。
	if($("#endTime").val() < $("#startTime").val()){
		toastr["warning"]("合同到期时间不能小于开始时间", "温馨提示");
		return true;
	}
	if(new Date($("#endTime").val().replace("-", "/").replace("-", "/")) < date){
		toastr["warning"]("合同到期时间不能小于当前时间", "温馨提示");
		return true;
	}
}


$("#saveBaseInfo").click(function(){
	if("REJECT"==contractState){
		rejectSubmitCheck();
	}else{
		saveBaseInfo();
	}
});


//基本信息
function rejectSubmitCheck(){
	/*if(dateCheck()){
		return false;
	}*/
	if(checkTransRes()){
		return false;
	}

	$("input[name=contractFiles]").val(JSON.stringify(files));
	if ($("#baseForm").validationEngine('validate')) {

		var contractData = $("#baseForm").serializeJsonObject();
		contractData.contractId = $("input[name=contractId]").val();
		contractData.contractNo = $("input[name=contractNo]").val();
		if ($("#collaRouteCd").val()!=""){
			contractData.collaRouteCd = $("#collaRouteCd").val();
		}

		var adjustData = {};
		adjustData.contractId = $("#contractId").val();
		adjustData.adjustTypeCd = "NEW";
		adjustData.adjustMessage ="驳回再次提交";

		$.ajax({
			url:conf.ctx + '/signVendorContract/update.do',
			type:'post',
			dataType:'json',
			data:JSON.stringify(contractData),
			contentType:"application/json",
			success:function(data){
				if(data.success){
					$.ajax({
						url:conf.ctx + '/vendorContract/adjustContact.do',
						type:'post',
						dataType:'json',
						data:JSON.stringify(adjustData),
						contentType:"application/json",
						success:function(data){
							if(data.success){
								toastr["success"]("重新调整状态为待提交！", "温馨提示");
								window.setTimeout(
									function adjustContact(code){
										window.location.href ="/signVendorContract/toContactDeteail.do?contractId="+ data.code ;
									},500);
							}else{
								toastr["error"](data.message ? data.message : "操作失败", "温馨提示");
							}
						}
						,error:function(e){
							toastr["error"]("连接服务器超时，请稍后重试");
						}
					});

				}else{
					toastr["error"](data.message ? data.message : "操作失败", "温馨提示");
				}
			}
			,error:function(e){
				toastr["error"]("连接服务器超时，请稍后重试");
			}
		});

	}
}






//保存基本信息
function saveBaseInfo() {
	if(checkTransRes()){
		return false;
	}
	if(dateCheck()){
		return false;
	}
	if ($("#baseForm").validationEngine('validate')) {
		Park.confirm({
			message : "是否确认提交？", //提示内容
			title : "温馨提示", //提示标题
			//点击确定回调方法
			callback : function() {
				$('textarea[name=remark]').val($('textarea[name=remark]').val().replace(new RegExp(/\n/g),'')); 
				var data = $("#baseForm").serializeJsonObject();
				data.contractId = $("input[name=contractId]").val();
				data.contractNo = $("input[name=contractNo]").val();
				updateBaseInfo(data , null);
			}
		});
	}
}

function updateTempcapacityInfo() {
	$("input[name=contractFiles]").val(JSON.stringify(files));
	if ($("#tempcapacityForm").validationEngine('validate')) {
		Park.confirm({
			message : "是否确认提交？", //提示内容
			title : "温馨提示", //提示标题
			//点击确定回调方法
			callback : function() {
				var data = $("#tempcapacityForm").serializeJsonObject();
				data.contractId = $("input[name=contractId]").val();
				data.contractNo = $("input[name=contractNo]").val();
				data.userTypeCd = $("input[name='member']:checked").val();								
				var flag = false;
					var imgTypes ="";
					if(files.length < 4){
						flag = true;
					}
					$.each(files,function(index,item){
						
						if(item!=null){			
							image = $.parseJSON(item);  	
							imgTypes += image.imgType
						}
						
					});
					
					if(imgTypes.indexOf("YYZH")<0||imgTypes.indexOf("KHXK")<0||imgTypes.indexOf("DLYS")<0||imgTypes.indexOf("HTZ")<0){
						flag = true;
					}
				
				if(flag){
					toastr["warning"]("相关图片必须上传", "温馨提示");
					return;
				}else{
					updateBaseInfo(data , null);
				}
												
			}
		});
	}
}

function updateTempcapacityPerInfo() {
	$("input[name=contractFiles]").val(JSON.stringify(files));
	if ($("#tempcapacityPerForm").validationEngine('validate')) {
		Park.confirm({
			message : "是否确认提交？", //提示内容
			title : "温馨提示", //提示标题
			//点击确定回调方法
			callback : function() {
				var data = $("#tempcapacityPerForm").serializeJsonObject();
				data.contractId = $("input[name=contractId]").val();
				data.contractNo = $("input[name=contractNo]").val();
				data.userTypeCd = $("input[name='member']:checked").val();

				
				var flag = true;
				var imgTypes ="";
				if(files.length < 12){
					flag = true;
				}
				$.each(files,function(index,item){
					
					if(item!=null){			
						image = $.parseJSON(item);  	
						imgTypes += image.imgType
					}
					
				});
				
				if(imgTypes.indexOf("SFZ")<0||imgTypes.indexOf("JSZ")<0||imgTypes.indexOf("XSZ")<0||imgTypes.indexOf("CYZGZ")<0||imgTypes.indexOf("DLYSJY")
						<0||imgTypes.indexOf("CLBX")<0||imgTypes.indexOf("YHK")<0||imgTypes.indexOf("ZZ")<0||imgTypes.indexOf("FZ")<0||imgTypes.indexOf("CZ")
						<0||imgTypes.indexOf("HZ")<0||imgTypes.indexOf("HTZ")<0){
					flag = true;
				}
				if(flag){
					toastr["warning"]("相关图片必须上传", "温馨提示");
					return;
				}else{
					updateBaseInfo(data , null);
				}
				
				
			}
		});
	}
}

function updateBaseInfo(data , callback) {
	
	if ($("#collaRouteCd").val()!=""){
		data.collaRouteCd = $("#collaRouteCd").val();		
	}
	$.ajax({
		url : conf.ctx + '/tempVendorContract/update.do',
		type : 'post',
		dataType : 'json',
		data : JSON.stringify(data),
		contentType : "application/json",
		async : false,
		success : function(data) {
			if (data.success) {
				if(callback){
					callback();
				}else{
					toastr["success"]("保存成功", "温馨提示");
				}
			} else {
				toastr["error"](data.message ? data.message : "操作失败",
						"温馨提示");
			}
		},
		error : function(e) {
			toastr["error"]("连接服务器超时，请稍后重试");
		}
	});
}

//保存合同信息
function saveTempcapacityInfo(callback) {
	var formId = "";
	var infoId = "";
	var isPerson = $("#memberType").val() == "C";//是否是个人会员
	
	if(isPerson){// C
		formId = "#tempcapacityPerForm";
		infoId = "#tempcapacityPerInfo";
	}else{ // B
		formId = "#tempcapacityForm";
		infoId = "#tempcapacityInfo";
	}

	$("input[name=contractFiles]").val(JSON.stringify(files));
	if ($(formId).validationEngine('validate')) {
		var data = $(formId).serializeJsonObject();
		data.contractId = $("#contractId").val();
		data.contractFiles = JSON.stringify(files);
						
		var flag = false;
		//企业
		if("#tempcapacityInfo"== infoId){
			var imgTypes ="";
			if(files.length < 4){
				flag = true;
			}
			$.each(files,function(index,item){
				
				if(item!=null){			
					image = $.parseJSON(item);  	
					imgTypes += image.imgType
				}
				
			});
			
			if(imgTypes.indexOf("YYZH")<0||imgTypes.indexOf("KHXK")<0||imgTypes.indexOf("DLYS")<0||imgTypes.indexOf("HTZ")<0){
				flag = true;
			}
		}
		//个人
		if("#tempcapacityPerInfo"== infoId){
			var imgTypes ="";
			if(files.length < 12){
				flag = true;
			}
			$.each(files,function(index,item){
				
				if(item!=null){			
					image = $.parseJSON(item);  	
					imgTypes += image.imgType
				}
				
			});
			
			if(imgTypes.indexOf("SFZ")<0||imgTypes.indexOf("JSZ")<0||imgTypes.indexOf("XSZ")<0||imgTypes.indexOf("CYZGZ")<0||imgTypes.indexOf("DLYSJY")
					<0||imgTypes.indexOf("CLBX")<0||imgTypes.indexOf("YHK")<0||imgTypes.indexOf("ZZ")<0||imgTypes.indexOf("FZ")<0||imgTypes.indexOf("CZ")
					<0||imgTypes.indexOf("HZ")<0||imgTypes.indexOf("HTZ")<0){
				flag = true;
			}
		}
		
		if(flag){
			toastr["warning"]("相关图片必须上传", "温馨提示");
			return;
		}else{
			updateBaseInfo(data , callback);
		}
	}
}

//提交
function submitTemp(){
	saveTempcapacityInfo(adjustAfterUpdate);
}
//更新后进行的审核操作
function adjustAfterUpdate(){
	
	var adjustData = {};
	adjustData.contractId = $("#contractId").val();
	adjustData.adjustTypeCd = "SBT";
	adjustData.adjustMessage ="提交审核";
	
	$.ajax({
		url:conf.ctx + '/vendorContract/adjustContact.do',
		type:'post',
		dataType:'json',
		data:JSON.stringify(adjustData),
		contentType:"application/json",
		success:function(data){
			if(data.success){
				toastr["success"]("成功提交！", "温馨提示");
				window.setTimeout(
					function adjustContact(code){
						window.location.href ="/tempVendorContract/toTempContactDeteail.do?tempContactcontractId="+ data.code ;
					},500);
			}else{
				toastr["error"](data.message ? data.message : "操作失败", "温馨提示");
			}						
		}
		,error:function(e){
			toastr["error"]("连接服务器超时，请稍后重试");
		}
	});
	
}

// 审核通过
function checkTempContract(){
	var adjustData = {};
	adjustData.contractId = $("#contractId").val();
	adjustData.adjustTypeCd = "PASS";
	adjustData.adjustMessage ="审核通过";
	$.ajax({
		url:conf.ctx + '/vendorContract/adjustContact.do',
		type:'post',
		dataType:'json',
		data:JSON.stringify(adjustData),
		contentType:"application/json",
		success:function(data){
			if(data.success){
				toastr["success"]("审核通过！", "温馨提示");
				$("input[name=sbtTime]").val(formatDateTime(new Date()));
				window.setTimeout(
					function adjustContact(code){
						window.location.href ="/tempVendorContract/toTempContactDeteail.do?tempContactcontractId="+ data.code ;
					},500);

			}else{
				toastr["error"](data.message ? data.message : "操作失败", "温馨提示");
			}
		}
		,error:function(e){
			toastr["error"]("连接服务器超时，请稍后重试");
		}
	});
}

// 驳回合同
function rejectContract(){
	if($('#rejectContractForm').validationEngine('validate')){
		var adjustData = $("#rejectContractForm").serializeJsonObject();
		adjustData.contractId = $("#contractId").val();
		adjustData.adjustTypeCd = "REJECT";
		$("input[name=rejectTime]").val(formatDateTime(new Date()));
		$("textarea[name=rejectReason]").val(adjustData.adjustMessage);
		$.ajax({
			url:conf.ctx + '/vendorContract/adjustContact.do',
			type:'post',
			dataType:'json',
			data:JSON.stringify(adjustData),
			contentType:"application/json",
			success:function(data){
				if(data.success){
					toastr["success"]("成功驳回合同！", "温馨提示");

					$("#rejectReason").attr("style","display:block;");
					$("#rejectTime").attr("style","display:block;");
					$("#sbtTime").attr("style","display:none;");
					window.setTimeout(
						function adjustContact(code){
							window.location.href ="/tempVendorContract/toTempContactDeteail.do?tempContactcontractId="+ data.code ;
						},500);
				}else{
					toastr["error"](data.message ? data.message : "操作失败", "温馨提示");
				}
				$("#reject-contract-model").modal("hide");


			}
			,error:function(e){
				toastr["error"]("连接服务器超时，请稍后重试");
			}
		});
	}
}

//文件上传
$('.imgPicker').each(function(index, el) {	
	
	initImgPicker(el);
});

var uploader;
$('#fileType ,#personFileType').change(function(){
	
	uploader.destroy();
	initImgPicker($('.imgPicker'));
	initFileUpload();  
})
//初始化文件上传
function initImgPicker(el){
	var fileType;

	if("B"==userTypeCd){
		fileType = $("#fileType").val();
	}else if("C"==userTypeCd){
		fileType =  $("#personFileType").val();
	}
	var hint;
	var singleSize;
	var size;
	var extensions;
	var mimeTypes
	if("HTZ" == fileType){
		size=30*1024*1024;
		singleSize=30*1024*1024;
		hint ="合同附件需小于30M";
		extensions ='pdf,rar,zip'
		mimeTypes ='application/pdf,application/rar,application/zip'
		
	}else{
		singleSize=30*1024*1024;
		size = 30*1024*1024
		hint="上传图片需小于30M"
		extensions ='png,gif,jpg,jpeg,bmp,pdf'
		mimeTypes ='image/png,image/jpg,image/jpeg,application/pdf'	
	}	
	var $btn = $('#ctlBtn');
	uploader = WebUploader.create({
		auto : true, // 选完文件后，是否自动上传
		swf : 'js/Uploader.swf', // swf文件路径
		server : conf.ctx + '/upload/fileUpload.do', // 文件接收服务端	
		pick : el, // 选择文件的按钮。可选
		fileSingleSizeLimit:singleSize,
		fileSizeLimit:size,
		//控制上传类型
		accept : {
			title : 'files',
			extensions : extensions,
			mimeTypes : mimeTypes
		},
		formData : {
			fileType : fileType
		}
	
	});
	uploader.on('fileQueued', function(file) {
		var $list = $(el).siblings('.uploader-list'), $img = $list
				.find('img');
		$list.find('div').attr('id', file.id);

		// 创建缩略图
		uploader.makeThumb(file, function(error, src) {
			if (error) {
				$img.replaceWith('<span>不能预览</span>');
				return;
			}
			$img.attr('src', src);
		}, 200, 120); // 100x100为缩略图尺寸
	});
	// 文件上传过程中创建进度条实时显示。
	uploader.on('uploadProgress', function(file, percentage) {
		var $li = $('#' + file.id), $percent = $li
				.find('.progress span');
		// 避免重复创建
		if (!$percent.length) {
			$percent = $('<p class="progress"><span></span></p>')
					.appendTo($li).find('span');
		}
		$percent.css('width', percentage * 100 + '%');
	});

	// 文件上传成功，给item添加成功class, 用样式标记上传成功。
	uploader.on('uploadSuccess', function(file, res) {
		// console.log(res.filePath);//这里可以得到上传后的文件路径;
		var result = JSON.parse(res._raw);
		var pushFlag = true;
		for (var k = 0; k < files.length; k++) {
			var file = JSON.parse(files[k]);
			if (file.imgType == result.imgType && "HTZ" != file.imgType) {
				files[k] = res._raw;
				pushFlag = false;
				break;			
			}			
		}
		if(pushFlag){
			files.push(res._raw);
		}
		$('#' + file.id).addClass('upload-state-done');
		listContract(files);
	});

	// 文件上传失败，显示上传出错。
	uploader.on('uploadError', function(file) {
	});
	// 完成上传完了，成功或者失败，先删除进度条。
	uploader.on('uploadComplete', function(file) {
		$('#' + file.id).find('.progress').remove();
	});
	
	 uploader.on("error", function (type) {	
		 if(type=="Q_TYPE_DENIED"){
			 toastr["error"]("请选择格式正确的文件"); 
		 }
		 if (type == "Q_EXCEED_SIZE_LIMIT"){			 
			 toastr["error"](hint);
		}
	});
}

//初始化问题
function initFileUpload() {
	$(".webuploader-pick").next().css({
		"width" : "54px",
		"height" : "30px"
	});
}

//图片列表
function listContract(files){	
	
	
	if("B"==userTypeCd){
		 $("#list-contract tbody").html("");
	}else if("C"==userTypeCd){
		$("#person-list-contract tbody").html("");
	}
	 
	  
	$.each(files,function(index,item){
		var type="";
		var fileName=""
		
		if(item!=null){	
			image = $.parseJSON(item); 
			if(undefined != image.fileName){
				fileName = image.fileName;
			}else{
				fileName = image.url;
			}
			imgType = image.imgType;
			switch(imgType){			
			case "YYZH":
				type="营业执照";
				break;
			case "KHXK":
				type="开户许可证";
				break;
			case "DLYS":
				type= "道路运输许可证";
				break;
			case "HTZ":
				type="合同附件";
				break;
			case "SFZ":
				type="身份证";
				break;
			case "JSZ":
				type="驾驶证";
				break;
			case "XSZ":
				type= "行驶证";
				break;
			case "CYZGZ":
				type="从业资格证";
				break;
			case "DLYSJY":
				type="道路运输经营许可证";
				break;
			case "CLBX":
				type="车辆保险单/卡";
				break;
				
			case "YHK":
				type="银行卡照片";
				break;
			case "ZZ":
				type="主照";
				break;
			case "FZ":
				type="副照";
				break;				
			case "CZ":
				type="侧照";
				break;
			case "HZ":
				type="后照";
				break;
			case "HTZ":
				type="合同附件";
				break;
			default:
				type= "其他";
				break;
		}
			
		if("B"==userTypeCd){
				var tr = $("<tr></tr>");
				tr.append("<td><input type='checkbox' name='codes' value="+image.fileId+" imgType="+image.imgType+"></td>");
				tr.append("<td>"+(index+1)+"</td>");
				tr.append("<td>"+fileName+"</td>");
				tr.append("<td>"+type+"</td>");
				$("#list-contract tbody").append(tr);
			}else if("C"==userTypeCd){
				var tr = $("<tr></tr>");
				tr.append("<td><input type='checkbox' name='codes' value="+image.fileId+" imgType="+image.imgType+"></td>");
				tr.append("<td>"+(index+1)+"</td>");
				tr.append("<td>"+fileName+"</td>");
				tr.append("<td>"+type+"</td>");
				$("#person-list-contract tbody").append(tr);
			}			
		}
	});
}
//全选
$("input[name=allCodes]").click(function() { 
	var checked = this.checked;
    $(".table input[name='codes']").each(function() { 
    	this.checked = checked;
    });
});

//增加图片
$("#addImg, #personAddImg").click(function(){
	if("" == $("#fileType").val()&&""==$("#personFileType").val()){
		toastr["warning"]("先选择文件类型", "温馨提示");
		return false;
	}
});

//删除图片
$("#deleteImg, #personDeleteImg").click(function(){

	if(0 == $("input[name='codes']:checked").length){
		toastr["warning"]("请先选择要删除的内容", "温馨提示");
		return false;
	}
	Park.confirm({
		message:"确定要删除勾选项吗?", //提示内容
		title:"温馨提示",  //提示标题
		//点击确定回调方法
		callback:function(){
			uploader.destroy();
			initImgPicker($('.imgPicker'));
			initFileUpload();
			deleteFile();																
		}
	});	
	
});

function deleteFile(){
	$("input[name='codes']:checked").each(function(i, item) {
		var fileId = $(this).val();
		for (var k = 0; k < files.length; k++) {
			var file = JSON.parse(files[k]);
			if (file.fileId == fileId) {
				files.splice(k,1);		
			}			
		}			
	})
	
	listContract(files)
}

//企业文件下载
$("#download").click(function(){
	if(0 == $("input[name='codes']:checked").length){
		toastr["warning"]("请先选择要下载的内容", "温馨提示");
		return false;
	}
	var fileIds=""
	$("input[name='codes']:checked").each(function(i, item) {
		if (i == 0) {
			fileIds = $(this).val();
		} else {
			fileIds = fileIds + "," + $(this).val();
		}				
	});
	$('#fileIds').val(fileIds);
	$('#fileDownloadForm').submit();
	$('#fileIds').val('');
});

//个人文件下载
$("#personDownload").click(function(){
	if(0 == $("#person-list-contract input[name='codes']:checked").length){
		toastr["warning"]("请先选择要下载的内容", "温馨提示");
		return false;
	}
	var fileIds=""
	$("#person-list-contract input[name='codes']:checked").each(function(i, item) {
		if (i == 0) {
			fileIds = $(this).val();
		} else {
			fileIds = fileIds + "," + $(this).val();
		}				
	});
	$('#personFileIds').val(fileIds);
	$('#personFileDownloadForm').submit();
	$('#personFileIds').val('');
});

function memberChange() {
	$("input[name=memberTypeCd]").attr("disabled", true);
	if ($("#memberType").val()== "C") {

		$("input[name=contractStartDate]").attr("disabled", true);
		$("input[name=contractEndDate]").attr("disabled", true);
		$(".default").attr("disabled", true);

		$("#driver-select2").removeAttr("disabled");
		$("input[name=idNo]").removeAttr("readonly");
		$("input[name=drivername]").addClass(
				"validate[required,custom[valiName]]");
		$("input[name=idNo]").addClass("validate[required,custom[IdNo]]");
		
		$("input[name=memberTypeCd]").val("个人会员");
		$("input[name=userTypeCd]").val("C");
		
		var startDate = new Date(); 
		var endDate = new Date();
		$("input[name=contractStartDate]").val(formatDate(startDate));
		$("input[name=contractEndDate]").val(formatDate(endDate.setDate(endDate.getDate() + 20)));
		if($("select[name=truckTypeCd]").val() == "L960") {
			$("#trNum").attr("disabled",true);
		}else{
			$("#trNum").attr("disabled",false);
		}
		$("input[name=driverName]").attr("disabled", false);
	} else if ($("#memberType").val() == "B") {
		
		$("#driver-select2").empty();
		$("input[name=idNo]").val("");
		$("#driver-select2").attr("disabled",true);
		$("input[name=idNo]").attr("readonly",true);
		
		$("input[name=contractStartDate]").removeAttr("disabled");
		$("input[name=contractEndDate]").removeAttr("disabled");
		$(".default").removeAttr("disabled");

		$("input[name=drivername]").removeClass(
				"validate[required,custom[valiName]]");
		$("input[name=idNo]").removeClass("validate[required,custom[IdNo]]");
		
		$("input[name=memberTypeCd]").val("企业会员");
		$("input[name=userTypeCd]").val("B");
		$("#trNum").attr("disabled",false);
		$("input[name=driverName]").attr("disabled", true);
	} else {
		$("input[name=memberTypeCd]").val("");
		$("input[name=userTypeCd]").val("");
	}
	
}


//格式化日期yyyy-MM-dd
function formatDate (strTime) {
    var date = new Date(strTime);
    
    var year = date.getFullYear();

    var month = date.getMonth()+ 1;
    if(month.toString().length < 2){
    	month = "0"+ month;
    }
    
    var dt = date.getDate();
    if(dt.toString().length < 2){
    	dt = "0"+ dt;
    }
    
    return year+"-"+month+"-"+dt;
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
//添加更多的合同照片
$(".addMoreHTZ").click(function(){
	var divLength = $(this).parent().parent().parent().find("#upload").find(".compact").length;
	var _file_up_html = '<div class="col-md-3 compact">'
		+'<div class="form-group"></div>'
		+'<div class="uploadimg t-c">'
		+'<div id="fileList" class="uploader-list ">'
		+'<img class="image" id="showpic_HTZ_'+ (divLength + 1) +'" src="/images/icon/file.png" alt="">'
		+'</div>'
		+'<div class="form-group"></div>'
		+'<div class="imgPicker back col-md-7" id="pic_HTZ_'+ (divLength + 1) +'" style="text-align: center">上传合同照</div>'
		+'</div>'
		+'</div>';
	if(divLength<16){
		$(this).parent().parent().parent().find("#upload").append(_file_up_html);
		// 初始化刚添加的图片控件
		initImgPicker($(this).parent().parent().parent().find("#upload").find(".compact:last").find('.imgPicker')[0])
	}else{
		toastr["warning"]("合同照上传最多16张", "温馨提示");
	}
});
//删除合同照片
$(".removeHTZ").click(function(){
	var divLength = $(this).parent().parent().parent().find("#upload").find(".compact").length;
	if(divLength > 1){
		
		var tmp_img_type = $(this).parent().parent().parent().find("#upload").find(".compact:last").find('.uploadimg').find('.image').attr('id');
		
		tmp_img_type = tmp_img_type.split("_")[1] + "_" + tmp_img_type.split("_")[2];
		
		console.log("tmp_img_type = " + tmp_img_type);
		for (var k = files.length - 1; k > 0; k--) {
			var file = JSON.parse(files[k]);
			console.log(file.imgType);
			if (file.imgType == tmp_img_type) {
				files.removeAt(k);
				break;			
			}			
		}
		$(this).parent().parent().parent().find("#upload").find(".compact:last").remove(); // 删掉最后一个图片
		
	}else{
		toastr["warning"]("请至少保留1张合同照", "温馨提示");
	}
});

//添加更多的合同照片
$(".perAddMoreHTZ").click(function(){
	var divLength = $(this).parent().parent().parent().find("#perUpload").find(".compact").length;
	var _file_up_html = '<div class="col-md-3 compact">'
		+'<div class="form-group"></div>'
		+'<div class="uploadimg t-c">'
		+'<div id="fileList" class="uploader-list ">'
		+'<img class="image" id="showpic_PHTZ_'+ (divLength + 1) +'" src="/images/icon/file.png" alt="">'
		+'</div>'
		+'<div class="form-group"></div>'
		+'<div class="imgPicker back col-md-7" id="pic_PHTZ_'+ (divLength + 1) +'" style="text-align: center">上传合同照</div>'
		+'</div>'
		+'</div>';
	if(divLength<16){
		$(this).parent().parent().parent().find("#perUpload").append(_file_up_html);
		// 初始化刚添加的图片控件
		initImgPicker($(this).parent().parent().parent().find("#perUpload").find(".compact:last").find('.imgPicker')[0])
	}else{
		toastr["warning"]("合同照上传最多16张", "温馨提示");
	}
});
//删除合同照片
$(".perRemoveHTZ").click(function(){
	var divLength = $(this).parent().parent().parent().find("#perUpload").find(".compact").length;
	if(divLength > 1){
		
		var tmp_img_type = $('#tempcapacityPerForm').find("#perUpload").find(".compact:last").find('.uploadimg').find('.image').attr('id');
		
		tmp_img_type = tmp_img_type.split("_")[1] + "_" + tmp_img_type.split("_")[2];
		
		console.log("tmp_img_type = " + tmp_img_type);
		for (var k = files.length - 1; k > 0; k--) {
			var file = JSON.parse(files[k]);
			console.log(file.imgType);
			if (file.imgType == tmp_img_type) {
				files.removeAt(k);
				break;			
			}			
		}
		$(this).parent().parent().parent().find("#perUpload").find(".compact:last").remove(); // 删掉最后一个图片
		
	}else{
		toastr["warning"]("请至少保留1张合同照", "温馨提示");
	}
});

//基础信息的字段校验
function validateBase(){
	var date =new Date();	
	date.setHours(0, 0, 0, 0);//设为当天0点0分0秒0毫秒。
	if($("input[name=contractEndDate]").val() < $("input[name=contractStartDate]").val()){
		toastr["warning"]("合同到期时间不能小于开始时间", "温馨提示");
		return true;
	}
	if(new Date($("input[name=contractEndDate]").val().replace("-", "/").replace("-", "/")) < date){
		toastr["warning"]("合同到期时间不能小于当前时间", "温馨提示");
		return true;
	}
	
}
function checkTransRes(){
	if($('#memberType').val() == "C" && $("select[name=truckTypeCd]").val() != "L960"){
		/*if($('#contractId').val() != null && $('#contractId').val() != ""){
			if(Number($('#tkNum').val()) != 1 || Number($('#tkCount').val()) != 1){
				toastr["error"]("临时车车头数应等于实际关联车头数，且必须为1");
				return true;
			}
			if(Number($('#trNum').val()) != 1 || Number($('#trCount').val()) != 1){
				toastr["error"]("临时车车厢数应等于实际关联车厢数，且必须为1");
				return true;
			}
		}else{
			
		}*/
		if(Number($('#tkNum').val()) != 1 && Number($('#tkNum').val()) != 0){
			toastr["error"]("临时车车头数必须为1或者0");
			return true;
		}
		if(Number($('#trNum').val()) != 1 && Number($('#trNum').val()) != 0){
			toastr["error"]("临时车车厢数必须为1或者0");
			return true;
		}
	}else if($('#memberType').val() == "C" && $("select[name=truckTypeCd]").val() == "L960"){
		if($('#contractId').val() != null && $('#contractId').val() != ""){
			/*if(Number($('#tkNum').val()) != 1 || Number($('#tkCount').val()) != 1){
				toastr["error"]("临时车车头数应等于实际关联车头数，且必须为1");
				return true;
			}*/
		}else{
			if(Number($('#tkNum').val()) != 1 && Number($('#tkNum').val()) != 0){
				toastr["error"]("临时车车头数必须为1或者0");
				return true;
			}
		}
	}else{
		if(Number($('#tkNum').val()) < Number($('#tkCount').val())){
			toastr["error"]("车头数应大于等于实际关联车头数");
			return true;
		}
		if(Number($('#trNum').val()) < Number($('#trCount').val())){
			toastr["error"]("车厢数应大于等于实际关联车厢数");
			return true;
		}
	}
		
}

//车头数、挂厢数——车牌号码显示
function showTrAndTkPlateNo() {
	//车头车牌号码
	var tkNos = $("#tkNos_div").html();
	//挂厢车牌号码
	var trNos = $("#trNos_div").html();
	//转换取出多余空格与最后一个、号
//	tkNos = $.trim(tkNos);
//	trNos = $.trim(trNos);
	tkNos = tkNos.replace(/\s+/g,"");
	trNos = trNos.replace(/\s+/g,"");
	$("#tkCount").val((tkNos.split("，")).length-1);
	$("#trCount").val((trNos.split("，")).length-1);
	tkNos = tkNos.substring(0,tkNos.length-1);
	trNos = trNos.substring(0,trNos.length-1);
	$("input[name=tkNos]").val(tkNos);
	$("input[name=trNos]").val(trNos);
}

//更新时线路问题
function routeChange(){
	//线路		
	var contractRouteId = getSelectedRoute().id;
	$("#contractRouteId").val(contractRouteId);
} 



function clearTransRes(ids,resIds,resType){
	var data = {};
	data.ids = ids;
	data.contractId = $("#contractId").val();
	data.resIds = resIds;
	$.ajax({
		url:conf.ctx + '/vendorContractRes/delContractRes.do',
		type:'post',
		dataType:'json',
		data:JSON.stringify(data),
		contentType:"application/json",
		success:function(data){
			if(data.success){
				if(resType == 'tk'){
					$('#tkCount').val(0);
				}
				if(resType == 'tr'){
					$('#trCount').val(0);
				}
			}
		}
		,error:function(e){
			toastr["error"]("连接服务器超时，请稍后重试");
		}
	});	
}

//终止合同
function terminateContract(){
	if($('#endContractForm').validationEngine('validate')){
		var data = $("#endContractForm").serializeJsonObject();
		data.contractId = $("input[name=contractId]").val();
		data.adjustTypeCd = "STOP";
		$("input[name=endTime]").val(formatDateTime(new Date()));
		$("textarea[name=endReason]").val(data.adjustMessage);
		$.ajax({
			url:conf.ctx + '/vendorContract/adjustContact.do',
			type:'post',
			dataType:'json',
			data:JSON.stringify(data),
			contentType:"application/json",
			success:function(data){
				if(data.success){
					toastr["success"]("调整状态成功！", "温馨提示");
					 					 
					$("#endTime").attr("style","display:block;");
					$("#endReason").attr("style","display:block;");
					window.setTimeout(
							 function adjustContact(code){
								 window.location.href ="/tempVendorContract/toTempContactDeteail.do?tempContactcontractId="+ data.code ;
							},500);
				}else{
					toastr["error"](data.message ? data.message : "操作失败", "温馨提示");
				}
				$("#terminate-contract-model").modal("hide");
				
				
			}
		,error:function(e){
			toastr["error"]("连接服务器超时，请稍后重试");
		}
		});	
	}
	
}


