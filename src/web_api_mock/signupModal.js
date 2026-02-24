function createSignupModal() {
  const closeBtn = document.getElementById('closeModalBtn');
  const overlay = document.getElementById('modalOverlay');
  const checkbox = document.getElementById('agreeCheckbox');
  const signupBtn = document.getElementById('signupBtn');

  // 外側クリックで閉じる
  overlay.addEventListener('click', (e) => {
    // モーダルの外側をクリックするとtargetはoverlay, 内側をクリックするとtargetはmodalになる
    if (e.target === overlay) {
      overlay.style.display = 'none';
    }
  });

  // チェックボックスでボタン有効化
  checkbox.addEventListener('change', () => {
    signupBtn.disabled = !checkbox.checked;
  });

  // 閉じるボタン
  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  return {
    open: () => overlay.style.display = 'flex',
    close: () => overlay.style.display = 'none',
    overlay
  }
}

module.exports = { createSignupModal };
