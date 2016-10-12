var calculatorGenerator = function(){
var self = this;

var initial_cost_input = {users:null, 
                          months:null,
                          programmers:null,
                          program_dom:null
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
                 custom:null,
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
                 total:null,
                 month_length:null
                }


    self.calculate = function(){
        $('#submit').click(function(){
            self.clear();
            event.preventDefault();
            self.set_input_value();
            if (initial_cost_input.months != null && initial_cost_input.programmers != null){
            self.add_initial_cost();
            }else if(initial_cost_input.months == null || initial_cost_input.programmers == null){
            self.checkbox_check();
            self.data_storage();
            self.data_security();
            self.training();
            self.custom_set();
            self.support();
            base_cost.total = check_box.total+base_cost.data_storage+base_cost.data_security+base_cost.training+base_cost.custom+base_cost.support;
            console.log("base cost", base_cost.total);
            $("#tco_dom").append(base_cost.total); 
            }
        })
        
    }
    self.calc_prog = function(){
      $('#prog_btn').click(function(){
            $('#prog_dom').empty();
            self.programmer_count();
        })
    }
    self.set_input_value = function(){
      var x = $("input[name='time_months']").val();
      var y = $("input[name='num_programmers']").val();
        initial_cost_input.users = $("input[name='num_users']").val();

        console.log(typeof x);
        if( x  != ""){
          initial_cost_input.months = x;
        }
        if( y != ""){
          initial_cost_input.programmers = y;
        }
        
    }
    self.clear = function(){
      $("#initial_cost_dom").empty();
      $("#data_stor_dom").empty();
      $("#data_secur_dom").empty();
      $("#train_dom").empty();
      $("#cust_dom").empty();
      $("#support_dom").empty();
      $("#tco_dom").empty();
    }
    self.initial_cost = function(){
        base_cost.initial_cost = initial_cost_input.months * initial_cost_input.programmers * set_times.hours_per_day * set_times.days_per_month *set_times.hourly_rate;
        console.log("initial cost: ", base_cost.initial_cost);
        $("#initial_cost_dom").append(base_cost.initial_cost);
    }
    self.data_storage = function(){
        base_cost.data_storage = Math.round((12*5*25*(4.2835*Math.log(initial_cost_input.users)-4.459))*100/100);
        console.log("initial cost-data storage: ", base_cost.data_storage);
        $("#data_stor_dom").append(base_cost.data_storage);
    }
    self.data_security = function(){
        base_cost.data_security = 5*16*initial_cost_input.users;
        console.log("initial cost-data security: ", base_cost.data_security);
        $("#data_secur_dom").append(base_cost.data_security);

    }
    self.training = function(){
        base_cost.training = 1000*initial_cost_input.users;
        console.log("initial cost-training: ", base_cost.training);
        $("#train_dom").append(base_cost.training);
    }
    self.custom_maintenance = function(){
        base_cost.custom_maintenance = 3*base_cost.initial_cost;
        console.log("initial cost-custom-maintenance: ", base_cost.custom_maintenance);
        $("#cust_dom").append(base_cost.training);
    }
    self.support = function(){
        base_cost.support = 1500*initial_cost_input.users;
        console.log("initial cost-support: ", base_cost.support);
         $("#support_dom").append(base_cost.support);
    }
    self.custom_set = function(){
      base_cost.custom = 3*check_box.total;
      console.log("initial custom: ", base_cost.custom);
      $("#cust_dom").append(base_cost.custom);

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
        $("#tco_dom").append(base_cost.total); 
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
        console.log("checkbox total: ", check_box.total);
        $("#initial_cost_dom").append(check_box.total); 
    }
    self.check_1 = function(){
        if($("input[name='basic_platform']").prop('checked')){
            check_box.basic_platform = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*3;
            check_box.total += check_box.basic_platform;
            check_box.month_length += 3;
            console.log("basic platform: ", check_box.basic_platform);
        }
    }
    self.check_2 = function(){
        if($("input[name='basic_lead_capture']").prop('checked')){
            check_box.basic_lead_capture = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*1;
            check_box.total += check_box.basic_lead_capture;
            check_box.month_length += 1;
            console.log("basic lead capture: ", check_box.basic_lead_capture);
        }
    }
    self.check_3 = function(){
    if($("input[name='advanced_lead_capture']").prop('checked')){
        check_box.advanced_lead_capture = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*3;
        check_box.total += check_box.advanced_lead_capture;
        check_box.month_length += 3;
        console.log("advance lead capture: ", check_box.advanced_lead_capture);
        }
    }
    self.check_4 = function(){
    if($("input[name='basic_distribution']").prop('checked')){
        check_box.basic_distribution = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*1;
        check_box.total += check_box.basic_distribution;
        check_box.month_length += 1;
        console.log("basic distribution: ", check_box.basic_distribution);
        }
    }
    self.check_5 = function(){
    if($("input[name='advance_distribution']").prop('checked')){
        check_box.advance_distribution = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*4;
        check_box.total += check_box.advance_distribution;
        check_box.month_length += 4;
        console.log("advance distribution: ", check_box.advance_distribution);
        }
    }
    self.check_6 = function(){
    if($("input[name='prioritization']").prop('checked')){
        check_box.prioritization = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*3;
        check_box.total += check_box.prioritization;
        check_box.month_length += 3;
        console.log("prioritization: ", check_box.prioritization);
        }
    }
     self.check_7 = function(){
    if($("input[name='automated_workflow']").prop('checked')){
        check_box.automated_workflow = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*2;
        check_box.total += check_box.automated_workflow;
        check_box.month_length += 2;
        console.log("automated_workflow: ", check_box.automated_workflow);
        }
    }
     self.check_8 = function(){
    if($("input[name='automated_communication']").prop('checked')){
        check_box.automated_communication = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*2;
        check_box.total += check_box.automated_communication;
        check_box.month_length += 2;
        console.log("basic platform: ", check_box.basic_platform);
        }
    }
     self.check_9 = function(){
    if($("input[name='report_analysis']").prop('checked')){
        check_box.report_analysis = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*2;
        check_box.total += check_box.report_analysis;
        check_box.month_length += 2;
        console.log("basic platform: ", check_box.basic_platform);
        }
    }
     self.check_10 = function(){
    if($("input[name='basic_outbound']").prop('checked')){
        check_box.basic_outbound = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*2;
        check_box.total += check_box.basic_outbound;
        check_box.month_length += 2;
        console.log("basic outbound: ", check_box.basic_outbound);
        }
    }
     self.check_11 = function(){
    if($("input[name='basic_inbound']").prop('checked')){
        check_box.basic_inbound = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*1;
        check_box.total += check_box.basic_inbound;
        check_box.month_length += 1;
        console.log("basic inbound: ", check_box.basic_inbound);
        }
    }
     self.check_12 = function(){
    if($("input[name='advanced_dial_func']").prop('checked')){
        check_box.advanced_dial_func = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*5;
        check_box.total += check_box.advanced_dial_func;
        check_box.month_length += 5;
        console.log("advanced_dial_func: ", check_box.advanced_dial_func);
        }
    }
     self.check_13 = function(){
    if($("input[name='find_new_pros']").prop('checked')){
        check_box.find_new_pros = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*1;
        check_box.total += check_box.find_new_pros;
        check_box.month_length += 1;
        console.log("find_new_pros: ", check_box.find_new_pros);
        }
    }
     self.check_14 = function(){
    if($("input[name='email_new_pros']").prop('checked')){
        check_box.email_new_pros = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*1;
        check_box.total += check_box.email_new_pros;
        check_box.month_length += 1;
        console.log("email new pros: ", check_box.email_new_pros);
        }
    }
     self.check_15 = function(){
    if($("input[name='email_patt']").prop('checked')){
        check_box.email_patt = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*1;
        check_box.total += check_box.email_patt;
        check_box.month_length += 1;
        console.log("email pattern: ", check_box.email_patt);
        }
    }
     self.check_16 = function(){
    if($("input[name='add_lead_info'").prop('checked')){
        check_box.add_lead_info = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*2;
        check_box.total += check_box.add_lead_info;
        check_box.month_length += 2;
        console.log("add lead info: ", check_box.add_lead_info);
        }
    }
     self.check_17 = function(){
    if($("input[name='leaderboards']").prop('checked')){
        check_box.leaderboards = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*1;
        check_box.total += check_box.leaderboards;
        check_box.month_length += 1;
        console.log("leaderboards: ", check_box.leaderboards);
        }
    }
     self.check_18 = function(){
    if($("input[name='referral_mang']").prop('checked')){
        check_box.referral_management = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*2;
        check_box.total += check_box.referral_management;
        check_box.month_length += 2;
        console.log("referral manag: ", check_box.referral_management);
        }
    }
     self.check_19 = function(){
    if($("input[name='present_tool']").prop('checked')){
        check_box.present_tool = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*2;
        check_box.total += check_box.present_tool;
        check_box.month_length += 2;
        console.log("present tool", check_box.present_tool);
        }
    }
     self.check_20 = function(){
    if($("input[name='market_auto']").prop('checked')){
        check_box.market_auto = 3*set_times.hourly_rate*set_times.days_per_month*set_times.hours_per_day*4;
        check_box.total += check_box.market_auto;
        check_box.month_length += 4;
        console.log("market auto", check_box.market_auto);
        }
    }
    self.programmer_count = function(){
      var z = $("input[name='program_dom']").val();
      if (z != ""){
        initial_cost_input.program_dom = check_box.month_length*3/z;
        console.log(initial_cost_input.program_dom);
        $("#prog_dom").append(initial_cost_input.program_dom);
      }
      
    }
      
}
$(document).ready(function (){
    form = new calculatorGenerator();
    form.calculate();
    form.calc_prog();
})
