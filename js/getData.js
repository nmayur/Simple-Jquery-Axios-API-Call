$(function() {
    var $tBody = $('#tBody');
    $.ajax({
        type: 'GET',
        
        // Posts URL
        url: 'https://jsonplaceholder.typicode.com/posts',
        success: function(posts) {
            var $userlist = posts;
            // console.log($userlist);
            // looping thru each post
            $.each($userlist, function(i, post) {  
                // Display only first 20 posts   
                if(i < 20){      
                    var row = `
                                <tr class="animated fadeIn">
                                    <th scope="row">${post.id}</th> +
                                    <td>${post.title}</td>+ 
                                    <td>${post.body}</td> + 
                                </tr>
                              `;              
                              
                     // append table row to table body    
                      $tBody.append(row);
                }else{
                    return false;
                }
            });            
        }
    });
});