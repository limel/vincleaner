"use client";
import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  selector: string;
  show: boolean;
}

function Modal({ children, selector, show }: ModalProps) {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef<Element | null>(null);
  useEffect(() => {
    ref.current = document.getElementById(selector);
  }, [selector]);
  console.log(ref.current, selector, children);
  return ref.current && show
    ? (createPortal(<div className="modal-wrapper">{children}</div>, ref.current) as React.ReactElement)
    : null;
}

export default Modal;
