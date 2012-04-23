/**
 * 企业管理员
 */

//会议查看用户
var meeting_user_list = {};
jQuery(function(){
	$('.meeting_row').click(function(){
		var id = this.id.split('-').pop();
		if(typeof(meeting_user_list[id]) == 'object' && meeting_user_list[id].length >0){
			return render_meeting_user_list(meeting_user_list[id]);
		}
		$.getJSON('/mymeeting/get_meeting_user_list/'+id,function(list){
			if(typeof(list)=='object' && list.length>0){
				meeting_user_list[id] = list;
			}
			render_meeting_user_list(list);
		});
	});
});
//渲染用户
function render_meeting_user_list(list){
	$('#meeting_user_list').empty();
	$.each(list ,function(index,item){
		$('#meeting_user_list').append('<div class="spanUser"><span class="icon icon-freg"></span><span class="username">'+item+'</span></div>');
	});
	$('#meeting_user_list').append('<div class="clearfix"></div>');
	
		
}

//预约会议界面，版定用户选择
jQuery(function(){
	$('#start_time').datepicker();
	$('#left_user_list input:checkbox').live('click',function(){
    	$('#right_user_list').append($(this).parent().remove());
    });

	$('#right_user_list input:checkbox').live('click',function(){
    	$('#left_user_list').append($(this).parent().remove());
    });
});


//进入会议
function enter_meeting(meeting_id){
	
}

//编辑会议
function edit_company_meeting(meeting_id){
	
}
//删除会议
function delete_company_meeting(meeting_id){
	
}

//预约会议
function open_meeting(){
	window.location.href = '/mymeeting/company_reservation';
}

function do_open_meeting(form){
	if($.trim(form.title.value) == ""){
		alert('会议主题不能为空');
		return false;
	}
	if($.trim(form.start_time.value) ==''){
		alert('会议开始时间必须填写');
		return false;
	}
	
	var user_list = [];
	$('#right_user_list input:checked').each(function(){
		user_list.push(this.id);
	});
	
	form.user_list.value = user_list.join(',');
	form.submit();
}

//预约公共会议
function open_public_meeting(){
	window.location.href = '/mymeeting/public_reservation';
}


function do_open_public_meeting(form){
	if($.trim(form.title.value) == ""){
		alert('会议主题不能为空');
		return false;
	}
	if($.trim(form.start_time.value) ==''){
		alert('会议开始时间必须填写');
		return false;
	}
	if($.trim(form.start_time.value) ==''){
		alert('会议开始时间必须填写');
		return false;
	}
	
	form.submit();
}