
window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = require('jquery');

// require('jquery-ui');
require('./material-dashboard-pro/jquery-ui.min');

require('bootstrap-sass');

// material-dashboard-pro
require('./material-dashboard-pro/material.min');
require('./material-dashboard-pro/perfect-scrollbar.jquery.min');
require('./material-dashboard-pro/jquery.validate.min');
require('moment');
window.Chartist = require('chartist-webpack');
require('./material-dashboard-pro/jquery.bootstrap-wizard');
require('./material-dashboard-pro/bootstrap-notify');
require('./material-dashboard-pro/jquery-jvectormap');
require('./material-dashboard-pro/nouislider.min');
require('./material-dashboard-pro/jquery.select-bootstrap');
// require('./material-dashboard-pro/jquery.datatables');
require('datatables.net');
require('./material-dashboard-pro/sweetalert2');
require('./material-dashboard-pro/jasny-bootstrap.min');
require('./material-dashboard-pro/fullcalendar.min');
require('./material-dashboard-pro/jquery.tagsinput');
require('./material-dashboard-pro/material-dashboard');
require('./material-dashboard-pro/demo');


/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common = {
    //'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    'X-Requested-With': 'XMLHttpRequest'
};

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
