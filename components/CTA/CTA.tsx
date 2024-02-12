"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Modal } from "components/Modal";
import { CallbackForm } from "components/CallbackForm";

function CTA() {
  const [openModal, setOpenModal] = useState(false);
  const tCallbackForm = useTranslations("RequestForm");
  const t = useTranslations("CTA");

  return (
    <section className="py-6 my-6 lg:py-14 lg:my-32">
      <div className="container">
        <h2 className="uppercase text-center">{t("title")}</h2>
        <button
          className="button rounded group/btn mx-auto mt-7"
          onClick={() => {
            setOpenModal(true);
            document.body.style.overflow = "hidden";
          }}
        >
          {t("button")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="ml-1 group-hover/btn:translate-x-1 transition-transform duration-300 ease-in-out"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>

        <Modal selector="modal" openModal={openModal} setOpenModal={setOpenModal}>
          <CallbackForm t={tCallbackForm} />
        </Modal>
      </div>
    </section>
  );
}

export default CTA;
