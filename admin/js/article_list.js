$(function() {
    $.ajax = ({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/category/list',
        success: function(res) {
            console.log(res);
        }

    })


})