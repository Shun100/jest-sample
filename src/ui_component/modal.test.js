const { createModal } = require('./modal');
const { screen, fireEvent } = require('@testing-library/dom');
require('@testing-library/jest-dom');

describe('Modal component', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });
  
  test('openするとモーダルが表示される', () => {
    const modal = createModal();
    modal.open();
    expect(modal.element).toBeVisible();
  });

  test('closeするとモーダルが非表示になる', () => {
    const modal = createModal();
    modal.open();
    modal.close();
    expect(modal.element).not.toBeVisible();
  });

  test('closeボタンを押すと閉じる', () => {
    const modal = createModal();
    modal.open();
    const button = screen.getByText('Close');
    fireEvent.click(button);
    expect(modal.element).not.toBeVisible();
  });
});
