
            $(document).ready(function () {
              var getOldData = getDataLocalStorage();
        
              if(getOldData)
              {                                      
                $.each(getOldData, function (index, value) {
                  // console.log(index);
                  $("#myUL").append(`<li class='list-group-item'><a href='#' class='list-group-item list-group-item-action list-group-striped'>${value} <span class='float-end text-danger delete' id=${index}> X </span></a></li>`);
                });
              }
        
              error_message();
              $("#add").click(function () {
                var data = $("#todo").val();//hi
                $("#todo").val("");
                if (data == "") {
                  alert("Please first enter todo content");
                  return false;
                }
                $("#myUL").append(`<li class="list-group-item"><a href="#" class="list-group-item list-group-item-action list-group-striped">${data}<span class="float-end text-danger delete"> X </span></a></li>`);
               
                addDataLocalStorage(data);//here we give the value to this function that will help us to save the value in the local storage

                $(".delete").click(function () {
                    $(this).parent().parent().remove();
                    var remove_data_id = $(this).attr('id')
                    var old_data1 = getDataLocalStorage();
          
                    if(old_data1){
                      old_data1.splice(remove_data_id,1);
                    }
                    localStorage.setItem("mytolistdata_arr", JSON.stringify(old_data1));
                    $("ul>li").each(function(index){
                      $(this).find("span").attr('id',index);
                      error_message();
                    });
          
                });
        
                error_message();
              });
        
              $(".delete").click(function () {
                $(this).parent().parent().remove();
                var remove_data_id = $(this).attr('id')
                var old_data1 = getDataLocalStorage();
      
                if(old_data1){
                  old_data1.splice(remove_data_id,1);
                }
                localStorage.setItem("mytolistdata_arr", JSON.stringify(old_data1));
                $("ul>li").each(function(index){
                  $(this).find("span").attr('id',index);
                  error_message();
                });
      
            });
              function error_message() {
                if ($("#myUL").children().length <= 0) {
                  $("#myUL").append("<span class='text-center text-secondary m-5' id='notfound'>Data not found</span>");
                } else {
                  $("#notfound").remove();
                }
              }
              
              /*add data into localStorage */
              function addDataLocalStorage(new_data='')
              {
                if(new_data=="") return false;
        
                var todolistData_arr = [];
                var old_data = getDataLocalStorage();
        
                if (old_data) 
                {
                  todolistData_arr = old_data;//if old data found then store in this array todolistData_arr
                }
        
                todolistData_arr.push(new_data);// and here we trying to push new data in the array
        
                var data_enc = JSON.stringify(todolistData_arr); //herer we try to set encode the data array into string and store in the local storage
        
                localStorage.setItem("mytolistdata_arr", data_enc);
        
              }
              /*add data into localStorage */
              function getDataLocalStorage()
              {
                return JSON.parse(localStorage.getItem("mytolistdata_arr"));// we return the data after decrypt means convert string to array.
              }
        
            });
          