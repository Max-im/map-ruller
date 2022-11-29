"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GMap = void 0;
var GMap = /** @class */ (function () {
    function GMap(elementId) {
        var container = document.getElementById(elementId);
        if (!container)
            throw new Error('Map container not found');
        this.map = new google.maps.Map(container, {
            zoom: 1,
            center: { lat: 0, lng: 0 },
        });
    }
    GMap.prototype.addMarker = function (item) {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.map,
            position: item.location,
        });
        marker.addListener('click', function () {
            var infoWindow = new google.maps.InfoWindow({
                content: item.getContent(),
            });
            infoWindow.open(_this.map, marker);
        });
    };
    return GMap;
}());
exports.GMap = GMap;
