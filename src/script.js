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
