import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import {
  LampChargeIcon,
  Microphoneicon,
  MonitorRecordericon,
  WifiIcon,
} from "../assets/svgs";
import CheckItem from "./CheckItem";
import Button from "./Button";
import ConfirmModal from "./ConfirmModal";

const ObjectDetection = () => {
  const webcamRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [processing, setProcessing] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    setOpenModal(true);
  }, [webcamRef]);

  const handleReset = () => {
    setImgSrc(null);
    setPredictions([]);
  };

  const handlePredict = async () => {
    setProcessing(true);
    const model = await cocoSsd.load();

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    let image = new Image();

    image.onload = function () {
      ctx.drawImage(image, 0, 0);
    };
    image.src = imgSrc;

    model
      .detect(image)
      .then((predictions) => {
        setPredictions(predictions);
        setOpenModal(false);
        setProcessing(false);
      })

      .catch((err) => {
        setProcessing(false);
      });
  };

  return (
    <div>
      <canvas id="canvas" className="hidden" />
      <div className="md:flex gap-[40px] mb-[40px]">
        {imgSrc ? (
          <div
            className={`relative h-[168px] md:w-[264px] overflow-hidden rounded-[10px] border border-2 ${
              predictions.length > 0 ? "border-red" : "border-purple"
            }`}
          >
            <img src={imgSrc} alt="webcam" />
            {predictions.length > 0 && (
              <div className="absolute top-0 z-10 bg-red bg-opacity-[0.45] rounded-[5px] h-[24px] flex items-center m-1 px-4">
                {predictions.map((prediction) => (
                  <p className="text-white font-medium text-[10px]">
                    &nbsp;
                    <span className="capitalize">{prediction.class}</span>{" "}
                    detected
                  </p>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="relative h-[168px] md:w-[264px] overflow-hidden rounded-[10px] border border-2 border-purple">
            <Webcam height={600} width={600} ref={webcamRef} />
          </div>
        )}

        <div className="flex flex-wrap h-full md:max-w-[250px] mt-4 md:mt-[4px] gap-y-[16px] gap-x-[20px]">
          <CheckItem
            title="Webcam"
            status="good"
            icon={<MonitorRecordericon />}
          />
          <CheckItem title="Internet Speed" status="poor" icon={<WifiIcon />} />
          <CheckItem
            title="Gadget mic"
            status="good"
            icon={<Microphoneicon />}
          />
          <CheckItem title="Lighting" status="fair" icon={<LampChargeIcon />} />
        </div>
      </div>

      <ConfirmModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onContinue={handlePredict}
        loading={processing}
      />

      <Button onClick={imgSrc ? handleReset : capture}>
        {imgSrc ? "Analyse new image" : "Take picture and continue"}
      </Button>
    </div>
  );
};

export default ObjectDetection;
