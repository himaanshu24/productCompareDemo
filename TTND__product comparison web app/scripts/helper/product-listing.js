define([
],
function() {
    var fillDataIntoTable = function(hiddenDummyTable, el) {
        $(hiddenDummyTable).removeAttr('hidden');
        $(hiddenDummyTable).removeClass('product-list-dummy').addClass('product-list');
        $(hiddenDummyTable).attr('data-product-code', el.productCode)
        $(hiddenDummyTable).find('.product-name').text(el.name);
        $(hiddenDummyTable).find('.product-engine-type').text(el.engineType);
        $(hiddenDummyTable).find('.product-transmission').text(el.transmission);
        $(hiddenDummyTable).find('.product-mileage').text(el.mileage);
        $(hiddenDummyTable).find('.showroom-price').html(el.exShowRoomprice);
        $(hiddenDummyTable).find('.product-on-road-price').html(el.onRoadPrice);
        return hiddenDummyTable;
    };

    var createTable = function(productJson) {
        var $hiddenDummyTable = document.querySelector('.product-list-dummy');
        var $fragmentDummyTable = document.createDocumentFragment();

        productJson.forEach(function(el, index) {
            // var car = new vehicle(el.name, el.engineType, el.transmission, el.mileage, el.exShowRoomprice, el.onRoadPrice);
            var k = fillDataIntoTable($hiddenDummyTable.cloneNode(true), el);
            $fragmentDummyTable.appendChild(k);
        });

        $('#insertDom').append($fragmentDummyTable);
    };

    return createTable;
});
