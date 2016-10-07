var calculatorGenerator = function(){
var self = this;
var initial_cost_input = {users:null, 
                          months:null,
                          programmers:null
                      }
var set_times = {hourly_rate:125,
                 hours_per_day:8,
                 days_per_month:22
                 }                      
var base_cost = {initial_cost:null,
                 data_storage:null,
                 data_security:null,
                 training:null,
                 custom_maintenance:null,
                 support:null,
                 total:null
                 }
var check_box = {basic_platform:null,
                 basic_lead_capture:null,
                 advanced_lead_capture:null,
                 basic_distribution:null,
                 advanced_distribution:null,
                 prioritization:null,
                 automated_workflow:null,
                 automated_communication:null,
                 report_analysis:null,
                 basic_outbound:null,
                 basic_inbound:null,
                 advanced_dialer:null,
                 find_new_prospects:null,
                 email_new_prospects:null,
                 email_pattern:null,
                 additional_info:null,
                 leaderboards:null,
                 referral_management:null,
                 presentation_tool:null,
                 marketing_automation:null,
                 check_total:null
                }


    self.calculate = function(){
        $('#submit').click(function(){
            event.preventDefault();
            self.set_input_value();
            if (initial_cost_input.months != null && initial_cost_input.programmers != null){
            self.add_initial_cost();
            }else if(initial_cost_input.months == null || initial_cost_input.programmers == null){
            self.checkbox_check();
            }
        })
        
    }
    self.set_input_value = function(){
        initial_cost_input.users = $("input[name='num_users']").val();
        initial_cost_input.months = $("input[name='time_months']").val();
        initial_cost_input.programmers = $("input[name='num_programmers']").val();
    }
    self.initial_cost = function(){
        base_cost.initial_cost = initial_cost_input.months * initial_cost_input.programmers * set_times.hours_per_day * set_times.days_per_month *set_times.hourly_rate;
        console.log("initial cost: ", base_cost.initial_cost);
    }
    self.data_storage = function(){
        base_cost.data_storage = 12*5*25*(4.2835*Math.log(initial_cost_input.users)-4.459);
        console.log("initial cost-data storage: ", base_cost.data_storage);
    }
    self.data_security = function(){
        base_cost.data_security = 5*16*initial_cost_input.users;
        console.log("initial cost-data security: ", base_cost.data_security);
    }
    self.training = function(){
        base_cost.training = 1000*initial_cost_input.users;
        console.log("initial cost-training: ", base_cost.training);
    }
    self.custom_maintenance = function(){
        base_cost.custom_maintenance = 3*base_cost.initial_cost;
        console.log("initial cost-custom-maintenance: ", base_cost.custom_maintenance);
    }
    self.support = function(){
        base_cost.support = 1500*initial_cost_input.users;
        console.log("initial cost-support: ", base_cost.support);
    }
    self.add_initial_cost = function(){
        self.initial_cost();
        self.data_storage();
        self.data_security();
        self.training();
        self.custom_maintenance();
        self.support();
        base_cost.total = base_cost.initial_cost+base_cost.data_storage+base_cost.data_security+base_cost.training+base_cost.custom_maintenance+base_cost.support;
        console.log("total cost: ", base_cost.total);
    }
    self.checkbox_check = function(){
        self.check_1();
        self.check_2();
        self.check_3();
        self.check_4();
        self.check_5();
        self.check_6();
        self.check_7();
        self.check_8();
        self.check_9();
        self.check_10();
        self.check_11();
        self.check_12();
        self.check_13();
        self.check_14();
        self.check_15();
        self.check_16();
        self.check_17();
        self.check_18();
        self.check_19();
        self.check_20();
        console.log(check_box.check_total);
    }
    self.check_1 = function(){
        if($("input[name='basic_platform']:selected")){
            check_box.basic_platform = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*3;
            check_box.check_total += check_box.basic_platform;
        }
    }
    self.check_2 = function(){
        if($("input[name='basic_lead_capture']:selected")){
            check_box.basic_lead_capture = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*1;
            check_box.check_total += check_box.basic_lead_capture;
        }
    }
    self.check_3 = function(){
    if($("input[name='advanced_lead_capture']:selected")){
        check_box.advanced_lead_capture = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*3;
        check_box.check_total += check_box.advanced_lead_capture;
        }
    }
    self.check_4 = function(){
    if($("input[name='basic_distribution']:selected")){
        check_box.basic_distribution = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*1;
        check_box.check_total += check_box.basic_distribution;
        }
    }
    self.check_5 = function(){
    if($("input[name='advance_distribution']:selected")){
        check_box.advance_distribution = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*4;
        check_box.check_total += check_box.advance_distribution;
        }
    }
    self.check_6 = function(){
    if($("input[name='prioritization']:selected")){
        check_box.prioritization = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*3;
        check_box.check_total += check_box.prioritization;
        }
    }
     self.check_7 = function(){
    if($("input[name='automated_workflow']:selected")){
        check_box.automated_workflow = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*2;
        check_box.check_total += check_box.automated_workflow;
        }
    }
     self.check_8 = function(){
    if($("input[name='automated_communication']:selected")){
        check_box.automated_communication = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*2;
        check_box.check_total += check_box.automated_communication;
        }
    }
     self.check_9 = function(){
    if($("input[name='report_analysis']:selected")){
        check_box.report_analysis = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*2;
        check_box.check_total += check_box.report_analysis;
        }
    }
     self.check_10 = function(){
    if($("input[name='basic_outbound']:selected")){
        check_box.basic_outbound = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*2;
        check_box.check_total += check_box.basic_outbound;
        }
    }
     self.check_11 = function(){
    if($("input[name='basic_inbound']:selected")){
        check_box.basic_inbound = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*1;
        check_box.check_total += check_box.basic_inbound;
        }
    }
     self.check_12 = function(){
    if($("input[name='advanced_dial_func']:selected")){
        check_box.advanced_dial_func = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*5;
        check_box.check_total += check_box.advanced_dial_func;
        }
    }
     self.check_13 = function(){
    if($("input[name='find_new_pros']:selected")){
        check_box.find_new_pros = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*1;
        check_box.check_total += check_box.find_new_pros;
        }
    }
     self.check_14 = function(){
    if($("input[name='email_new_pros']:selected")){
        check_box.email_new_pros = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*1;
        check_box.check_total += check_box.email_new_pros;
        }
    }
     self.check_15 = function(){
    if($("input[name='email_patt']:selected")){
        check_box.email_patt = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*1;
        check_box.check_total += check_box.email_patt;
        }
    }
     self.check_16 = function(){
    if($("input[name='add_lead_info']:selected")){
        check_box.add_lead_info = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*2;
        check_box.check_total += check_box.add_lead_info;
        }
    }
     self.check_17 = function(){
    if($("input[name='leaderboards']:selected")){
        check_box.leaderboards = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*1;
        check_box.check_total += check_box.leaderboards;
        }
    }
     self.check_18 = function(){
    if($("input[name='referral_mang']:selected")){
        check_box.referral_mang = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*2;
        check_box.check_total += check_box.referral_manag;
        }
    }
     self.check_19 = function(){
    if($("input[name='present_tool']:selected")){
        check_box.present_tool = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*2;
        check_box.check_total += check_box.present_tool;
        }
    }
     self.check_20 = function(){
    if($("input[name='market_auto']:selected")){
        check_box.market_auto = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*4;
        check_box.check_total += check_box.market_auto;
        }
    }
      
}
$(document).ready(function (){
    form = new calculatorGenerator();
    form.calculate();
})
