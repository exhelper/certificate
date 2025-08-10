document.addEventListener("DOMContentLoaded", function () {
  // モーダル要素を作成
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalImg = document.createElement("img");
  modal.appendChild(modalImg);

  document.body.appendChild(modal);

  // トリガー要素にイベント追加
  document.querySelectorAll(".modal-trigger img").forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function () {
      modalImg.src = this.src;
      modal.style.display = "flex";
    });
  });

  // モーダルをクリックで閉じる
  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

// button
document.querySelectorAll('.toggle-btn').forEach((button, index) => {
  const content = button.nextElementSibling;

  // 自動的にユニークなIDを付ける
  const uniqueId = `slide-content-${index}`;
  content.id = uniqueId;
  button.setAttribute('aria-controls', uniqueId);
  button.setAttribute('aria-expanded', 'false');

  // 初期スタイル
  content.style.maxHeight = '0';
  content.style.overflow = 'hidden';
  content.style.transition = 'max-height 0.3s ease';

  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      content.style.maxHeight = '0';
      button.setAttribute('aria-expanded', 'false');
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      button.setAttribute('aria-expanded', 'true');
    }
  });
});
