import React from "react";

const Modal = ({ open, onClose, children }) => {
  // モーダル内のクリックイベントを止める
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/20" : "invisible"}`}
    >
      <div
        onClick={handleModalClick} // ここにイベントハンドラを追加
        className={`bg-white relative px-20 w-[20%] py-5 rounded-lg flex flex-col items-center gap-10 shadow p-6 transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
