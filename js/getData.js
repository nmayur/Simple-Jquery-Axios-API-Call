$(function() {
    var $tBody = $('#tBody');

    var _submitBtn = $('#addPost');

    var _postTitle = $('#post_Title');
    var _postPost = $('#post_Post');
    var _postID = $('#post_ID');

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
                if (i < 20) {
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
            console.log("something not good");
        }
    });

    _submitBtn.on('click', function(e) {
        e.preventDefault();
        // var _title = _postTitle.val();
        // var _post = _postPost.val();

        var _postData = {
            _id: _postID.val(),
            _title: _postTitle.val(),
            _post: _postPost.val()
        }

        $.ajax({
            type: 'POST',
            // Posts URL
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: _postData,
            success: function(newPOst) {
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
                console.log("something not good");
            }
        });

    });

});