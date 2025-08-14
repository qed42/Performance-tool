# videojs-titleoverlay
Title Overlay plugin for VideoJS

This plugin is used to add a simple title overlay for video js. Usage is as follows:

```javascript
    <video id="id_for_videoplayer" class="video-js" controls preload="auto" width="640" height="264" data-setup="{}">
        <source src="PATH-TO-VIDEO-FILE" type='FILETYPE'>
    </video>

    <script src="PATH-TO/video.js"></script>
    <script src="PATH-TO/videojs-titleoverlay.js"></script>
    <script>
        var player = videojs('id_for_videoplayer');
        var options = {};
        player.titleoverlay(options);
    </script>
```

You can specify the following options:

```javascript
    var options = {
        title: 'My Video Title',  //Title for movie
        floatPosition: 'right', //Float left or right (to prevent big play button overlap) (default left)
        margin: '10px', //Margin from top/left/right (default 10px)
        fontSize: '1.5em', //font size (default 1em)
        debug: false, //true or false. Will output debug messages for title status
        logger: LOGOBJECT //must have a function called log that it can call to, otherwise will use a default basic log func
    }
```

You can hide/show the title overlay by calling the following:

```javascript
    player.titleoverlay.showOverlay();

    //or

    player.titleoverlay.hideOverlay();
```

You can update the title text if you are loading clips in dynamically with the following:

```javascript
    player.titleoverlay.updateTitle('TITLE TO UPDATE TO');
```

If you have any questions, please shoot me an email @ melendez.stevenk@gmail.com or smelendez@franklyinc.com