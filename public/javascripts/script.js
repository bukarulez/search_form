window.onload = function () {
  console.log('loaded');

  function debounce(f, ms) {

    let timer = null;

    return function (...args) {
      const onComplete = () => {
        f.apply(this, args);
        timer = null;
      }

      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(onComplete, ms);
    };
  }

  function test_send() {
    app.send_post('/api/test/', 'post', function () {
      console.log('loaded post');
    }, function (e) {
      console.log('post error', e);
    });
  }


  window.app = {
    send_post: function (url, method = 'get', onload, onerror) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.onload = onload || function () {
        console.log('loaded post');
      };
      xhr.onerror = onerror || function (e) {
        console.log('post error', e);
      };
      xhr.send();
    },
    test_send: debounce(test_send, 500)

}
  ;

  function test() {
    console.log('test');
  }

  var f = debounce(test, 1000);
};

