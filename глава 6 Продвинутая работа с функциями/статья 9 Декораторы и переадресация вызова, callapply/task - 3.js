// Результатом декоратора debounce(f, ms) должна быть обёртка,
//  которая передаёт вызов f не более одного раза в ms миллисекунд.
// Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.

function debounce(f, ms) {
  let isReady = false;

  return function () {
    if (isReady) return;

    f.apply(this, arguments);

    isReady = true;

    setTimeout(() => (isReady = false), ms);
  };
}
