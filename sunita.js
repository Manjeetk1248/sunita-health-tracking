 var medicationReminders = [];
        var bloodSugarReadings = [];
        var bloodPressureReadings = [];
        var weightReadings = [];
        var moodReadings = [];

        function addMedication() {
            var medicationName = document.getElementById("medicationName").value;
            var medicationTime = document.getElementById("medicationTime").value;

            if (medicationName && medicationTime) {
                medicationReminders.push({
                    name: medicationName,
                    time: medicationTime
                });

                displayMedicationReminders();
            }

            // Clear input fields
            document.getElementById("medicationName").value = "";
            document.getElementById("medicationTime").value = "";
        }

        function displayMedicationReminders() {
            var tableBody = document.getElementById("medicationTableBody");
            tableBody.innerHTML = "";

            for (var i = 0; i < medicationReminders.length; i++) {
                var row = tableBody.insertRow();
                var nameCell = row.insertCell(0);
                var timeCell = row.insertCell(1);

                nameCell.innerHTML = medicationReminders[i].name;
                timeCell.innerHTML = medicationReminders[i].time;
            }
        }

        function addBloodSugar() {
            var bloodSugar = document.getElementById("bloodSugar").value;
            var bloodSugarDate = document.getElementById("bloodSugarDate").value;

            if (bloodSugar && bloodSugarDate) {
                bloodSugarReadings.push({
                    level: bloodSugar,
                    date: bloodSugarDate
                });

                displayBloodSugarReadings();
            }

            // Clear input fields
            document.getElementById("bloodSugar").value = "";
            document.getElementById("bloodSugarDate").value = "";
        }

        function displayBloodSugarReadings() {
            var tableBody = document.getElementById("bloodSugarTableBody");
            tableBody.innerHTML = "";

            for (var i = 0; i < bloodSugarReadings.length; i++) {
                var row = tableBody.insertRow();
                var levelCell = row.insertCell(0);
                var dateCell = row.insertCell(1);

                levelCell.innerHTML = bloodSugarReadings[i].level;
                dateCell.innerHTML = bloodSugarReadings[i].date;
            }
        }

        function addBloodPressure() {
            var systolic = document.getElementById("systolic").value;
            var diastolic = document.getElementById("diastolic").value;
            var bpDate = document.getElementById("bpDate").value;

            if (systolic && diastolic && bpDate) {
                bloodPressureReadings.push({
                    systolic: systolic,
                    diastolic: diastolic,
                    date: bpDate
                });

                displayBloodPressureReadings();
            }

            // Clear input fields
            document.getElementById("systolic").value = "";
            document.getElementById("diastolic").value = "";
            document.getElementById("bpDate").value = "";
        }

        function displayBloodPressureReadings() {
            var tableBody = document.getElementById("bloodPressureTableBody");
            tableBody.innerHTML = "";

            for (var i = 0; i < bloodPressureReadings.length; i++) {
                var row = tableBody.insertRow();
                var systolicCell = row.insertCell(0);
                var diastolicCell = row.insertCell(1);
                var dateCell = row.insertCell(2);

                systolicCell.innerHTML = bloodPressureReadings[i].systolic;
                diastolicCell.innerHTML = bloodPressureReadings[i].diastolic;
                dateCell.innerHTML = bloodPressureReadings[i].date;
            }
        }

        function addWeight() {
            var weight = document.getElementById("weight").value;
            var weightDate = document.getElementById("weightDate").value;

            if (weight && weightDate) {
                weightReadings.push({
                    weight: weight,
                    date: weightDate
                });

                displayWeightReadings();
            }

            // Clear input fields
            document.getElementById("weight").value = "";
            document.getElementById("weightDate").value = "";
        }

        function displayWeightReadings() {
            var tableBody = document.getElementById("weightTableBody");
            tableBody.innerHTML = "";

            for (var i = 0; i < weightReadings.length; i++) {
                var row = tableBody.insertRow();
                var weightCell = row.insertCell(0);
                var dateCell = row.insertCell(1);

                weightCell.innerHTML = weightReadings[i].weight;
                dateCell.innerHTML = weightReadings[i].date;
            }
        }

        function addMood() {
            var mood = document.getElementById("mood").value;
            var moodDate = document.getElementById("moodDate").value;

            if (mood && moodDate) {
                moodReadings.push({
                    mood: mood,
                    date: moodDate
                });

                displayMoodReadings();
            }

            // Clear input fields
            document.getElementById("mood").value = "";
            document.getElementById("moodDate").value = "";
        }

        function displayMoodReadings() {
            var tableBody = document.getElementById("moodTableBody");
            tableBody.innerHTML = "";

            for (var i = 0; i < moodReadings.length; i++) {
                var row = tableBody.insertRow();
                var moodCell = row.insertCell(0);
                var dateCell = row.insertCell(1);

                moodCell.innerHTML = moodReadings[i].mood;
                dateCell.innerHTML = moodReadings[i].date;
            }
        }

        function sendMessage() {
            var providerName = document.getElementById("providerName").value;
            var messageContent = document.getElementById("messageContent").value;

            if (providerName && messageContent) {
                // You can implement the logic to send the message to the healthcare provider
                // or perform other necessary actions here.
                console.log("Provider Name:", providerName);
                console.log("Message:", messageContent);
            }

            // Clear input fields
            document.getElementById("providerName").value = "";
            document.getElementById("messageContent").value = "";
        }