import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useMutation } from 'react-fetching-library';
import { postCandidateAction, postCvAction } from '../../../api/actions/candidateActions';
import { useEffect, useState } from 'react';
import Input from '../../ui/forms/Input';
import Textarea from '../../ui/forms/Textarea';
import Card from '../../ui/Card';
import FileInput from '../../ui/forms/FileInput';
import Link from 'next/link';

export const ApplicationModal = ({ isOpen, setOpen }) => {
  const router = useRouter();
  const { offerId } = router.query;
  const { t } = useTranslation('common');

  const { mutate: mutateCandidate } = useMutation(postCandidateAction);
  const { mutate: mutateCv } = useMutation(postCvAction);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [showValidation, setShowValidation] = useState('');
  const [applicationSent, setApplicationSent] = useState('');
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setFile(null);
      setFirstName('');
      setLastName('');
      setMessage('');
      setErrorMessage(null);
      setShowValidation(false);
    }
  }, [isOpen]);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    setShowValidation(true);
    if (!file || !firstName || !lastName) return;
    const formData = new FormData();
    formData.append('file', file);

    const { error: cvError, payload: cvPayload } = await mutateCv(formData);

    if (cvError) {
      return setErrorMessage(cvPayload.message);
    }

    const { file_path } = cvPayload;

    const { error: candidateError } = await mutateCandidate({
      offerId,
      firstName,
      lastName,
      message,
      cvFilePath: file_path,
    });

    if (candidateError) {
      return setErrorMessage(candidateError.message);
    }

    setApplicationSent(true);
    setShowValidation(false);
  };

  return (
    isOpen && (
      <div>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-10000 outline-none focus:outline-none bg-black bg-opacity-50">
          <div className="relative my-6 w-11/12 md:w-1/2">
            <Card>
              {applicationSent ? (
                <div className="bg-green-100  rounded-b  px-4 py-3 shadow-md" role="alert">
                  <div className="flex justify-center">
                    <div className="text-center">
                      <div className="text-xl">{t('applicationSentSuccessfully')}</div>
                      <div className="py-2">{t('applicationSentSuccessfully2')}</div>
                      <Link href="/">
                        <button
                          className="bg-green-600  py-2 px-6 uppercase text-white text-center rounded-xl cursor-pointer hover:bg-secondary"
                          type="button"
                        >
                          {t('goHomepage')}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-2xl font-semibold text-center md:text-left">
                      {t('sendApplication')}
                    </h3>
                  </div>
                  <div className="relative p-6 md:px-12 justify-between flex-auto">
                    <form>
                      <div className="">
                        <div className="flex flex-wrap">
                          <Input
                            value={firstName}
                            setValue={setFirstName}
                            label={t('firstName')}
                            className="my-4 w-full md:w-1/2 px-1"
                            error={showValidation && !firstName && t('required')}
                          />

                          <Input
                            value={lastName}
                            setValue={setLastName}
                            label={t('lastName')}
                            className="my-4 w-full md:w-1/2 px-1"
                            error={showValidation && !lastName && t('required')}
                          />
                        </div>

                        <Textarea value={message} setValue={setMessage} label={t('message')} />
                        <div className="flex justify-center">
                          <FileInput
                            label={file ? file.name : t('selectFile')}
                            onChange={onFileChange}
                            className="py-2"
                            error={showValidation && !file && t('required')}
                          />
                        </div>

                        <div className="text-red-600">{errorMessage}</div>
                      </div>
                    </form>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="w-36 p-2 uppercase text-center rounded-xl cursor-pointer hover:bg-secondary"
                      type="button"
                      onClick={() => setOpen(false)}
                    >
                      {t('reject-application')}
                    </button>
                    <button
                      className="bg-primary w-36 p-2 uppercase text-white text-center rounded-xl cursor-pointer hover:bg-secondary"
                      type="button"
                      onClick={onSubmit}
                    >
                      {t('accept-application')}
                    </button>
                  </div>
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    )
  );
};
