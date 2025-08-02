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
