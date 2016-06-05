define([
    'helper/productData',
    'helper/product-listing',
    'helper/compare-product-data'
],
function(productData, productList, comapreProductData) {

    var clickBindEvents = function() {

    };

    var productUI = function() {
        productList(productData);
        comapreProductData(productData);
        clickBindEvents();
    };
    return productUI;
});
