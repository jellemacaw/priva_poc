var doUpload = function() {

  $(".is-upload [type='file']")
    // this works only with a input type="file"
    // does not support drag-n-drop or multiple file uploads
    .change(function(event) {

      var myFileObj = event.target;

      $(myFileObj)
        .closest(".is-upload")
          .find(".is-upload__filename")
            .text( myFileObj.value.match(/[^\\\/]+$/) );
    });
}

doUpload();
