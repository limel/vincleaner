"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./validationSchema";
import PhoneInputField from "./PhoneInput";
import clsx from "clsx";

function CallbackForm({ vin, t }: { vin?: boolean; t: (key: string) => string }) {
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        messanger: "",
        vinCode: "",
        message: "",
      }}
      validationSchema={validationSchema()}
      onSubmit={(values) => {
        console.log(values);
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
              <Field name="message" placeholder={t("messagePlaceholder")} className="input resize-none" as="textarea" />
            </fieldset>
            <button className="button rounded-sm mx-auto" type="submit">
              {t("button")}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default CallbackForm;
