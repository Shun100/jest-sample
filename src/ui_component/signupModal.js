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

  signupBtn.addEventListener('click', async () => {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    let isValid = true;
    let response = {};

    if (!validateEmail(email)) {
      document.getElementById('emailErrorMessage').textContent = 'メールアドレスの形式が不正です';
      isValid = false;
    }

    if (!validatePassword(password)) {
      document.getElementById('passwordErrorMessage').textContent = 'パスワードは8文字以上必要です';
      isValid = false;
    }

    if (isValid && submit({ email, password })) {
      overlay.style.display = 'none';
    }
  });

  return {
    open: () => overlay.style.display = 'flex',
    close: () => overlay.style.display = 'none',
    overlay
  }
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}

async function submit(data) {
  const response = await fetch('https://example.com/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  return response;
}

module.exports = { createSignupModal, validateEmail, validatePassword, submit };
