define([
],
function() {
    var createCompareTable = function(compareProductArr) {
        var $compareTableContainer = $('.compare-table');
        $compareTableContainer.find('td').remove();
        var productListLength = compareProductArr.length;
        var $hiddenDummyTable = $('');
        var fragmentDummyTable = document.createDocumentFragment();
        var $compareTable = $(fragmentDummyTable).append('<table class="compare-table" border="1" cellpadding="0" cellspacing="0"><tbody></tbody></table>');
        var $compareTabsRow = $('<tr/>');

        var $tr = '';
        for ( key in compareProductArr[0]) {
            $tr = $('<tr />').html('<td>' + key + '</td>');
            $(fragmentDummyTable).find('tbody').append($tr);
        }

        var $keyRow = $(fragmentDummyTable).find('.compare-table').find('tr');
        compareProductArr.forEach(function(currentValue, index) {
            var count = 0;
            for ( key in currentValue) {
                $($keyRow[count]).append($('<td>' + currentValue[key] + '</td>'));
                ++count;
            }
        });

        $compareTabsRow.html('<td/>');
        $compareTabsRow.find('td').html($('.compare-tabs').clone().removeAttr('hidden'));
        $(fragmentDummyTable).find('tr').first().after($compareTabsRow);
        $('#compareTable').html(fragmentDummyTable);
    };

    var pushMe = function(productCodeArr, productData) {
        var compareProductArr = [];
        for (let i = 0; i < productCodeArr.length; i++) {
            productData.forEach(function(el, index) {
                if (productData[index].productCode.indexOf(productCodeArr[i]) > -1) {
                    compareProductArr.push(productData[i]);
                }
            });
        }

        createCompareTable(compareProductArr);
    };

    var comapreProduct = function(productData) {
        var productCodeArr = [];
        $('#insertDom').on('click', '.checkbox-for-compare', function() {
            var $compareCheckBox = $(this);

            var productCode = $compareCheckBox.closest('.product-list').attr('data-product-code');
            if ($compareCheckBox.is(':checked')) {
                if (productCodeArr.length === 3) {
                    $compareCheckBox.prop('checked', false);
                    return;
                }
                productCodeArr.push(productCode);
            } else {
                productCodeArr.splice([productCodeArr.indexOf(productCode)], 1)
            }

            if (productCodeArr.length > 1) {
                $('.compare-button').removeAttr('disabled')
            } else {
                $('.compare-button').prop('disabled', true)
            }
        });

        $('.compare-button').on('click', function() {
            pushMe(productCodeArr, productData);
        });
    };

    return comapreProduct;
});
