cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.filfatstudios.spinnerdialog/www/SpinnerDialog.js",
        "id": "com.filfatstudios.spinnerdialog.SpinnerDialog",
        "clobbers": [
            "SpinnerDialog"
        ]
    },
    {
        "file": "plugins/org.pbernasconi.progressindicator/www/progressIndicator.js",
        "id": "org.pbernasconi.progressindicator.ProgressIndicator",
        "clobbers": [
            "ProgressIndicator"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "com.filfatstudios.spinnerdialog": "1.0.2",
    "org.pbernasconi.progressindicator": "1.1.0"
};
// BOTTOM OF METADATA
});