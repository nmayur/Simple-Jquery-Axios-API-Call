$(function(){
  var _card_body = $("#card_body");
  
  // rest api url
  var img_url = 'https://jsonplaceholder.typicode.com/photos';
  
  axios.get(img_url)
  .then(function (response) {
    var _images = response.data;   
    
    //looping thru each data 
    $.each(_images, function(i , image){
      // displaying only top 20 items
      if(i < 20){
        var _card = '';
        _card += `
            <div class="d-flex col-sm-3 col-12 my-4 animated fadeIn">              
              <a href="#" data-toggle="modal" class="d-flex modal_link" data-target="#${image.id}" style="width:100%;">
                <div class="col p-0 cust_card">
                    <img class="img-fluid" src="${image.thumbnailUrl}" width="100%" alt="Card image cap">
                      <p class="card-title p-2">${image.title}</p>
                </div>
              </a>
            </div>
            
            <!-- Modal -->
            <div class="modal fade" id="${image.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <p class="modal-title" id="exampleModalLabel">${image.title}</p>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <center>
                      <img class="img-fluid" src="${image.url}" width="90%" alt="Card image cap">
                    </center>
                  </div>
                </div>
              </div>
            </div>
        `;        
        
        // append card to parent div
         _card_body.append(_card);
      }else {
        return false;
      }
    });
  })
  .catch(function (error) {
    console.log(error);
  });
  
});