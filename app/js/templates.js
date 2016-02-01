angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("layout/chat-detail.html","<!--\n  This template loads for the \'tab.friend-detail\' state (app.js)\n  \'friend\' is a $scope variable created in the FriendsCtrl controller (controllers.js)\n  The FriendsCtrl pulls data from the Friends service (service.js)\n  The Friends service returns an array of friend data\n-->\n<ion-view view-title=\"{{chat.name}}\">\n  <ion-content class=\"padding\">\n    <img ng-src=\"{{chat.face}}\" style=\"width: 64px; height: 64px\">\n    <p>\n      {{chat.lastText}}\n    </p>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("layout/tab-account.html","<ion-view view-title=\"Account\">\n  <ion-content>\n    <ion-list>\n    <ion-toggle  ng-model=\"settings.enableFriends\">\n        Enable Friends\n    </ion-toggle>\n    </ion-list>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("layout/tab-bags.html","<ion-view view-title=\"Bags\">\r\n<ion-content>\r\n    <div class=\"list\">\r\n        <a class=\"item item-thumbnail-left\" href=\"#\">\r\n            <img src=\"images/images/fm.jpg\">\r\n            <h2>Pretty Hate Machine</h2>\r\n            <p>Nine Inch Nails</p>\r\n        </a>\r\n    </div>\r\n     <div class=\"list\">\r\n        <a class=\"item item-thumbnail-left\" href=\"#\">\r\n            <img src=\"images/images/wm.jpg\">\r\n            <h2>Pretty Hate Machine</h2>\r\n            <p>Nine Inch Nails</p>\r\n        </a>\r\n    </div>\r\n     <div class=\"list\">\r\n        <a class=\"item item-thumbnail-left\" href=\"#\">\r\n            <img src=\"images/images/3.jpg\">\r\n            <h2>Pretty Hate Machine</h2>\r\n            <p>Nine Inch Nails</p>\r\n        </a>\r\n    </div>\r\n     <div class=\"list\">\r\n        <a class=\"item item-thumbnail-left\" href=\"#\">\r\n            <img src=\"images/images/11.jpg\">\r\n            <h2>Pretty Hate Machine</h2>\r\n            <p>Nine Inch Nails</p>\r\n        </a>\r\n    </div>\r\n    </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("layout/tab-cats.html","<ion-view view-title=\"Categories\">\n    <ion-content>\n        <div class=\"bar bar-header item-input-inset\">\n            <label class=\"item-input-wrapper\">\n                <i class=\"icon ion-ios-search placeholder-icon\"></i>\n                <input type=\"search\" placeholder=\"Search\">\n            </label>\n        </div>\n        <button ng-click=\"openModal()\">show modal</button>\n    </ion-content>\n</ion-view>\n<script id=\"my-modal.html\" type=\"text/ng-template\">\n    <ion-modal-view>\n        <ion-header-bar>\n            <h1 class=\"title\">My Modal title</h1>\n            <button ng-click=\"closeModal()\">Close</button>\n        </ion-header-bar>\n        <ion-content>\n        <div class=\"list\">\n  <label class=\"item item-input item-stacked-label\">\n    <span class=\"input-label\">Your First Name</span>\n    <input type=\"text\" placeholder=\"John\">\n  </label>\n  <label class=\"item item-input item-stacked-label\">\n    <span class=\"input-label\">Your Last Name Please</span>\n    <input type=\"text\" placeholder=\"Suhr\">\n  </label>\n  <label class=\"item item-input item-stacked-label\">\n    <span class=\"input-label\">Email</span>\n    <input type=\"text\" placeholder=\"john@suhr.com\">\n  </label>\n  <button class=\"button button-small\" align=\"center\">\n      Create Account\n    </button>\n</div>\n        </ion-content\n    </ion-modal-view>\n\n</script>\n");
$templateCache.put("layout/tab-dash.html","<ion-view view-title=\"Home\">\n    <ion-content class=\"padding\">\n        <ion-slide-box>\n            <ion-slide> <img src=\"../../images/banners/kids.jpg\" height=\"150\" width=\"380\" class=\"img-responsive\"></ion-slide>\n            <ion-slide> <img src=\"../../images/banners/men.jpg\" height=\"150\" width=\"380\" class=\"img-responsive\"></ion-slide>\n            <ion-slide> <img src=\"../../images/banners/women.jpg\" height=\"150\" width=\"380\" class=\"img-responsive\"></ion-slide>\n            <ion-slide> <img src=\"../../images/banners/shoe.jpg\" height=\"150\" width=\"380\" class=\"img-responsive\"></ion-slide>\n        </ion-slide-box>\n    </ion-content>\n</ion-view>\n");
$templateCache.put("layout/tabs.html","<!--\nCreate tabs with an icon and label, using the tabs-positive style.\nEach tab\'s child <ion-nav-view> directive will have its own\nnavigation history that also transitions its views in and out.\n-->\n<ion-tabs class=\"tabs-icon-top tabs-color-active-positive\">\n\n  <!-- Dashboard Tab -->\n  <ion-tab title=\"Home\" icon-off=\"ion-home\" icon-on=\"ion-home\" href=\"#/tab/dash\">\n    <ion-nav-view name=\"tab-dash\"></ion-nav-view>\n  </ion-tab>\n\n  <!-- Cat Tab -->\n  <ion-tab title=\"Categories\" icon-off=\"ion-android-menu\" icon-on=\"ion-android-menu\" href=\"#/tab/cats\">\n    <ion-nav-view name=\"tab-cats\"></ion-nav-view>\n  </ion-tab>\n\n  <!-- Bag Tab -->\n  <ion-tab title=\"Bags\" icon-off=\"ion-ios-cart\" icon-on=\"ion-ios-cart\" href=\"#/tab/bags\">\n    <ion-nav-view name=\"tab-bags\"></ion-nav-view>\n  </ion-tab>\n\n  <!-- Account Tab -->\n  <ion-tab title=\"Account\" icon-off=\"ion-ios-gear\" icon-on=\"ion-ios-gear\" href=\"#/tab/account\">\n    <ion-nav-view name=\"tab-account\"></ion-nav-view>\n  </ion-tab>\n\n\n</ion-tabs>\n");}]);