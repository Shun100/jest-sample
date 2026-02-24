/**
 * テスト観点
 * 1. open()でモーダルが表示される
 * 2. close()でモーダルが非表示になる
 * 3. チェックボックスONでサインアップボタンが活性化する
 * 4. チェックボックスOFFでサインアップボタンが非活性化する
 * 5. overlay外側クリックで閉じる
 * 6. 閉じるボタンで閉じる
 */

import { createSignupModal } from "./signupModal";

describe('Signup Modal', () => {
  let modal;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="modalOverlay" style="display: none;">
        <div class="modal">
          <span id="closeModalBtn">✖</span>
          <input type="checkbox" id="agreeCheckbox" />
          <button id="signupBtn" disabled>サインアップ</button>
        </div>
      </div>
    `;
    modal = createSignupModal();
  });

  test('open()でモーダルが表示される', () => {
    modal.open();
    expect(modal.overlay.style.display).toBe('flex');
  });

  test('close()でモーダルが非表示になる', () => {
    modal.open();
    modal.close();
    expect(modal.overlay.style.display).toBe('none');
  });

  test('チェックボックスONでボタンが活性化する', () => {
    const checkbox = document.getElementById('agreeCheckbox');
    const button = document.getElementById('signupBtn');

    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change'));

    expect(button.disabled).toBe(false);
  });

  test('チェックボックスでOFFボタンが非活性化する', () => {
    const checkbox = document.getElementById('agreeCheckbox');
    const button = document.getElementById('signupBtn');

    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change'));
    checkbox.checked = false;
    checkbox.dispatchEvent(new Event('change'));

    expect(button.disabled).toBe(true);
  });

  test('overlay外側クリックで閉じる', () => {
    const overlay = document.getElementById('modalOverlay');

    modal.open();

    overlay.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(overlay.style.display).toBe('none');
  });

  test('閉じるボタンで閉じる', () => {
    const closeBtn = document.getElementById('closeModalBtn');
    const overlay = document.getElementById('modalOverlay');

    modal.open();

    closeBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(overlay.style.display).toBe('none');
  });
});