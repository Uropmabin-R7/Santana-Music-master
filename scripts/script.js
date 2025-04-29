new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      isShowCover: true,
      tracks: [
        {
          name: "Alasan_Bodok",
          artist: "Pace Santana",
          cover: "https://uropmabin-r7.github.io/Santana-Music-master/img/Pace_Santana1.jpg",
          source: "https://uropmabin-r7.github.io/Santana-Music-master/mp3/Alasan_Bodok.m4a",
          url: "https://youtu.be/3Ye2xWpRh6o?si=jZNBxs4Vv_4K6_MZ",
          favorited: false
        },
        {
          name: "Cinta_diUncen",
          artist: "Pace Santana",
          cover: "https://uropmabin-r7.github.io/Santana-Music-master/img/Pace_Santana2.jpg",
          source: "https://uropmabin-r7.github.io/Santana-Music-master/mp3/Cinta_diUncen.m4a",
          url: "https://youtu.be/ukvoV2r8OpI?si=ZH_7IlDgreHGwKpL",
          favorited: true
        },
        {
          name: "Cinta_DOB",
          artist: "Pace Santana",
          cover: "https://uropmabin-r7.github.io/Santana-Music-master/img/Pace_Santana3.jpg",
          source: "https://uropmabin-r7.github.io/Santana-Music-master/mp3/Cinta_DOB.m4a",
          url: "https://youtu.be/AUdVohmT7o4?si=CL34nL9bLRVNMDAK",
          favorited: false
        },
        {
          name: "Ipar_Juga_Maut",
          artist: "Pace Santana",
          cover: "https://uropmabin-r7.github.io/Santana-Music-master/img/Pace_Santana4.jpg",
          source: "https://uropmabin-r7.github.io/Santana-Music-master/mp3/Ipar_Juga_Maut.m4a",
          url: "https://youtu.be/VRl8qArKhyY?si=ZRZScpFrDXh52D7L",
          favorited: false
        },
        {
          name: "Moana_Melanesia",
          artist: "Pace Santana",
          cover: "https://uropmabin-r7.github.io/Santana-Music-master/img/Pace_Santana5.jpg",
          source: "https://uropmabin-r7.github.io/Santana-Music-master/mp3/Moana_Melanesia.m4a",
          url: "https://youtu.be/u2MlnoWGq18?si=kNazDjWkKi5PYlx5",
          favorited: true
        },
        {
          name: "Perem_Tanah",
          artist: "Pace Santana",
          cover: "https://uropmabin-r7.github.io/Santana-Music-master/img/Pace_Santana6.jpg",
          source: "https://uropmabin-r7.github.io/Santana-Music-master/mp3/Perem_Tanah.m4a",
          url: "https://youtu.be/A65wQ2qWxLQ?si=M9aBliDVHsKtQoBX",
          favorited: false
        },
        {
          name: "Perempuan_Gunung",
          artist: "Pace Santana",
          cover: "https://uropmabin-r7.github.io/Santana-Music-master/img/Pace_Santana7.jpg",
          source: "https://uropmabin-r7.github.io/Santana-Music-master/mp3/Perempuan_Gunung.m4a",
          url: "https://youtu.be/VejSRGn9psA?si=E0qlcwDDbmHXIwlU",
          favorited: true
        },
        {
          name: "Sa_Bukan_DEWA",
          artist: "Pace Santana",
          cover: "https://uropmabin-r7.github.io/Santana-Music-master/img/Pace_Santana8.jpg",
          source: "https://uropmabin-r7.github.io/Santana-Music-master/mp3/Sa_Bukan_DEWA.m4a",
          url: "https://youtu.be/oBoLMIQxVDo?si=xBqGn3_iTI3WHGFe",
          favorited: false
        },
        {
          name: "SANIKIRA",
          artist: "Pace Santana",
          cover: "https://uropmabin-r7.github.io/Santana-Music-master/img/Pace_Santana9.jpg",
          source: "https://uropmabin-r7.github.io/Santana-Music-master/mp3/SANIKIRA.m4a",
          url: "https://youtu.be/ijcxiKEuogo?si=qPQvNPM0khznaMBE",
          favorited: false
        },
        {
          name: "Taputar_Japras",
          artist: "Pace Santana",
          cover: "https://uropmabin-r7.github.io/Santana-Music-master/img/Pace_Santana10.jpg",
          source: "https://uropmabin-r7.github.io/Santana-Music-master/mp3/Taputar_Japras.m4a",
          url: "https://youtu.be/3UCR00tCKo8?si=3GTcluQztLdamuZa",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[this.currentTrackIndex].favorited;
    }
  },
  created() {
    this.currentTrack = this.tracks[0];
    this.audio = new Audio(this.currentTrack.source);
    let vm = this;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      vm.isTimerPlaying = true;
    };

    // Preload covers
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image";
      document.head.appendChild(link);
    }
  }
});
