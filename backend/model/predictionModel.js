const tf = require('@tensorflow/tfjs-node');

// Path to the model.json file (adjust as necessary)
const modelPath = './diabetes.json';

// Function to load the pre-trained model (cached for efficiency)
let model;
const loadModel = async () =>
{
    if (!model) {
        model = await tf.loadLayersModel(modelPath);
    }
    return model;
};

// Function to make a prediction
const makePrediction = async (inputData) =>
{
    // Load the model
    const model = await loadModel();
    console.log('Model loaded', inputData);
    const inputTensor = tf.tensor2d([Object.values(inputData)], [1, Object.values(inputData).length]);

    const prediction = model.predict(inputTensor);

    const predictionData = await prediction.dataSync();

    const predictedClass = predictionData[0] > 0.5 ? 1 : 0;

    return predictedClass;
};

module.exports = { makePrediction };
