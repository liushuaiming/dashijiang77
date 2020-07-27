$(function() {

    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/user/info',
        headers: {
            Authorization: localStorage.getItem("token")
        },
        success: function(res) {

            if (res.code = 200) {
                $('.sider .user_info span').text(res.data.nickname)

                $('.sider .user_info img').attr(res.data.userPic)

                $('.header_bar  .user_center_link img').attr(res.data.userPic)
            }

            $('.header_bar  .user_center_link .logout').on('click', function() {
                localStorage.getItem('token');
                location.href = './login.html'
            })

            console.log(222);
            $('.menu .level01').on('click', function() {
                console.log(111);
                $(this).addClass('active').siblings('.level01').removeClass('active');
                console.log(111);
                if ($(this).index() == 1) {
                    console.log(11);
                    $('.menu .level02').slideToggle();
                    $('.menu .level01:eq(1) b').toggleClass('rotate0')
                    $('.menu .level02 li:eq(0)').click()
                }
            })
            $('.menu .level02 li').on('click', function() {
                $(this).addClass('active').siblings().removeClass('active');

            })


        }
    })


})