
(function ($) {
    $(document).ready(function () {

        $("#check_in_date_picker").on('change', function () {
            var check_in_date = $(this).val();
            $("#check_in_date_picker").val(check_in_date);
        });

        $("#check_out_date_picker").on('change', function () {
            var check_out_date = $(this).val();
            $("#check_out_date_picker").val(check_out_date);
        });

        $("#check_in_date_picker").datepicker({ numberOfMonths: 2 });
        $("#check_out_date_picker").datepicker({ numberOfMonths: 2 });

        $("#check_out_date_picker").on('change', function () {
            var get_date_to = new Date($(this).val());
            var get_date_from = new Date($("#check_in_date_picker").val());
            var date_dif = get_date_to.getTime() - get_date_from.getTime();
            var num_of_days = Math.abs(date_dif / (1000 * 3600 * 24));
            $("#set_num_of_days").val(num_of_days);
        });

        var room_inc = 1;
        $(".room_inc").on('click', function () {
            if (room_inc < 2) {
                room_inc++;
                $(".num_of_room").val(room_inc);
            }
        });

        $(".room_decre").on('click', function () {
            if (room_inc > 1) {
                room_inc--;
                $(".num_of_room").val(room_inc);
            }
        });

        // end room 

        var adlt_inc = 2;
        $(".adlt_inc").on('click', function () {
            if (adlt_inc < 4) {
                adlt_inc++;
                $(".num_of_adults").val(adlt_inc);
            }
        });

        $(".adlt_decre").on('click', function () {
            if (adlt_inc > 1) {
                adlt_inc--;
                $(".num_of_adults").val(adlt_inc);
            }
        });
        // end adlt_decre 

        var children_inc = 0;
        $(".children_inc").on('click', function () {
            if (children_inc < 4) {
                children_inc++;
                $(".num_of_child").val(children_inc);

                let child_age = `
                    <div class="single_input remove_before_line">
                        <div class="single_input_left">
                            <input id="child_age_${children_inc}" class="form-control" type="text" value="0">
                        </div>
                        <div class="single_input_right">
                            <div class="input_spinner">
                                <div class="spinner_left">
                                    <div class="spinner_left_innr">
                                        <span child_inc_row="${children_inc}" class="child_inc_cmn rm_incre child_age_inc_${children_inc}"></span>
                                        <span child_decr_row="${children_inc}"  class="child_decr_cmn rm_de_incre child_age_decre_${children_inc}"></span>
                                    </div>
                                </div>
                                <div class="spinner_right">
                                    <label for="children">Child age </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                $(".input_box_bottom").append(child_age);
            }
        });

        $(".children_decre").on('click', function () {
            if (children_inc > 0) {
                children_inc--;
                $(".num_of_child").val(children_inc);
                $(".input_box_bottom").children().last().remove();
            }
        });
        // end adlt_decre 

        $('body').delegate('.child_inc_cmn', 'click', function () {
            let child_inc_row = $(this).attr('child_inc_row');
            let value = parseInt($(`#child_age_${child_inc_row}`).val());
            if (value < 12) {
                $(`#child_age_${child_inc_row}`).val(value + 1);
            }
        });

        $('body').delegate('.child_decr_cmn', 'click', function () {
            let child_decr_row = $(this).attr('child_decr_row');
            let value = parseInt($(`#child_age_${child_decr_row}`).val());
            if (value > 1) {
                $(`#child_age_${child_decr_row}`).val(value - 1);
            }
        });


    });
})(jQuery)

