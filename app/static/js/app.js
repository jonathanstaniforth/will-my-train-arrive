function sendRequest(endpoint, data, callback) {
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
            console.log("ERROR - response status is " + request.status);
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
}

function updateServices(services) {
    app.services = services;
}

let app = new Vue({
    el: '#app',
    data: {
        departure_times: [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00"
        ],
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
        services: [],
        stations: STATIONS,
    },
    methods: {
        renderTime: function (time) {
            return moment(time, "HHmm").format("DD/MM/YYYY HH:mm");
        },
        onSubmit: function () {
            const REQUEST_DATA = {
                "departure_station": app.form.start_station,
                "arrival_station": app.form.end_station,
                "from_time": moment(app.form.departure_time, "hh:mm").format("YYYY-MM-DD HH:mm:ss"),
                "arrival_allowance": app.form.arrival_allowance
            };

            sendRequest("/api/v1/performance", REQUEST_DATA, updateServices);
        }
    }
});
