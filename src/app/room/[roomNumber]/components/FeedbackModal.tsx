import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type IpropType = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FeedbackModal({ isOpen, setOpen }: IpropType) {
  function closeModal() {
    setOpen(false);
  }

  const handleFeedbackSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const [feedback, setFeedback] = React.useState("");

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative "
          onClose={closeModal}
          style={{ zIndex: 99999 }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-primary"
                  >
                    Feedback
                  </Dialog.Title>
                  <form onSubmit={handleFeedbackSubmit}>
                    <div className="mt-2">
                      <div className="text-sm text-zinc-400">
                        Zenzone is a passion project by{" "}
                        <a
                          href="https://github.com/logolica99"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary focus:outline-none"
                        >
                          Jubaer Jami
                        </a>
                        . Any form of feedback is highly appreciated.
                      </div>
                      <textarea
                        required
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="mt-2 w-full resize-none rounded-md border-2 border-zinc-700 bg-transparent p-2 text-sm text-zinc-400 focus:outline-none"
                        rows={5}
                        placeholder="Type your feedback here..."
                      />
                    </div>

                    <div className="mt-4 flex w-full justify-end">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border-2 border-transparent bg-zinc-900 px-6 py-2 text-sm  font-medium  text-primary shadow ring-primary transition duration-150 ease-in-out hover:ring focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
