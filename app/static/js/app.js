function sendRequest(endpoint, data, callback) {
    resetError();

    let request = new XMLHttpRequest();
    request.open("POST", APP_BASE_URL + endpoint);
    request.setRequestHeader("Accept", "application/json")
    request.setRequestHeader("Content-Type", "application/json");

    if (!APP_DEVELOPMENT) {
        request.send(JSON.stringify(data));
    }

    request.onload = function() {
        app.requests.count++;

        if (request.status != 200) {
            showError("Received a " + request.status + " response.");
            return;
        }

        callback(JSON.parse(request.response));
    };

    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.OPENED || request.readyState === XMLHttpRequest.HEADERS_RECEIVED || request.readyState === XMLHttpRequest.LOADING) {
            app.requests.sending = true;
        } else {
            app.requests.sending = false;
        }
    };

    request.onerror = function () {
        showError("An error occurred, please try again.");
    };
}

function updateServices(services) {
    app.data.services = services;
}

function setError(message, show=true) {
    app.error.message = message;
    app.error.show = show;
}

function showError(message) {
    console.error(message);
    setError(message);
}

function resetError () {
    setError("", false);
}

let app = new Vue({
    el: '#app',
    data: {
        departure_times: [],
        error: {
            show: false,
            message: ""
        },
        form: {
            arrival_allowance: 0,
            start_station: "",
            end_station: "",
            departure_time: ""
        },
        requests: {
            count: 0,
            sending: false
        },
        data: {
            services: [],
            meta: {}
        },
        stations: STATIONS,
    },
    created: function () {
        for (let time = 0; time < 24; time++) {
            this.departure_times.push(moment(time, "H"));
        }
    },
    methods: {
        generateTime: function (time) {
            return moment(time, "HHmm").add(1, "h");
        },
        renderTime: function (time) {
            return moment(time, "HHmm").format("HH:mm");
        },
        onSubmit: function () {
            app.data.meta = {
                "departure_station": app.form.start_station,
                "arrival_station": app.form.end_station,
                "from_time": moment(app.form.departure_time, "hh:mm"),
            };

            sendRequest("/api/v1/performance", {
                "departure_station": app.form.start_station,
                "arrival_station": app.form.end_station,
                "from_time": moment(app.form.departure_time, "hh:mm").format("YYYY-MM-DD HH:mm:ss"),
                "arrival_allowance": app.form.arrival_allowance
            }, updateServices);
        }
    }
});
