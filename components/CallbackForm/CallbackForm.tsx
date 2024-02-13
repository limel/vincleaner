"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import validationSchema from "./validationSchema";
import { ToastContainer, toast } from "react-toastify";
import PhoneInputField from "./PhoneInput";
import clsx from "clsx";
import "react-toastify/dist/ReactToastify.css";

function CallbackForm({
  vin,
  t,
  setCloseModal,
}: {
  vin?: boolean;
  t: (key: string) => string;
  setCloseModal: (key: boolean) => void;
}) {
  const [pending, setPending] = useState(false);
  const notify = () => toast(t("successMessage"));
  const notifyError = () => toast.error(t("errorMessage"));
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          messanger: "",
          vinCode: vin ? "" : "форма не предусматривает ввода VIN-кода",
          message: "",
        }}
        validationSchema={validationSchema()}
        onSubmit={(values, actions) => {
          setPending(true);
          fetch("/api/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          })
            .then((res) => {
              if (res.ok) {
                notify();
              }
            })
            .catch((err) => {
              console.error(err);
              notifyError();
            })
            .finally(() => {
              actions.resetForm();
              setPending(false);
              setTimeout(() => {
                setCloseModal(false);
                document.body.style.overflow = "auto";
              }, 5000);
            });
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <fieldset>
                <legend className="lg:text-3xl text-xl pr-8 mb-8 font-bold relative pb-1.5 decor-line after:w-[123px] before:w-[240px] lg:before:w-[380px] ">
                  {t("title")}
                </legend>
                <Field
                  name="name"
                  placeholder={t("namePlaceholder")}
                  className={clsx("input", errors.name && touched.name && "error")}
                />
                <PhoneInputField name="phone" className={clsx("input", errors.phone && touched.phone && "error")} />
                <span className="lg:text-xl text-base font-semibold mb-4">{t("messangersCaption")}</span>
                <div
                  role="group"
                  aria-labelledby="messanger"
                  className="mb-8 flex gap-2 lg:gap-4 flex-col lg:flex-row lg:items-center"
                >
                  <label className="radio">
                    <Field type="radio" name="messanger" value="telegram" className="hidden" />
                    <span className="radio__mark"></span>
                    <span className="ml-1">Telegram</span>
                  </label>
                  <label className="flex items-center radio">
                    <Field type="radio" name="messanger" value="whatsapp" className="hidden" />
                    <span className="radio__mark"></span>
                    <span className="ml-1">WhatsApp</span>
                  </label>
                  <label className="radio">
                    <Field type="radio" name="messanger" value="viber" className="hidden" />
                    <span className="radio__mark"></span>
                    <span className="ml-1">Viber</span>
                  </label>
                </div>
                {vin && (
                  <>
                    <Field
                      name="vinCode"
                      placeholder={t("vinPlaceholder")}
                      className={clsx("input", errors.vinCode && touched.vinCode && "error")}
                    />
                  </>
                )}
                <Field
                  name="message"
                  placeholder={t("messagePlaceholder")}
                  className="input resize-none"
                  as="textarea"
                />
              </fieldset>
              <button
                className="button rounded-sm mx-auto disabled:pointer-events-none disabled:opacity-50"
                type="submit"
                disabled={pending}
              >
                {t("button")}
              </button>
            </Form>
          );
        }}
      </Formik>
      <ToastContainer />
    </>
  );
}

export default CallbackForm;
