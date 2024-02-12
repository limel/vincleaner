"use client";
import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

interface ModalProps {
  children: React.ReactNode;
  selector: string;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

function Modal({ children, selector, openModal, setOpenModal }: ModalProps) {
  const ref = useRef<Element | null>(null);
  const modalBodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref.current = document.getElementById(selector);
    const handleClickOutside = (event: MouseEvent) => {
      if (modalBodyRef.current && !modalBodyRef.current.contains(event.target as Node)) {
        setOpenModal(false);
        document.body.style.overflow = "auto";
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenModal(false);
        document.body.style.overflow = "auto";
      }
    };

    // Add event listener on mount
    document.body.addEventListener("mousedown", handleClickOutside);
    document.body.addEventListener("keydown", handleEscape);

    // Clean up the event listener on unmount
    return () => {
      document.body.removeEventListener("mousedown", handleClickOutside);
      document.body.removeEventListener("keydown", handleEscape);
    };
  }, [selector, setOpenModal]);

  if (!openModal) return null;

  return ref.current && openModal
    ? (createPortal(
        <div className={clsx("modal-wrapper", openModal && "active")}>
          <div className="modal-body" ref={modalBodyRef}>
            <button
              className="absolute top-10 right-4 z-50 focus:outline-none"
              onClick={() => {
                setOpenModal(false);
                document.body.style.overflow = "auto";
              }}
              aria-label="close modal"
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.9762 4.02372C26.0635 4.1108 26.1328 4.21426 26.18 4.32815C26.2273 4.44205 26.2516 4.56415 26.2516 4.68747C26.2516 4.81078 26.2273 4.93288 26.18 5.04678C26.1328 5.16068 26.0635 5.26413 25.9762 5.35122L5.35121 25.9762C5.17518 26.1523 4.93642 26.2512 4.68746 26.2512C4.43851 26.2512 4.19975 26.1523 4.02371 25.9762C3.84768 25.8002 3.74878 25.5614 3.74878 25.3125C3.74878 25.0635 3.84768 24.8248 4.02371 24.6487L24.6487 4.02372C24.7358 3.93641 24.8393 3.86714 24.9532 3.81988C25.067 3.77262 25.1891 3.74829 25.3125 3.74829C25.4358 3.74829 25.5579 3.77262 25.6718 3.81988C25.7857 3.86714 25.8891 3.93641 25.9762 4.02372Z"
                  fill="black"
                  fillOpacity="0.5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.02372 4.02372C3.93641 4.1108 3.86714 4.21426 3.81988 4.32815C3.77262 4.44205 3.74829 4.56415 3.74829 4.68747C3.74829 4.81078 3.77262 4.93288 3.81988 5.04678C3.86714 5.16068 3.93641 5.26413 4.02372 5.35122L24.6487 25.9762C24.8248 26.1523 25.0635 26.2512 25.3125 26.2512C25.5614 26.2512 25.8002 26.1523 25.9762 25.9762C26.1523 25.8002 26.2512 25.5614 26.2512 25.3125C26.2512 25.0635 26.1523 24.8248 25.9762 24.6487L5.35122 4.02372C5.26413 3.93641 5.16068 3.86714 5.04678 3.81988C4.93288 3.77262 4.81078 3.74829 4.68747 3.74829C4.56415 3.74829 4.44205 3.77262 4.32815 3.81988C4.21426 3.86714 4.1108 3.93641 4.02372 4.02372Z"
                  fill="black"
                  fillOpacity="0.5"
                />
              </svg>
            </button>
            {children}
          </div>
        </div>,
        ref.current
      ) as React.ReactElement)
    : null;
}

export default Modal;
