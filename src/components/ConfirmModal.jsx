import Button from "./Button";

const ConfirmModal = ({ open, onClose, onContinue, loading }) => {
  return (
    <>
      {open ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-[0.38]">
            <div className="w-[472px] bg-white rounded-[18px] overflow-hidden">
              <div className="h-[64px] bg-purple flex justify-between items-center pl-[40px] pr-[24px]">
                <p className="text-white font-medium">Start assessment</p>
                <Button size="sm" variant="italics-blur" onClick={onClose}>
                  Close
                </Button>
              </div>

              <div className="flex flex-col items-center text-center px-4 py-[40px] bg-onion">
                <p className="text-xl leading-[23px] text-purple font-medium mb-4">
                  Proceed to start assessment
                </p>
                <p className="max-w-[335px] text-sm leading-[18px] text-lilac">
                  Kindly keep to the rules of the assessment and sit up, stay in
                  front of your camera/webcam and start your assessment.
                </p>
              </div>

              <div className="flex justify-end items-center h-[81px] px-[40px]">
                <Button
                  disabled={loading}
                  onClick={onContinue}
                  className="w-[140px]"
                >
                  {loading ? "Processing..." : "Proceed"}
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ConfirmModal;
