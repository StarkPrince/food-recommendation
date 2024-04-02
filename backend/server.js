const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
const decisionTree = require('./model/diabetes.json');
const cors = require('cors');

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// Implement the decision tree logic as a function
function predictDiabetes(patientData, node)
{
    if (node.value) {
        return node.value[0][1] > 0 ? "Diabetes" : "No Diabetes";
    }

    const key = node.name;
    const threshold = node.threshold;
    const decision = patientData[key] <= threshold ? 'left' : 'right';

    return predictDiabetes(patientData, node[decision]);
}

const diabetesrelateddiets = {
    "Diabetes": {
        "diet": "The best diet for diabetic patients is a balanced diet that includes fruits, vegetables, whole grains, lean meats, and low-fat dairy products. Foods that are high in fiber and low in sugar are also recommended. It is important to limit the intake of sugary foods and drinks, as well as foods that are high in saturated fats and cholesterol. Regular exercise is also important for managing diabetes."
    },
    "No Diabetes": {
        "diet": "A healthy diet is important for everyone, including those who do not have diabetes. A balanced diet that includes a variety of fruits, vegetables, whole grains, lean meats, and low-fat dairy products is recommended. It is important to limit the intake of sugary foods and drinks, as well as foods that are high in saturated fats and cholesterol. Regular exercise is also important for maintaining overall health."
    }
}

app.post('/predict/diabetes', (req, res) =>
{
    console.log(req.body);
    const patientData = req.body; // Patient data from the request body
    const prediction = predictDiabetes(patientData, decisionTree);
    if (prediction === "Diabetes") {
        res.json({ prediction, diet: diabetesrelateddiets["Diabetes"].diet });
    }
    else {
        res.json({ prediction, diet: diabetesrelateddiets["No Diabetes"].diet });
    }
});


app.post('/predict/bloodpressure', (req, res) =>
{
    console.log(req.body);
    const patientData = req.body; // Patient data from the request body
    const prediction = predictDiabetes(patientData, decisionTree);
    if (prediction === "Diabetes") {
        res.json({ prediction, diet: diabetesrelateddiets["Diabetes"].diet });
    }
    else {
        res.json({ prediction, diet: diabetesrelateddiets["No Diabetes"].diet });
    }
});


app.listen(port, () =>
{
    console.log(`Server running on port ${port}`);
});
