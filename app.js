// Danh sách bài hát (Dùng API iTunes để tự lấy audio & cover)
const defaultSongs = [
  // Ariana Grande
  { title: "we can't be friends (wait for your love)", artist: "Ariana Grande" },
  { title: "One Last Time", artist: "Ariana Grande" },
  { title: "Into You", artist: "Ariana Grande" },
  { title: "Dangerous Woman", artist: "Ariana Grande" },
  { title: "pov", artist: "Ariana Grande" },
  { title: "positions", artist: "Ariana Grande" },
  { title: "thank u, next", artist: "Ariana Grande" },
  { title: "7 rings", artist: "Ariana Grande" },

  // Billie Eilish
  { title: "lovely", artist: "Billie Eilish & Khalid" },
  { title: "Ocean Eyes", artist: "Billie Eilish" },
  { title: "when the party's over", artist: "Billie Eilish" },
  { title: "idontwannabeyouanymore", artist: "Billie Eilish" },
  { title: "everything i wanted", artist: "Billie Eilish" },
  { title: "Happier Than Ever", artist: "Billie Eilish" },
  { title: "BIRDS OF A FEATHER", artist: "Billie Eilish" },

  // Ed Sheeran
  { title: "Perfect", artist: "Ed Sheeran" },
  { title: "Photograph", artist: "Ed Sheeran" },
  { title: "Thinking Out Loud", artist: "Ed Sheeran" },
  { title: "Shape of You", artist: "Ed Sheeran" },
  { title: "Happier", artist: "Ed Sheeran" },
  { title: "Dive", artist: "Ed Sheeran" },
  { title: "Shivers", artist: "Ed Sheeran" },

  // Bruno Mars
  { title: "When I Was Your Man", artist: "Bruno Mars" },
  { title: "Talking to the Moon", artist: "Bruno Mars" },
  { title: "Just The Way You Are", artist: "Bruno Mars" },
  { title: "Grenade", artist: "Bruno Mars" },
  { title: "It Will Rain", artist: "Bruno Mars" },
  { title: "Locked Out of Heaven", artist: "Bruno Mars" },
  { title: "That's What I Like", artist: "Bruno Mars" },
  { title: "Die With A Smile", artist: "Lady Gaga & Bruno Mars" },

  // Adele
  { title: "Someone Like You", artist: "Adele" },
  { title: "Hello", artist: "Adele" },
  { title: "Easy On Me", artist: "Adele" },
  { title: "When We Were Young", artist: "Adele" },
  { title: "Set Fire to the Rain", artist: "Adele" },
  { title: "Rolling in the Deep", artist: "Adele" },

  // Justin Bieber
  { title: "Love Yourself", artist: "Justin Bieber" },
  { title: "Sorry", artist: "Justin Bieber" },
  { title: "Let Me Love You", artist: "DJ Snake ft. Justin Bieber" },
  { title: "What Do You Mean?", artist: "Justin Bieber" },
  { title: "Ghost", artist: "Justin Bieber" },
  { title: "Peaches", artist: "Justin Bieber ft. Daniel Caesar & GIVĒON" },
  { title: "Stay", artist: "The Kid LAROI & Justin Bieber" },

  // One Direction / Harry Styles
  { title: "What Makes You Beautiful", artist: "One Direction" },
  { title: "Night Changes", artist: "One Direction" },
  { title: "Story of My Life", artist: "One Direction" },
  { title: "Perfect", artist: "One Direction" },
  { title: "Sign of the Times", artist: "Harry Styles" },
  { title: "As It Was", artist: "Harry Styles" },
  { title: "Adore You", artist: "Harry Styles" },

  // Selena Gomez
  { title: "Lose You To Love Me", artist: "Selena Gomez" },
  { title: "Wolves", artist: "Selena Gomez & Marshmello" },
  { title: "It Ain't Me", artist: "Kygo & Selena Gomez" },
  { title: "Good For You", artist: "Selena Gomez" },

  // The Weeknd
  { title: "Blinding Lights", artist: "The Weeknd" },
  { title: "Save Your Tears", artist: "The Weeknd" },
  { title: "Die For You", artist: "The Weeknd" },
  { title: "Call Out My Name", artist: "The Weeknd" },
  { title: "Starboy", artist: "The Weeknd ft. Daft Punk" },

  // Shawn Mendes / Camila Cabello
  { title: "Treat You Better", artist: "Shawn Mendes" },
  { title: "There's Nothing Holdin' Me Back", artist: "Shawn Mendes" },
  { title: "Stitches", artist: "Shawn Mendes" },
  { title: "Señorita", artist: "Shawn Mendes & Camila Cabello" },
  { title: "Havana", artist: "Camila Cabello" },

  // Others
  { title: "The One That Got Away", artist: "Katy Perry" },
  { title: "Teenage Dream", artist: "Katy Perry" },
  { title: "Dusk Till Dawn", artist: "ZAYN ft. Sia" },
  { title: "PILLOWTALK", artist: "ZAYN" },
  { title: "Another Love", artist: "Tom Odell" },
  { title: "Let Her Go", artist: "Passenger" },
  { title: "Someone You Loved", artist: "Lewis Capaldi" },
  { title: "Before You Go", artist: "Lewis Capaldi" },
  { title: "Until I Found You", artist: "Stephen Sanchez" },
  { title: "Heather", artist: "Conan Gray" },
  { title: "Arcade", artist: "Duncan Laurence" },
  { title: "The Night We Met", artist: "Lord Huron" },
  { title: "A Thousand Years", artist: "Christina Perri" },
  { title: "Say You Won't Let Go", artist: "James Arthur" },
  { title: "Let Me Down Slowly", artist: "Alec Benjamin" },
  { title: "We Don't Talk Anymore", artist: "Charlie Puth ft. Selena Gomez" },
  { title: "Attention", artist: "Charlie Puth" },
  { title: "Stay With Me", artist: "Sam Smith" },
  { title: "Too Good At Goodbyes", artist: "Sam Smith" },
  { title: "Love Me Like You Do", artist: "Ellie Goulding" },
  { title: "Closer", artist: "The Chainsmokers ft. Halsey" },
  { title: "Something Just Like This", artist: "The Chainsmokers & Coldplay" },
  { title: "Counting Stars", artist: "OneRepublic" },
  { title: "Apologize", artist: "OneRepublic" },
  { title: "Demons", artist: "Imagine Dragons" },
  { title: "Believer", artist: "Imagine Dragons" },

  // Maroon 5
  { title: "This Love", artist: "Maroon 5" },
  { title: "She Will Be Loved", artist: "Maroon 5" },
  { title: "Sunday Morning", artist: "Maroon 5" },
  { title: "Maps", artist: "Maroon 5" },
  { title: "Animals", artist: "Maroon 5" },
  { title: "One More Night", artist: "Maroon 5" },
  { title: "Sugar", artist: "Maroon 5" },
  { title: "Girls Like You", artist: "Maroon 5 ft. Cardi B" },
  { title: "Memories", artist: "Maroon 5" },
  { title: "Payphone", artist: "Maroon 5 ft. Wiz Khalifa" },

  // The Weeknd - thêm
  { title: "The Hills", artist: "The Weeknd" },
  { title: "I Feel It Coming", artist: "The Weeknd ft. Daft Punk" },
  { title: "Can't Feel My Face", artist: "The Weeknd" },
  { title: "Earned It", artist: "The Weeknd" },
  { title: "In Your Eyes", artist: "The Weeknd" },

  // Rihanna / Others
  { title: "We Found Love", artist: "Rihanna ft. Calvin Harris" },
  { title: "Diamonds", artist: "Rihanna" },
  { title: "Stay", artist: "Rihanna ft. Mikky Ekko" },
  { title: "Love The Way You Lie", artist: "Eminem ft. Rihanna" },
  { title: "Just Give Me a Reason", artist: "P!nk ft. Nate Ruess" },
  { title: "A Thousand Miles", artist: "Vanessa Carlton" },
  { title: "Bleeding Love", artist: "Leona Lewis" },
  { title: "Secrets", artist: "OneRepublic" },
  { title: "Viva La Vida", artist: "Coldplay" },
  { title: "Yellow", artist: "Coldplay" },
  { title: "Paradise", artist: "Coldplay" },
  { title: "The Scientist", artist: "Coldplay" },
  { title: "Lights", artist: "Ellie Goulding" },
  { title: "Rather Be", artist: "Clean Bandit ft. Jess Glynne" },
  { title: "Fireflies", artist: "Owl City" },
  { title: "Hey, Soul Sister", artist: "Train" },
  { title: "Call Me Maybe", artist: "Carly Rae Jepsen" },

  // Epic / Anthemic
  { title: "A Sky Full of Stars", artist: "Coldplay" },
  { title: "Adventure of a Lifetime", artist: "Coldplay" },
  { title: "Every Teardrop Is a Waterfall", artist: "Coldplay" },
  { title: "Pompeii", artist: "Bastille" },
  { title: "Wake Me Up", artist: "Avicii" },
  { title: "Take Me to Church", artist: "Hozier" },
  { title: "Little Talks", artist: "Of Monsters and Men" },
  { title: "It's Time", artist: "Imagine Dragons" },

  // Avicii - thêm
  { title: "The Nights", artist: "Avicii" },
  { title: "Waiting For Love", artist: "Avicii" },
  { title: "Hey Brother", artist: "Avicii" },
  { title: "Without You", artist: "Avicii ft. Sandro Cavazza" },
  { title: "Levels", artist: "Avicii" },
  { title: "The Days", artist: "Avicii" },
  { title: "Heaven", artist: "Avicii" },
  { title: "Broken Arrows", artist: "Avicii" },
  { title: "For A Better Day", artist: "Avicii" }
];

// Các mốc thời gian (giây)
const timeSteps = [0.5, 1, 2, 4, 8, 15];
const TOTAL_DURATION = 15;

let currentSong = null;
let currentStep = 0;
let isPlaying = false;
let playTimeout = null;

// Mảng lưu danh sách các chỉ số (index) bài hát ĐÃ CHƠI
let playedIndexes = [];

const audio = new Audio();

// Lấy các phần tử DOM
const playBtn = document.getElementById("play-btn");
const songInput = document.getElementById("song-input");
const suggestionsList = document.getElementById("suggestions");
const skipBtn = document.getElementById("skip-btn");
const attemptsBoxes = document.querySelectorAll(".attempt-box");
const resultModal = document.getElementById("result-modal");
const resultTitle = document.getElementById("result-title");
const resultCover = document.getElementById("result-cover");
const resultSongInfo = document.getElementById("result-song-info");
const restartBtn = document.getElementById("restart-btn");
const timeText = document.getElementById("time-text");
const timeIndicator = document.getElementById("time-indicator");
const progressFill = document.getElementById("progress-fill");
const volumeSlider = document.getElementById("volume-slider");

// Mặc định âm lượng 80%
audio.volume = 0.8;

// Xử lý sự kiện kéo thanh âm lượng
if (volumeSlider) {
  volumeSlider.addEventListener("input", (e) => {
    const volumeValue = parseFloat(e.target.value);
    audio.volume = volumeValue;

    const volumeIcon = document.querySelector(".volume-icon");
    if (volumeIcon) {
      if (volumeValue === 0) volumeIcon.textContent = "🔇";
      else if (volumeValue < 0.5) volumeIcon.textContent = "🔉";
      else volumeIcon.textContent = "🔊";
    }
  });
}

// 🌐 HÀM GỌI API ITUNES
async function fetchSongDataFromAPI(songObj) {
  const query = encodeURIComponent(`${songObj.title} ${songObj.artist}`);
  const apiUrl = `https://itunes.apple.com/search?term=${query}&entity=song&limit=1`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const track = data.results[0];
      return {
        title: songObj.title,
        artist: songObj.artist,
        audioUrl: track.previewUrl,
        coverUrl: track.artworkUrl100.replace("100x100bb", "400x400bb")
      };
    } else {
      console.warn(`Không tìm thấy nhạc trên API cho: ${songObj.title}`);
      return null;
    }
  } catch (error) {
    console.error("Lỗi khi kết nối API:", error);
    return null;
  }
}

// Cập nhật vị trí con trỏ thời gian & reset thanh tiến trình về 0s
function updateTimeIndicator() {
  const currentTime = timeSteps[currentStep];
  if (timeText) timeText.textContent = `${currentTime} ${currentTime === 1 ? 'second' : 'seconds'}`;

  const positions = ["3.33%", "6.67%", "13.33%", "26.67%", "53.33%", "100%"];
  if (timeIndicator) timeIndicator.style.left = positions[currentStep] || "100%";

  if (progressFill) {
    progressFill.style.transition = "none";
    progressFill.style.width = "0%";
  }
}

// 🎯 HÀM LẤY BÀI HÁT KHÔNG BỊ LẶP
function getNextUnplayedIndex() {
  if (playedIndexes.length >= defaultSongs.length) {
    playedIndexes = [];
    console.log("🔄 Đã hoàn thành hết bài hát! Đang reset lại danh sách lượt chơi...");
  }

  const availableIndexes = defaultSongs
    .map((_, index) => index)
    .filter(index => !playedIndexes.includes(index));

  const randomIndex = Math.floor(Math.random() * availableIndexes.length);
  const selectedIndex = availableIndexes[randomIndex];

  playedIndexes.push(selectedIndex);

  return selectedIndex;
}

// 1. Khởi tạo Game
async function initGame() {
  currentStep = 0;
  songInput.value = "";
  if (suggestionsList) suggestionsList.innerHTML = "";
  resultModal.classList.add("hidden");

  clearTimeout(playTimeout);
  audio.pause();
  audio.currentTime = 0;
  isPlaying = false;

  playBtn.disabled = true;
  playBtn.style.opacity = "0.5";
  playBtn.style.cursor = "not-allowed";

  const selectedIndex = getNextUnplayedIndex();
  const selectedSong = defaultSongs[selectedIndex];

  const songData = await fetchSongDataFromAPI(selectedSong);

  if (songData && songData.audioUrl) {
    currentSong = songData;
    audio.src = currentSong.audioUrl;
    audio.load();

    playBtn.disabled = false;
    playBtn.style.opacity = "1";
    playBtn.style.cursor = "pointer";
  } else {
    initGame();
    return;
  }

  attemptsBoxes.forEach((box) => {
    box.className = "attempt-box";
    box.textContent = "";
  });

  updateTimeIndicator();
}

// 2. Phát nhạc ở các lượt đoán
playBtn.addEventListener("click", () => {
  if (isPlaying || !currentSong) return;

  const maxTime = timeSteps[currentStep];

  clearTimeout(playTimeout);
  audio.currentTime = 0;

  if (progressFill) {
    progressFill.style.transition = "none";
    progressFill.style.width = "0%";
  }

  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise.then(() => {
      isPlaying = true;
      playBtn.style.transform = "scale(0.9)";

      const targetPercent = (maxTime / TOTAL_DURATION) * 100;

      requestAnimationFrame(() => {
        if (progressFill) {
          progressFill.style.transition = `width ${maxTime}s linear`;
          progressFill.style.width = `${targetPercent}%`;
        }
      });

      playTimeout = setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
        playBtn.style.transform = "scale(1)";

        if (progressFill) {
          progressFill.style.transition = "none";
          progressFill.style.width = "0%";
        }
      }, maxTime * 1000);

    }).catch(error => {
      console.error("Lỗi phát nhạc:", error);
      isPlaying = false;
      playBtn.style.transform = "scale(1)";
    });
  }
});

// 3. Gợi ý bài hát khi gõ
songInput.addEventListener("input", () => {
  const query = songInput.value.trim().toLowerCase();
  suggestionsList.innerHTML = "";
  if (!query) return;

  const matches = defaultSongs.filter(s => 
    s.title.toLowerCase().includes(query) || s.artist.toLowerCase().includes(query)
  );

  matches.forEach(song => {
    const div = document.createElement("div");
    div.className = "suggestion-item";
    div.textContent = `${song.title} - ${song.artist}`;
    div.onclick = () => {
      songInput.value = `${song.title} - ${song.artist}`;
      suggestionsList.innerHTML = "";
      submitGuess();
    };
    suggestionsList.appendChild(div);
  });
});

// 4. Nút Skip & Submit
skipBtn.addEventListener("click", () => {
  if (!currentSong) return;
  handleAttempt(false, "Skipped");
});

function submitGuess() {
  if (!currentSong) return;
  const userGuess = songInput.value.trim().toLowerCase();
  if (!userGuess) return;

  const isCorrect = userGuess.includes(currentSong.title.toLowerCase());
  handleAttempt(isCorrect, songInput.value);
}

// 5. Cập nhật lượt chơi
function handleAttempt(isCorrect, textDisplay) {
  clearTimeout(playTimeout);
  audio.pause();
  audio.currentTime = 0;
  isPlaying = false;
  playBtn.style.transform = "scale(1)";

  const currentBox = attemptsBoxes[currentStep];

  if (isCorrect) {
    currentBox.classList.add("correct");
    currentBox.textContent = `${currentSong.title} - ${currentSong.artist}`;
    endGame(true);
  } else {
    if (textDisplay === "Skipped") {
      currentBox.classList.add("skipped");
      currentBox.textContent = "Skipped";
    } else {
      currentBox.classList.add("wrong");
      currentBox.textContent = textDisplay;
    }

    currentStep++;
    songInput.value = "";
    suggestionsList.innerHTML = "";

    if (currentStep >= timeSteps.length) {
      endGame(false);
    } else {
      updateTimeIndicator();
    }
  }
}

// 6. Kết thúc game
function endGame(isWin) {
  clearTimeout(playTimeout);

  resultTitle.textContent = isWin ? "🎉 BẠN ĐÃ ĐOÁN ĐÚNG!" : "❌ RẤT TIẾC, HẾT LƯỢT!";
  resultCover.src = currentSong.coverUrl;
  resultSongInfo.textContent = `${currentSong.title} - ${currentSong.artist}`;

  resultModal.classList.remove("hidden");

  if (progressFill) {
    progressFill.style.transition = "none";
    progressFill.style.width = "100%";
  }

  audio.currentTime = 0;
  audio.play().then(() => {
    isPlaying = true;
  }).catch(error => {
    console.error("Lỗi phát full bài:", error);
  });
}

restartBtn.addEventListener("click", initGame);

// Chạy game
initGame();
