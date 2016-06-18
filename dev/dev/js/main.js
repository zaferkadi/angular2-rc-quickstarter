System.register(['@angular/platform-browser-dynamic', '@angular/core', '@angular/router', '@angular/common', './_app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, router_1, common_1, _app_component_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (_app_component_1_1) {
                _app_component_1 = _app_component_1_1;
            }],
        execute: function() {
            // bootstrap(AppComponent);
            platform_browser_dynamic_1.bootstrap(_app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
            ]);
        }
    }
});
