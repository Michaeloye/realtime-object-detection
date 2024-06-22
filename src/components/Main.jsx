'use client';

import { useEffect, useRef, useState } from 'react';
import MonitorIcon from '~/components/icons/MonitorIcon';
import CheckIndicator from '~/components/CheckIndicator';
import CheckGoodIndicator from '~/components/CheckGoodIndicator';
import CheckNotGoodIndicator from '~/components/CheckNotGoodIndicator';
import WifiIcon from '~/components/icons/WifiIcon';
import LightIcon from '~/components/icons/LightIcon';
import MicIcon from '~/components/icons/MicIcon';
import CheckIcon from '~/components/icons/CheckIcon';
import FailedCheckIcon from '~/components/icons/FailedCheckIcon';
import LightSemiCheckIcon from '~/components/icons/LightSemiCheckIcon';
import StartAssessmentModal from '~/components/modals/StartAssessmentModal';
import PermissionRequiredModal from '~/components/modals/PermissionRequiredModal';
import * as tf from '@tensorflow/tfjs';
import * as cocossd from '@tensorflow-models/coco-ssd';
import Webcam from 'react-webcam';
import { checkMicrophone, detect, isMicAndWebcamAvailable, testInternetSpeed } from '~/utils';
import Loader from '~/components/Loader';
import {
  INTERNET_SPEED_LOWER_LIMIT,
  INTERNET_SPEED_UPPER_LIMIT,
  LIGHTING_LOWER_LIMIT,
  LIGHTING_UPPER_LIMIT,
  MIC_LOWER_LIMIT,
  MIC_UPPER_LIMIT,
} from '~/constants';

const Main = () => {
  const webcamRef = useRef(null);

  const [NET, setNET] = useState(null);
  const [loading, setLoading] = useState(true);

  const [countdown, setCountdown] = useState(5);
  const [isCountdown, setIsCountdown] = useState(false);

  const [webcamCheck, setWebcamCheck] = useState(false);
  const [lightCheckValue, setLightCheckValue] = useState(0);
  const [micCheckValue, setMicCheckValue] = useState(0);
  const [internetSpeed, setInternetSpeed] = useState(0);

  const [checksCompleted, setChecksCompleted] = useState(false);
  const [objectDetected, setObjectDetected] = useState('');

  const [allChecksPassed, setAllChecksPassed] = useState(false);

  const [showStartAssessmentModal, setShowStartAssessmentModal] = useState(false);
  const [showPermissionRequiredModal, setShowPermissionRequiredModal] = useState(false);

  const loadCoCo = async () => {
    setLoading(true);
    const net = await cocossd.load();
    setNET(net);
    console.log('Coco model loaded.');
    setLoading(false);
  };

  const runCoco = async () => {
    setIsCountdown(true);
    let detectionDetails = null;

    const intervalId = setInterval(async () => {
      detectionDetails = await detect(webcamRef, NET);
      setCountdown((prev) => prev - 1);

      // if a person is not detected in the webcam during the countdown, stop the countdown
      if (detectionDetails.class !== 'person') {
        clearTimeout(timeoutId); // Clear the timeout if the condition is met
        cleanup(intervalId);

        setObjectDetected(detectionDetails.class);
      }
    }, 1000);

    // Stop the interval after 5 seconds
    const timeoutId = setTimeout(() => {
      cleanup(intervalId);
      setWebcamCheck(true);
      setLightCheckValue(Number(detectionDetails.score.toFixed(2)));
    }, 5000);
  };

  const cleanup = (intervalId) => {
    clearInterval(intervalId);
    setIsCountdown(false);
    // reset countdown
    setCountdown(5);
    setChecksCompleted(true);
  };

  const startDetection = async () => {
    resetChecks();
    const isAvailable = await isMicAndWebcamAvailable();

    if (isAvailable) {
      runCoco();
      await checkMicrophone(setMicCheckValue);
      await testInternetSpeed(setInternetSpeed);
    } else {
      setShowPermissionRequiredModal(true);
    }
  };

  const resetChecks = () => {
    setWebcamCheck(false);
    setLightCheckValue(0);
    setMicCheckValue(0);
    setInternetSpeed(0);
    setChecksCompleted(false);
    setObjectDetected('');
    setAllChecksPassed(false);
  };

  const handleShowStartAssessmentModal = () => {
    if (
      webcamCheck &&
      lightCheckValue >= LIGHTING_LOWER_LIMIT &&
      micCheckValue >= MIC_LOWER_LIMIT &&
      internetSpeed >= INTERNET_SPEED_LOWER_LIMIT
    ) {
      setAllChecksPassed(true);
      setShowStartAssessmentModal(true);
    }
  };

  useEffect(() => {
    loadCoCo();
  }, []);

  useEffect(() => {
    handleShowStartAssessmentModal();
  }, [webcamCheck, lightCheckValue, micCheckValue, internetSpeed]);

  return (
    <>
      <main className="pt-7 pb-20 px-7 md:px-[12%]">
        <div className="bg-white w-full rounded-2xl p-10">
          <h1 className="text-xl font-medium">System check</h1>
          <p className="mt-2 text-[#4a4a68] text-sm leading-[22px]">
            We utilize your camera image to ensure fairness for all participants, and we also employ both your camera
            and microphone for a video questions where you will be prompted to record a response using your camera or
            webcam, so it&lsquo;s essential to verify that your camera and microphone are functioning correctly and that
            you have a stable internet connection. To do this, please position yourself in front of your camera,
            ensuring that your entire face is clearly visible on the screen. This includes your forehead, eyes, ears,
            nose, and lips. You can initiate a 5-second recording of yourself by clicking the button below.
          </p>

          <div className="mt-5 flex flex-col md:flex-row gap-4">
            <div
              className={`relative bg-gray-100 flex justify-center items-center w-60 md:w-96 aspect-[16/9] rounded-xl overflow-hidden ${
                checksCompleted && !webcamCheck ? ' border-2 border-[#FF0000]' : 'border border-[#755ae2]'
              }`}
            >
              {loading && <Loader className="w-8 h-8 fill-[#755ae2]" />}
              {checksCompleted && objectDetected && (
                <p className="absolute top-1 left-1 py-1 px-2 text-sm rounded-md text-white bg-[#FF0000]/45 font-semibold z-20">
                  <span className="capitalize">{objectDetected}</span> detected
                </p>
              )}
              <Webcam
                ref={webcamRef}
                muted={true}
                style={{
                  position: 'absolute',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  left: 0,
                  right: 0,
                  textAlign: 'center',
                  zIndex: 9,
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>

            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-3">
                {/* WEBCAM */}
                {checksCompleted ? (
                  webcamCheck ? (
                    <CheckGoodIndicator icon={CheckIcon} title="Webcam" topIcon={MonitorIcon} />
                  ) : (
                    <CheckNotGoodIndicator icon={FailedCheckIcon} title="Webcam" topIcon={MonitorIcon} />
                  )
                ) : (
                  <CheckIndicator icon={MonitorIcon} title="Webcam" />
                )}

                {/* GADGET MIC */}
                {checksCompleted ? (
                  micCheckValue >= MIC_UPPER_LIMIT ? (
                    <CheckGoodIndicator icon={CheckIcon} title="Gadget mic" topIcon={MicIcon} />
                  ) : micCheckValue >= MIC_LOWER_LIMIT ? (
                    <CheckNotGoodIndicator icon={LightSemiCheckIcon} title="Gadget mic" topIcon={MicIcon} />
                  ) : (
                    <CheckNotGoodIndicator icon={FailedCheckIcon} title="Gadget mic" topIcon={MicIcon} />
                  )
                ) : (
                  <CheckIndicator icon={MicIcon} title="Gadget mic" />
                )}
              </div>

              <div className="flex flex-col gap-4">
                {/* INTERNET SPEED */}
                {checksCompleted ? (
                  internetSpeed >= INTERNET_SPEED_UPPER_LIMIT ? (
                    <CheckGoodIndicator icon={CheckIcon} title="Speed" topIcon={WifiIcon} />
                  ) : internetSpeed >= INTERNET_SPEED_LOWER_LIMIT ? (
                    <CheckNotGoodIndicator icon={LightSemiCheckIcon} title="Speed" topIcon={WifiIcon} />
                  ) : (
                    <CheckNotGoodIndicator icon={FailedCheckIcon} title="Speed" topIcon={WifiIcon} />
                  )
                ) : (
                  <CheckIndicator icon={WifiIcon} title="Speed" />
                )}

                {/* LIGHTING */}
                {checksCompleted ? (
                  lightCheckValue >= LIGHTING_UPPER_LIMIT ? (
                    <CheckGoodIndicator icon={CheckIcon} title="Lighting" topIcon={LightIcon} />
                  ) : lightCheckValue >= LIGHTING_LOWER_LIMIT ? (
                    <CheckNotGoodIndicator icon={LightSemiCheckIcon} title="Lighting" topIcon={LightIcon} />
                  ) : (
                    <CheckNotGoodIndicator icon={FailedCheckIcon} title="Lighting" topIcon={LightIcon} />
                  )
                ) : (
                  <CheckIndicator icon={LightIcon} title="Lighting" />
                )}
              </div>
            </div>
          </div>

          <button
            className="flex mx-auto md:mx-0 justify-center items-center gap-2 p-3 bg-[#755ae2] text-white rounded-xl mt-7 min-w-[220px] disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isCountdown || loading}
            onClick={startDetection}
          >
            {isCountdown ? countdown : 'Take picture and continue'}
            {loading && <Loader className="w-4 h-4 fill-white" />}
          </button>

          {checksCompleted && !allChecksPassed && (
            <p className="text-[#ff5f56] text-sm mt-2">
              Some checks failed to pass. Please ensure that your webcam, microphone, internet speed, and lighting are
              in good condition.
            </p>
          )}
        </div>
      </main>

      {showStartAssessmentModal && (
        <StartAssessmentModal
          close={() => setShowStartAssessmentModal(false)}
          proceed={() => setShowStartAssessmentModal(false)}
        />
      )}
      {showPermissionRequiredModal && <PermissionRequiredModal close={() => setShowPermissionRequiredModal(false)} />}
    </>
  );
};

export default Main;
