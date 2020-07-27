$(function() {
    one()

    function one() {
        $.ajax({
            type: 'get',
            url: BigNew.category_list,
            success: function(res) {
                console.log(res);
                if (res.code == 200) {
                    // 1.2 使用模板渲染数据
                    var htmlStr = template('categoryList', res)
                    $('tbody').html(htmlStr)
                }
            }
        })
    }

    $('#myModal .btn-sure').on('click', function() {
        $.ajax({
            type: 'post',
            url: BigNew.category_add,
            data: $('#myForm').serialize(),
            success: function(res) {
                if (res.code === 201) {
                    $('#myModal').modal('hide')
                    one()
                }
            }
        })
    })
    $(' #delModal').on('show.bs.modal', function(e) {
        window.categoryId = $(e.relatedTarget).data('id')
    })
    $(' #delModal .btn-sure-del').on('click', function() {
        $.ajax({
            type: 'post',
            url: BigNew.category_delete,
            data: {
                id: window.categoryId
            },
            success: function(res) {
                if (res.code === 204) {
                    $('#delModal').modal('hide');
                    one()
                }
            }
        })
    })
    $(' #myModal').on('show.bs.modal', function(e) {
        if (e.relatedTarget.id === 'xinzengfenlei') {
            $('#myModal h4').text('新增文本');
            $('#myForm')[0].reset()
        } else {
            //编译按钮
            $('#myModal h4').text('更新文本')
            $.ajax({
                type: 'get',
                url: BigNew.category_search,
                data: {
                    id: $(e.relatedTarget).data('id')
                },
                success: function(res) {
                    $('#myForm.input[name=name]').val(res.data[0].name);
                    $('#myForm.input[name=slug]').val(res.data[0].slug)
                }
            })
        }



    })




})