$('#m1').on('click',function() {



songs = [                   {
        'name': 'Mashup(unplugged)',
        'artist': 'Mohit chauhan',
        'album': ' Coke Studio',
        'duration': '9:38',
        'fileName': 'song9.mp3',
        'image':'song9.png'
    },
                   {
        'name': 'Hymn For The Weekend',
        'artist': 'Coldplay',
        'album': 'Newyork concert ',
        'duration': '3:55',
        'fileName': 'song10.mp3',
        'image':'song10.jpg'
    },
          {
        'name': 'Im Not Just a Preety Girl',
        'artist': 'Maggie Lindemann',
        'album': ' Preety Girl',
        'duration': '3:40',
        'fileName': 'song11.mp3',
        'image':'song11.jpg'
    },
            {
        'name': 'Wrecking Ball',
        'artist': 'Miley Cyrus',
        'album': 'Wrecking Ball ',
        'duration': '3:41',
        'fileName': 'song12.mp3',
        'image':'song12.jpg'
    },{
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
    }
     ];
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
        
$('.dataTables_wrapper').removeClass('hidden');
$('.moodimage').addClass('hidden');
        $('.main').css("background", "url('http://i.imgur.com/iyARLh3.jpg')",);
        toggleSong();
});
$('#m2').on('click',function(){

    songs=[  {
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
        'name': 'ik vaari aa bhi jaa',
        'artist': 'arjit singh',
        'album': 'Rabbata',
        'duration': '4:34',
        'fileName': 'song13.mp3',
        'image':'song13.jpg'
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
        'name': 'Wrecking Ball',
        'artist': 'Miley Cyrus',
        'album': 'Wrecking Ball ',
        'duration': '3:41',
        'fileName': 'song12.mp3',
        'image':'song12.jpg'
    },{
        'name': 'All Of Me',
        'artist': 'John Legend ',
        'album': 'Love In The Future',
        'duration': '4:49',
        'fileName': 'song5.mp3',
            'image':'song5.jpg'
    }
          ];
        
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
        $('.dataTables_wrapper').removeClass('hidden');
$('.moodimage').addClass('hidden');
        $('.main').css("background", "url('http://i.imgur.com/IAKgakL.jpg')");
        $('main').css("background-size","cover")
        toggleSong();
});
      

$('#m3').on('click',function(){

    songs=[ {
                'name': 'Naach Meri Jaan',
                'artist': 'pritam',
                'album': 'Tubelight',
                'duration': '4:47',
                'fileName': 'song14.mp3',
                'image':'song14.jpg'
                },
           
           {
        'name': 'ik vaari aa bhi jaa',
        'artist': 'arjit singh',
        'album': 'Rabbata',
        'duration': '4:34',
        'fileName': 'song13.mp3',
        'image':'song13.jpg'
    },
      
            {
                'name': 'Mae Agar',
                'artist': 'Atif Aslam',
                'album': 'Tubelight',
                'duration': '4:39',
                'fileName': 'song15.mp3',
                'image':'song15.jpg'
                },
            {
                'name': 'Kuch Nahi',
                'artist': 'pritam',
                'album': 'Tubelight',
                'duration': '3:41',
                'fileName': 'song16.mp3',
                'image':'song16.jpg'
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
                        'name': 'Im Not Just a Preety Girl',
                        'artist': 'Maggie Lindemann',
                        'album': ' Preety Girl',
                        'duration': '3:40',
                        'fileName': 'song11.mp3',
                        'image':'song11.jpg'
                    },
                        {
                        'name': 'Wrecking Ball',
                        'artist': 'Miley Cyrus',
                        'album': 'Wrecking Ball ',
                        'duration': '3:41',
                        'fileName': 'song12.mp3',
                        'image':'song12.jpg'
                    },
                    {
                        'name': 'Mashup(unplugged)',
                        'artist': 'Mohit chauhan',
                        'album': ' Coke Studio',
                        'duration': '9:38',
                        'fileName': 'song9.mp3',
                        'image':'song9.png'
                        }];
   
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
                
$('.dataTables_wrapper').removeClass('hidden');
$('.moodimage').addClass('hidden');
        $('.main').css("background", "url('http://i.imgur.com/TI4Hc3Y.jpg')");
        toggleSong();
});
 