$(function() {
    var $tBody = $('#tBody');

    
    // ajax call to make a GET method..
    $.ajax({
        // here we say the method type
        type: 'GET',
        // Posts URL (fake json api https://jsonplaceholder.typicode.com)
        url: 'https://jsonplaceholder.typicode.com/posts',
        
        // if success run the function
        success: function(posts) {
            // the function will give (posts) in return 
            // ..(i made a local var and stored the posts [not needed actually :P])
            var $userlist = posts;
            // console.log($userlist);
            // looping thru each post
            $.each($userlist, function(i, post) {
                //the (i, post) - i is the iterator to perform any reqired functions like i did
                // post is the single post in posts.
                // Display only first 20 posts   
                if (i < 20) {
                    // append function
                    var row = `
                                <tr class="animated fadeIn">
                                    <th scope="row">${post.id}</th> +
                                    <td>${post.title}</td>+ 
                                    <td>${post.body}</td> + 
                                </tr>
                              `;
                    // append table row to table body    
                    $tBody.append(row);
                } else {
                    return false;
                }
            });
        },
        error: function() {
            console.log("something not good in get");
        }
    });

    //add a new post on button click
    
    // cashed elements :- the btn the input fileds
    var _submitBtn = $('#addPost');
    var _postTitle = $('#post_Title');
    var _postPost = $('#post_Post');
    // var _postID = $('#post_ID');

    
    _submitBtn.on('click', function(e) {
        e.preventDefault();
        // var _title = _postTitle.val();
        // var _post = _postPost.val();

        // to create a random id
        var random = Math.random().toFixed(2) * 100;
        // console.log(random);
        
        //objest data forn the ip fileds
        var _postData = {
            _id: random,
            _title: _postTitle.val(),
            _post: _postPost.val()
        }

        // post method
        $.ajax({
            type: 'POST',
            // Posts URL
            url: 'https://jsonplaceholder.typicode.com/posts',
            
            //here we put the data to be posted..
            data: _postData,
       
            success: function(newPOst) {
                /* 
                on success the function will give back the just added new post 
                which wee apped or prepend as normal
                */
                var newRow = `
                                <tr class="animated fadeIn">
                                    <th scope="row">${newPOst._id}</th> +
                                    <td>${newPOst._title}</td>+ 
                                    <td>${newPOst._post}</td> + 
                                </tr>
                              `;
                // append table row to table body    
                $tBody.prepend(newRow);
            },
            error: function() {
                console.log("something not good in post");
            }
        });
    });
});
