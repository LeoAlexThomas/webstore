import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const DialogModel = ({
  isModelOpen,
  onModelClose,
  titleSection,
  children,
  additionalButtons,
}) => {
  return (
    <Dialog open={isModelOpen} onClose={onModelClose}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
        <div className="flex min-h-full justify-center text-center items-center p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in my-8 w-full max-w-lg data-closed:scale-95"
          >
            <div className="bg-[#F4F6F7] px-6 pt-5 p-6 pb-4">
              <div className="flex items-start">
                <div className="mt-0 w-full">
                  <DialogTitle className="flex gap-4 items-center">
                    {titleSection}
                  </DialogTitle>
                  <div className="mt-6">{children}</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 py-3 flex justify-end items-center gap-4 px-6">
              {additionalButtons}
              <button
                type="button"
                data-autofocus
                onClick={onModelClose}
                className="inline-flex border border-[#FF4F18] justify-center bg-transparent hover:bg-gray-50 rounded-md px-3 py-2 text-sm font-semibold text-[#FF4F18] inset-ring inset-ring-white/5 mt-0 w-auto cursor-pointer active:outline-none"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogModel;
