// โค้ด JavaScript ที่ใช้ในเว็บไซต์นี้

function createFlower() {
  const flower = document.createElement('div');
  flower.innerHTML = '💗';
  flower.classList.add('flower');
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = Math.random() * 1 + 5 + 's';
  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 5000);
}

setInterval(createFlower, 500);

document.addEventListener("DOMContentLoaded", function() {
  const music = document.getElementById('bg-music');
    music.volume = 0.1; // ลดเสียงเหลือ 50% (ปรับค่าได้ 0.0 - 1.0)

// เรียกให้เล่นเมื่อกดปุ่มเปิด/ปิด
document.body.addEventListener('click', function() {
  if (music.paused) {
    music.play().catch(error => console.log("Autoplay blocked:", error));
    }
  }, { once: true });
});

function moveToNext(input, nextIndex) {
  if (input.value.length === 1) {
    const nextInput = document.querySelector(`.code-inputs input:nth-child(${nextIndex + 1})`);
    if (nextInput) nextInput.focus();
  }
}

function checkCode() {
  const inputs = document.querySelectorAll('.code-inputs input');
  let code = '';
  inputs.forEach(input => {
    code += input.value;
  });

  if (code === '1609') {
    document.getElementById('home').style.display = 'none';
    document.getElementById('countdown-page').style.display = 'block';
    updateDaysTogether(); // เริ่มนับวันที่คบกัน
  } else {
    alert('รหัสไม่ถูกต้อง กรุณาลองอีกครั้ง');
  }
}

const startDate = new Date('2024-09-16T12:59:30'); // วันที่คบกัน

function updateDaysTogether() {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days-together').innerHTML = 
    `<div class="day"> 
    ${days} วัน<br>${hours} ชั่วโมง<br>${minutes} นาที<br>${seconds} วินาที 
    </div>`;
}

// อัปเดตทุกวินาที
setInterval(updateDaysTogether, 1000);
updateDaysTogether();

// เปิด Popup เมื่อกดปุ่ม
function showPopup() {
  document.getElementById('popup-text').style.display = 'flex'; // แสดง popup
}

function Popupimg() {
  //document.getElementById('bg-music').pause(); // หยุดเพลง
  document.getElementById('popup').style.display = 'flex';
  document.getElementById('popup-text').style.display = 'none'; // ซ่อน popup
}

function Popupimg2() {
  document.getElementById('bg-music').pause(); // หยุดเพลง
  document.getElementById('popup-video').play(); // เล่นวิดีโอ
  document.getElementById('popup-img').style.display = 'flex';
  document.getElementById('popup').style.display = 'none';
} 

function Popupimg3() {
  document.getElementById('bg-music').pause(); // เล่นเพลง
  document.getElementById('popup-video2').play(); // เล่นวิดีโอ
  document.getElementById('popup-video').pause(); // หยุดเพลง
  document.getElementById('popup-img2').style.display = 'flex';
  document.getElementById('popup-img').style.display = 'none';
}

function Popupimg4() {
  document.getElementById('bg-music').play(); // หยุดเพลง
  document.getElementById('popup-video2').pause(); // เล่นวิดีโอ
  document.getElementById('popup-img3').style.display = 'flex';
  document.getElementById('popup-img2').style.display = 'none';
}

function Popupimg5() {
  document.getElementById('popup-img4').style.display = 'flex';
  document.getElementById('popup-img3').style.display = 'none';
}

function Popupimg6() {
  document.getElementById('popup-img5').style.display = 'flex';
  document.getElementById('popup-img4').style.display = 'none';
}

function Popupimg7() {
  document.getElementById('bg-music').pause(); // เล่นเพลง
  document.getElementById('popup-video3').play(); // เล่นวิดีโอ
  document.getElementById('popup-img6').style.display = 'flex';
  document.getElementById('popup-img5').style.display = 'none';
}

function Popupimg8() {
  document.getElementById('bg-music').play(); // เล่นเพลง
  document.getElementById('popup-video3').pause(); // หยุดเล่นวิดีโอ
  document.getElementById('popup-text2').style.display = 'flex';
  document.getElementById('popup-img6').style.display = 'none';
}


function hidePopup() {
  document.getElementById('popup-text2').style.display = 'none';
}

