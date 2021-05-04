import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useMutation } from "react-fetching-library";
import { postCandidateAction, postCvAction } from "../../../api/actions/candidateActions";
import { useEffect, useState } from "react";
import TextInput from "../../ui/layout/input/TextInput";
import TextAreaInput from "../../ui/layout/input/TextAreaInput";

export const ApplicationModal = ({ isOpen, setOpen, setApplicationSent }) => {
  const router = useRouter();
  const { offerId } = router.query;
  const { t } = useTranslation("common");

  const { mutate: mutateCandidate } = useMutation(postCandidateAction);
  const { mutate: mutateCv } = useMutation(postCvAction);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    if (!isOpen) {
      setFile(null);
      setFirstName("");
      setLastName("");
      setMessage("");
      setErrorMessage(null);
    }
  }, [isOpen]);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    const formData = new FormData();
    formData.append("file", file);

    const { error: cvError, payload: cvPayload } = await mutateCv(formData);

    if (cvError) {
      return setErrorMessage(cvPayload.message)
    }

    const { file_path } = cvPayload;

    const {
      error: candidateError,
    } = await mutateCandidate({
      offerId,
      firstName,
      lastName,
      message,
      cvFilePath: file_path,
    });

    if (candidateError) {
      return setErrorMessage(candidateError.message)
    }

    setApplicationSent(true);
    setOpen(false);
  };

  return (
    isOpen && (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-1000 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">{t("application")}</h3>
              </div>
              <div className="relative p-6 px-12 justify-between flex-auto">
                <form>
                  <div className="flex flex-col items-center justify-between space-y-4">
                    <TextInput
                      value={firstName}
                      setValue={setFirstName}
                      placeholder={"Imię"}
                    />
                    <TextInput
                      value={lastName}
                      setValue={setLastName}
                      placeholder={"Nazwisko"}
                    />
                    <div className="h-32">
                      <TextAreaInput
                        value={message}
                        setValue={setMessage}
                        placeholder={"Wiadomość"}
                      />
                    </div>
                    <div className="flex items-center justify-center bg-grey-lighter">
                      <label className="w-40 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                        <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-base leading-normal">
                          {t('select-file')}
                        </span>
                        <input
                            type="file"
                            className="hidden"
                            onChange={onFileChange}
                        />
                      </label>
                    </div>
                    <div>
                      {file?.name && t("selected-file") + file?.name}
                    </div>
                    <div className="text-red-600">
                      {errorMessage}
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="w-36 p-2 uppercase text-center rounded-xl cursor-pointer hover:bg-secondary"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  {t("reject-application")}
                </button>
                <button
                  className="bg-primary w-36 p-2 uppercase text-white text-center rounded-xl cursor-pointer hover:bg-secondary"
                  type="button"
                  onClick={onSubmit}
                >
                  {t("accept-application")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black" />
      </>
    )
  );
};
