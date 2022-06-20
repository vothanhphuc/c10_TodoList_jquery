$(document).ready(() => {
  // 1. Thêm "<span class='close'>x</span>" vào từng thẻ li
  $("li").append("<span class='close'>x</span>");

  // 2. Xử lý sự kiện click vào nút [x]
  $("li").children().click(function(){
    $(this).parent().remove();
  })

  // 3. Xử lý sự kiện click vào mỗi li
  $("li").click(function(){
    $(this).toggleClass("checked");
  })

  // 4. Xử lý sự kiện click vào nút [Add]
  $(".btn-add").click(function () {
    // 4.1. Lấy string trong input text
    let value = $("#input").val();

    // 4.2. Xác thực dữ liệu: Không được để trống input text
    // Code here...
    if( value === ""){
      return;
    }

    // 4.3. Tạo thẻ "li" với text content là value
    let li = document.createElement("li");
    $(li).text(value); // Tương tự trong JS DOM: li.innerHTML = value;

    // 4.4. Thêm li mới vừa tạo vào phần tử con đầu tiên của ul
    // Code here...
    $("#to-do-list").prepend(li);

    // 4.5. Reset lại value của input text là rỗng
    // Code here...
    $("#input").val("");

    // 4.6. Tạo nút close cho thẻ li, gắn class và thêm nút này vào li
    // Code here...
    $(li).append("<span class='close'>x</span>"); 

    // 4.7. Xử lý sự kiện khi nhấn nút close
    // Code here...
    $(li).find("span").click(function(){
      $(li).remove();
    })
    // 4.8. Xử lý sự kiện khi nhấn vào li
    // Code here...
    $(li).click(function(){
      $(li).toggleClass("checked");
    })
    
  });
});
//refactor
