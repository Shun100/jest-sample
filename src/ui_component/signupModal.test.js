/**
 * テスト観点
 * 1. 関数の単体テスト
 *  1-1. open()でモーダルが表示される
 *  1-2. close()でモーダルが非表示になる
 *  1-3. 不正なメール形式でチェック結果がfalseになる
 *  1-4. 不正なパスワード形式でチェック結果がfalseになる
 * 2. UI操作の単体テスト
 *  2-1. チェックボックスONでサインアップボタンが活性化する
 *  2-2. チェックボックスOFFでサインアップボタンが非活性化する
 *  2-3. overlay外側クリックで閉じる
 *  2-4. 閉じるボタンで閉じる
 *  2-5. サインアップボタン押下で画面が閉じる
 *  2-6. 不正なメール形式でエラーメッセージ表示
 *  2-7. 不正なパスワード形式でエラーメッセージ表示
 */

import { createSignupModal, validateEmail, validatePassword, submit } from "./signupModal";

describe('Signup Modal', () => {
  let modal;
  let overlay;
  let checkbox;
  let signupButton;
  let emailInput;
  let passwordInput;
  let emailErrorMessage;
  let passwordErrorMessage;
  let closeButton;

  beforeEach(() => {
    // top.htmlの代わり
    document.body.innerHTML = `
      <div id="modalOverlay" style="display: none;">
        <div class="modal">
          <span id="closeModalBtn">✖</span>
          <input type="email" id="emailInput" />
          <div id="emailErrorMessage"></div>
          <input type="password" id="passwordInput" />
          <div id="passwordErrorMessage"></div>
          <input type="checkbox" id="agreeCheckbox" />
          <button id="signupBtn" disabled>サインアップ</button>
        </div>
      </div>
    `;

    // fetch関数のモック
    global.fetch = jest.fn(() => Promise.resolve({ ok: true }));

    modal = createSignupModal();
    overlay = document.getElementById('modalOverlay');
    checkbox = document.getElementById('agreeCheckbox');
    signupButton = document.getElementById('signupBtn');
    emailInput = document.getElementById('emailInput');
    passwordInput = document.getElementById('passwordInput');
    emailErrorMessage = document.getElementById('emailErrorMessage');
    passwordErrorMessage = document.getElementById('passwordErrorMessage');
    closeButton = document.getElementById('closeModalBtn');
  });

  describe('関数の単体テスト', () => {
    test('open()でモーダルが表示される', () => {
      modal.open();
      expect(modal.overlay.style.display).toBe('flex');
    });

    test('close()でモーダルが非表示になる', () => {
      modal.open();
      modal.close();
      expect(modal.overlay.style.display).toBe('none');
    });

    test('不正なメール形式でチェック結果がfalseになる', () => {
      expect(validateEmail('invalid-email')).not.toBeTruthy();
    });

    test('不正なパスワード形式でチェック結果がfalseになる', () => {
      expect(validatePassword('pass123')).not.toBeTruthy();
    });

    // test('メールとパスワードを送信するとresponseがokで返ってくること', async () => {
    //   const email = emailInput.value;
    //   const password = passwordInput.value;
    //   const response = await submit({ email, password });
    //   expect(response).toEqual({ ok: true });
    // });
  });

  describe('UI操作の単体テスト', () => {
    test('チェックボックスONでボタンが活性化する', () => {
      checkbox.checked = true;
      checkbox.dispatchEvent(new Event('change'));
      expect(signupButton.disabled).toBe(false);
    });

    test('チェックボックスでOFFボタンが非活性化する', () => {
      checkbox.checked = true;
      checkbox.dispatchEvent(new Event('change'));
      checkbox.checked = false;
      checkbox.dispatchEvent(new Event('change'));
      expect(signupButton.disabled).toBe(true);
    });

    test('overlay外側クリックで閉じる', () => {
      modal.open();
      overlay.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      expect(overlay.style.display).toBe('none');
    });

    test('閉じるボタンで閉じる', () => {
      modal.open();
      closeButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      expect(overlay.style.display).toBe('none');
    });

    test('サインアップボタン押下で画面が閉じる', async () => {
      // ボタン押下前の状態
      checkbox.checked = true;
      checkbox.dispatchEvent(new Event('change'));
      emailInput.value = 'test@example.com';
      passwordInput.value = 'password123';
      signupButton.click();
      expect(overlay.style.display).toBe('none');
    });

    test('不正なメール形式でエラーメッセージ表示', () => {
      checkbox.checked = true;
      checkbox.dispatchEvent(new Event('change'));
      emailInput.value = 'invalid';
      signupButton.click();
      expect(emailErrorMessage.textContent).toEqual('メールアドレスの形式が不正です');
    });

    test('不正なパスワード形式でエラーメッセージ表示', () => {
      checkbox.checked = true;
      checkbox.dispatchEvent(new Event('change'));
      passwordInput.value = 'invalid';
      signupButton.click();
      expect(passwordErrorMessage.textContent).toEqual('パスワードは8文字以上必要です');
    });
  });
});