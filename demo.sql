SELECT 
    tt.tk_res_id AS tt_tk_res_id,
    tt.task_id AS tt_task_id,
    tt.task_def_name AS tt_task_def_name,
    tt.plan_start_time AS tt_plan_start_time,
    tt.plan_end_time AS tt_plan_end_time,
    tt.real_start_time AS tt_real_start_time,
    tt.real_end_time AS tt_real_end_time,
    tt.task_status_cd AS tt_task_status_cd
FROM
    `tbl_task` tt
WHERE
	tt.tk_res_id = 4816
    AND tt.`task_def_code` != '006'
        AND tt.`DELETED` = 0
        AND (
        -- 忙碌<1>,处于执行中
        tt.task_status_cd = 'EXECUTING'
        OR 
        -- 忙碌<2>,当前时间处于计划时间区间内
        (NOW() BETWEEN tt.plan_start_time AND tt.plan_end_time AND task_status_cd = 'PUBLISHED')
        -- OR
        -- 忙碌<3>,当前时间2小时后有计划
        -- (date_add(now(), interval 2 hour) BETWEEN tt.plan_start_time AND tt.plan_end_time and task_status_cd = 'PUBLISHED')
        )
		ORDER BY tt.task_status_cd,tt.Plan_start_time;

