/**
 * Utility Script to concatenate required libs together.
 *
 * This script is executed by node to build required JS to a single file
 */
const concat = require(process.env.NODE_MODULES_DEV + '/concat');

concat([
    // Add required, site-wide front-end libs here to prepend them to the main JS script:
    'frontend/js/main.js',
], 'build/js/main.js');
