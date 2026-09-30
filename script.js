function medicineTaken() {
    document.getElementById("medicineStatus").innerHTML =
        "✅ Medicine marked as taken!";
}

function healthCheck() {
    alert("Health Status: Normal\nBP: 120/80\nSugar: 105 mg/dL");
}

function appointment() {
    alert("Doctor Appointment:\n25 September\n11:00 AM");
}

function showEmergency() {
    alert("🚨 EMERGENCY ALERT\nPlease contact your emergency contact or doctor.");
}

function speakWelcome() {
    const message =
        "Hello! I am your AI Elderly Care Assistant. How can I help you today?";

    document.getElementById("voiceOutput").innerText = message;

    if ("speechSynthesis" in window) {
        const speech = new SpeechSynthesisUtterance(message);
        speech.lang = "en-IN";
        window.speechSynthesis.speak(speech);
    }
}

function startVoice() {

    const output = document.getElementById("voiceOutput");

    if (!("webkitSpeechRecognition" in window)) {
        output.innerText =
            "Voice recognition is not supported in this browser.";
        return;
    }

    const recognition = new webkitSpeechRecognition();

    recognition.lang = "en-IN";
    recognition.start();

    output.innerText = "🎤 Listening...";

    recognition.onresult = function(event) {

        const text = event.results[0][0].transcript;

        output.innerText = "You said: " + text;

        if (text.toLowerCase().includes("medicine")) {
            speak("Your next medicine reminder is at 10 AM.");
        } 
        else if (text.toLowerCase().includes("doctor")) {
            speak("Your next doctor appointment is on 25 September at 11 AM.");
        } 
        else if (text.toLowerCase().includes("weather")) {
            speak("Today's temperature is 28 degrees Celsius.");
        } 
        else {
            speak("I am here to help you.");
        }
    };
}

function speak(message) {

    if ("speechSynthesis" in window) {
        const speech = new SpeechSynthesisUtterance(message);
        speech.lang = "en-IN";
        window.speechSynthesis.speak(speech);
    }
}