angular.module('travelPriceEngineAppMock', ['ngMockE2E']).run(function ($httpBackend) {

    $httpBackend.whenGET(/\.html/).passThrough();

    var statusOk = (typeof statusCode !== 'undefined') ? statusCode : 200;
    var contentTypeJson = {"content-type": "application/json"};

    $httpBackend.whenGET('/airports').respond(statusOk, airportsData, contentTypeJson);
    $httpBackend.whenGET('/fares\/BBI\/BBA').respond(statusOk, faresData, contentTypeJson);
    $httpBackend.whenGET('/appStatistics').respond(statusOk, metricsData, contentTypeJson);
});
