const releaseInput = document.getElementById('releaseInput');
const releasePre = document.getElementById('mainText');
const releaseHeader = document.getElementById('releaseHeader');
const releaseFooter = document.getElementById('releaseFooter');
const approvalText = document.getElementById('approvalText');
const toggleFooterText = document.getElementById('toggleFooterText');

releasePre.textContent = releaseInput.placeholder;
releaseInput.value = releaseInput.placeholder;

releaseHeader.style.display = 'block';
releaseFooter.style.display = 'block';

function updateApprovalTextVisibility() {
  approvalText.style.display = toggleFooterText.checked ? 'block' : 'none';
}

updateApprovalTextVisibility();

releaseInput.addEventListener('input', () => {
  releasePre.textContent = releaseInput.value;
});

toggleFooterText.addEventListener('change', updateApprovalTextVisibility);

let pressed = false;
let flickerInterval;

function startFlickering() {
  if (flickerInterval) {
    clearInterval(flickerInterval);
  }

  flickerInterval = setInterval(function() {
    if (pressed) return;
    const downloadButton = document.getElementById('download');
    const currentImage = downloadButton.style.backgroundImage;
    if (currentImage.includes("downloadUnpressed.png")) {
      downloadButton.style.backgroundImage = "url('img/downloadPressed.png')";
    } else {
      downloadButton.style.backgroundImage = "url('img/downloadUnpressed.png')";
    }
  }, 500);
}
startFlickering();

function downloadRelease() {
  pressed = true;
  const downloadButton = document.getElementById('download');
  downloadButton.style.backgroundImage = "url('img/downloadPressed.png')";

  const releaseOutput = document.getElementById('releaseOutput');
  html2canvas(releaseOutput).then(function(canvas) {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'release.png';
    link.click();
  });

  setTimeout(function() {
    downloadButton.style.backgroundImage = "url('img/downloadDone.png')";
  }, 1000);

  setTimeout(function() {
    pressed = false;
    downloadButton.style.backgroundImage = "url('img/downloadUnpressed.png')";
    startFlickering();
  }, 3000);
}
