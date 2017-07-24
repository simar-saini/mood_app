function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
 
           

function updateCurrentTime() {
        var song = document.querySelector('audio');
        var currentTime = Math.floor(song.currentTime);
        currentTime = fancyTimeFormat(currentTime);
        var duration = Math.floor(song.duration);
        duration = fancyTimeFormat(duration)
        $('.time-elapsed').text(currentTime);
        $('.song-duration').text(duration);
}
        
                  

  var songs = [{
        'name': 'Bad Liar',
        'artist': 'Selena Gomez',
        'album': 'Bad Liar(selena gomez)',
        'duration': '3:34',
       'fileName': 'song1.mp3',
          'image':'song1.jpg'
    },
    {
        'name': 'Despacito',
        'artist': 'Justin Beiber',
        'album': 'Luis Fonsi Daddy Yankee - Despacito ft. Justin Bieber',
        'duration': '3:49',
        'fileName': 'song2.mp3',
            'image':'song2.jpg'
    },
    {
        'name': 'Fetish',
        'artist': 'Selena Gomez',
        'album': 'Selena Gomez - Fetish ft. Gucci Mane',
        'duration': '3:04',
        'fileName': 'song3.mp3',
            'image':'song3.jpg'
    },
    {
        'name': 'Joker',
        'artist': 'Hardy Sandhu',
        'album': 'Joker (Ft. B Praak)',
        'duration': '5:18',
        'fileName': 'song4.mp3',
        'image':'song4.jpg'
    },
              
      {
        'name': 'All Of Me',
        'artist': 'John Legend ',
        'album': 'Love In The Future',
        'duration': '4:49',
        'fileName': 'song5.mp3',
            'image':'song5.jpg'
    },
              
       {
        'name': 'Malibu',
        'artist': 'Miley Cyrus',
        'album': 'Malibu(Miley Cyrus)',
        'duration': '3:48',
        'fileName': 'song6.mp3',
        'image':'song6.jpg'
    },
                         
       {
        'name': 'Rockbye',
        'artist': 'Clean Bandit',
        'album': 'Rockabye Baby!',
        'duration': '4:11',
        'fileName': 'song7.mp3',
        'image':'song7.png'
    },

                 {
        'name': 'Wherever I Go',
        'artist': 'Miley Cyrus',
        'album': 'So Am Moving on ',
        'duration': '3:24',
        'fileName': 'song8.mp3',
        'image':'song8.jpg'
    },
                                {
        'name': 'Mashup(unplugged)',
        'artist': 'Mohit chauhan',
        'album': ' Coke Studio',
        'duration': '9:38',
        'fileName': 'song9.mp3',
        'image':'song9.png'
    }
 ];





function addSongNameClickEvent(songObj,position) {
        
        var id = '#song' + position;

        var songName= songObj.fileName;//new variables

        $(id).click(function() {
                var audio = document.querySelector('audio');
                var currentSong = audio.src;
                
                console.log(songName);
                
                if(currentSong.search(songName) != -1)
                {
                        toggleSong();
                }
                else {
                        audio.src = songName;
                        toggleSong();
                        changeCurrentSongDetails(songObj); // Function Call
                }
        });
}





window.onload = function() {
         
        changeCurrentSongDetails(songs[0]);

        //  for (var i = 0; i < fileNames.length ; i++) {
        //    addSongNameClickEvent(fileNames[i],i+1)
        // } 

        for(var i =0; i < songs.length;i++) {
                var obj = songs[i];
                var name = '#song' + (i+1);
                var song = $(name);
                song.find('.song-name').text(obj.name);
                song.find('.song-artist').text(obj.artist);
                song.find('.song-album').text(obj.album);
                song.find('.song-length').text(obj.duration);
                addSongNameClickEvent(obj,i+1);
        }

        updateCurrentTime(); 
        setInterval(function() {
                updateCurrentTime();
        },1000);

$('#songs').DataTable({
        paging:false
});
}


function toggleSong() {

        var song = document.querySelector('audio');
        
        if(song.paused == true) {
                console.log('Playing');

                $('.play-icon').removeClass('fa-play').addClass('fa-pause');
                song.play();
        }
        else {
                console.log('Pausing');
                $('.play-icon').removeClass('fa-pause').addClass('fa-play');
                song.pause();
        }
}

function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','img/' + songObj.image);
    $('.current-song-name').text(songObj.name);
    $('.current-song-album').text(songObj.album);
}
                   
                         
                  
                         
               // songs play list....//

                  

                         
// function2.....
        
        
$('.welcome-screen button').on('click', function() {
        
        var name = $('#name-input').val();
        
        if (name.length > 2) {
                var message = "Welcome, " + name;
                $('.main .user-name').text(message);
                $('.welcome-screen').addClass('hidden');
                $('.main').removeClass('hidden');
        } else {
                $('#name-input').addClass('error');
        }
});
        
// click event
$('.play-icon').on('click',function(){
        toggleSong();
        
});

$('body').on('keypress',function(event) {
       // console.log(event);
    var target = event.target;// tag information is being stored here//
    if (event.keyCode == 32 && target.tagName !='INPUT')
    {
        toggleSong();
    }
});

$('.moodlist').on('click', function() {
                $('.dataTables_wrapper').addClass('hidden');
                $('.moodimage').removeClass('hidden');
});
$('.showplayist').on('click', function() {
                $('.dataTables_wrapper').removeClass('hidden');
                $('.moodimage').addClass('hidden');
});
