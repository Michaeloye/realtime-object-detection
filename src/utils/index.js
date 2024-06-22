export const detect = async (webcamRef, net) => {
  if (
    typeof webcamRef.current !== 'undefined' &&
    webcamRef.current !== null &&
    webcamRef.current.video.readyState === 4
  ) {
    // Get Video Properties
    const video = webcamRef.current.video;
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set video width
    webcamRef.current.video.width = videoWidth;
    webcamRef.current.video.height = videoHeight;

    const obj = await net.detect(video);
    console.log(obj);

    const detected = handlePersonDetection(obj);
    return detected;
  }
};

const handlePersonDetection = (obj) => {
  if (obj.length === 0) {
    return {
      bbox: [0, 0, 0, 0],
      class: 'no face',
      score: 0,
    };
  }

  const person = obj.find((item) => item.class === 'person');
  const objectSeen = obj.find((item) => item.class !== 'person');

  if (person) {
    return person;
  } else {
    return objectSeen;
  }
};

export const isMicAndWebcamAvailable = async () => {
  return await navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((_) => {
      return true;
    })
    .catch((err) => {
      return false;
    });
};

export const checkMicrophone = async (setMicCheck) => {
  await navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);
      const scriptProcessor = audioContext.createScriptProcessor(256, 1, 1);

      analyser.smoothingTimeConstant = 0.8;
      analyser.fftSize = 1024;

      microphone.connect(analyser);
      analyser.connect(scriptProcessor);
      scriptProcessor.connect(audioContext.destination);

      let output = 0;

      scriptProcessor.onaudioprocess = function () {
        const array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        const values = array.reduce((a, b) => a + b, 0);
        const average = values / array.length;

        // take max value of the average
        output = Math.max(output, average);
        setMicCheck(output);
      };

      // Stop the microphone check after 5 seconds
      setTimeout(() => {
        stream.getTracks().forEach((track) => track.stop());
        scriptProcessor.disconnect();
        analyser.disconnect();
        microphone.disconnect();
        audioContext.close();
      }, 5000);
    })
    .catch((err) => {
      console.error('The following error occurred: ' + err);
    });
};

export const testInternetSpeed = async () => {
  const imageUrl = '/internet-speed-image.jpg';
  const fileSizeInBytes = 1_200_663;
  const cacheBuster = `?nocache=${Date.now()}`;

  const startTime = Date.now();

  return fetch(imageUrl + cacheBuster)
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      const endTime = Date.now();
      const durationInSeconds = (endTime - startTime) / 1000;
      const bitsLoaded = fileSizeInBytes * 8;
      const speedInBps = bitsLoaded / durationInSeconds;
      const speedInKbps = speedInBps / 1024;
      const speedInMbps = speedInKbps / 1024;

      return speedInMbps.toFixed(2);
    })
    .catch((error) => {
      console.error('Error during speed test:', error);
      return 0;
    });
};
