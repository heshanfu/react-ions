var path = require('path');
var materialPath = path.join('node_modules', 'material-design-icons');
var mbsyPath = path.normalize('src/assets/icons/svg');

var list = {
  material: [
    materialPath + '/action/svg/production/ic_assessment_24px.svg#md-assessment',
    materialPath + '/action/svg/production/ic_check_circle_24px.svg#md-check-circle',
    materialPath + '/action/svg/production/ic_compare_arrows_24px.svg#md-compare',
    materialPath + '/action/svg/production/ic_dashboard_24px.svg#md-dashboard',
    materialPath + '/action/svg/production/ic_date_range_24px.svg#md-date',
    materialPath + '/action/svg/production/ic_delete_24px.svg#md-delete',
    materialPath + '/action/svg/production/ic_favorite_24px.svg#md-favorite',
    materialPath + '/action/svg/production/ic_help_outline_24px.svg#md-help',
    materialPath + '/action/svg/production/ic_highlight_off_24px.svg#md-remove',
    materialPath + '/action/svg/production/ic_info_24px.svg#md-info',
    materialPath + '/action/svg/production/ic_info_outline_24px.svg#md-info-outline',
    materialPath + '/action/svg/production/ic_language_24px.svg#md-globe',
    materialPath + '/action/svg/production/ic_lightbulb_outline_24px.svg#md-lightbulb',
    materialPath + '/action/svg/production/ic_lock_open_24px.svg#md-lock-open',
    materialPath + '/action/svg/production/ic_open_in_new_24px.svg#md-blank-link',
    materialPath + '/action/svg/production/ic_power_settings_new_24px.svg#md-power',
    materialPath + '/action/svg/production/ic_receipt_24px.svg#md-receipt',
    materialPath + '/action/svg/production/ic_search_24px.svg#md-search',
    materialPath + '/action/svg/production/ic_settings_24px.svg#md-settings',
    materialPath + '/action/svg/production/ic_stars_24px.svg#md-stars',
    materialPath + '/action/svg/production/ic_touch_app_24px.svg#md-touch',
    materialPath + '/alert/svg/production/ic_warning_24px.svg#md-warning',
    materialPath + '/av/svg/production/ic_fiber_manual_record_24px.svg#md-record',
    materialPath + '/av/svg/production/ic_pause_24px.svg#md-pause',
    materialPath + '/av/svg/production/ic_stop_24px.svg#md-stop',
    materialPath + '/communication/svg/production/ic_email_24px.svg#md-email',
    materialPath + '/communication/svg/production/ic_textsms_24px.svg#md-textsms',
    materialPath + '/content/svg/production/ic_add_24px.svg#md-add',
    materialPath + '/content/svg/production/ic_filter_list_24px.svg#md-filter',
    materialPath + '/content/svg/production/ic_link_24px.svg#md-link',
    materialPath + '/content/svg/production/ic_send_24px.svg#md-send',
    materialPath + '/content/svg/production/ic_remove_24px.svg#md-minus',
    materialPath + '/device/svg/production/ic_access_time_24px.svg#md-time',
    materialPath + '/editor/svg/production/ic_attach_money_24px.svg#md-money',
    materialPath + '/editor/svg/production/ic_insert_chart_24px.svg#md-insert-chart',
    materialPath + '/editor/svg/production/ic_insert_drive_file_24px.svg#md-file',
    materialPath + '/editor/svg/production/ic_pie_chart_outlined_24px.svg#md-pie-chart-outlined',
    materialPath + '/editor/svg/production/ic_show_chart_24px.svg#md-chart',
    materialPath + '/file/svg/production/ic_cloud_download_24px.svg#md-download',
    materialPath + '/file/svg/production/ic_cloud_upload_24px.svg#md-upload',
    materialPath + '/image/svg/production/ic_edit_24px.svg#md-edit',
    materialPath + '/maps/svg/production/ic_layers_24px.svg#md-layers',
    materialPath + '/maps/svg/production/ic_local_activity_24px.svg#md-local-activity',
    materialPath + '/navigation/svg/production/ic_arrow_back_24px.svg#md-arrow-back',
    materialPath + '/navigation/svg/production/ic_arrow_drop_down_48px.svg#md-arrow-drop-down',
    materialPath + '/navigation/svg/production/ic_arrow_drop_up_48px.svg#md-arrow-drop-up',
    materialPath + '/navigation/svg/production/ic_arrow_forward_24px.svg#md-arrow-forward',
    materialPath + '/navigation/svg/production/ic_check_24px.svg#md-check',
    materialPath + '/navigation/svg/production/ic_close_24px.svg#md-close',
    materialPath + '/navigation/svg/production/ic_chevron_left_24px.svg#md-chevron-left',
    materialPath + '/navigation/svg/production/ic_chevron_right_24px.svg#md-chevron-right',
    materialPath + '/social/svg/production/ic_notifications_none_24px.svg#md-notifications',
    materialPath + '/social/svg/production/ic_person_24px.svg#md-person'
  ],
  mbsy: [
    mbsyPath + '/twitter.svg#mbsy-twitter',
    mbsyPath + '/klout.svg#md-klout',
    mbsyPath + '/linked_in.svg#mbsy-linkedin',
    mbsyPath + '/facebook.svg#mbsy-facebook',
    mbsyPath + '/slack.svg#mbsy-slack'
  ]
}

module.exports = {
  list: list
}