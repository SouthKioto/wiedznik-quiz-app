import type { ReactNode } from "react";
import Popup from "reactjs-popup";

interface ModalWindowProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export const ModalWindow = ({
  open,
  onClose,
  title,
  subtitle,
  children,
  footer,
}: ModalWindowProps) => (
  <Popup
    open={open}
    onClose={onClose}
    modal
    lockScroll
    closeOnDocumentClick
    closeOnEscape
    overlayStyle={{ background: "rgba(4, 20, 24, 0.6)", padding: "16px" }}
    contentStyle={{
      margin: "auto",
      width: "100%",
      maxWidth: "420px",
      background: "transparent",
      border: "none",
      padding: 0,
    }}
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="flex flex-col gap-5 rounded-2xl border border-white/20 bg-[#10363A] p-6 text-white shadow-2xl"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h2 id="modal-title" className="text-xl font-semibold">
            {title}
          </h2>
          {subtitle && <span className="text-sm text-white/75">{subtitle}</span>}
        </div>
        <button
          type="button"
          aria-label="Zamknij"
          onClick={onClose}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
          ✕
        </button>
      </div>

      {children}

      {footer && <div className="flex justify-end gap-2">{footer}</div>}
    </div>
  </Popup>
);
