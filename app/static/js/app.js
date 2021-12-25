let app = new Vue({
    el: '#app',
    data: {
        selected: "",
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
        services: [],
        loading: false,
    },
    mounted: function () {
        const start_station_element = document.getElementById("startStation");
        const end_station_element = document.getElementById("endStation");

        for (const station of crs_codes) {
            let start_option_element = document.createElement("option", {value: station.station_name});
            start_option_element.setAttribute("value", station.station_name);

            let end_option_element = document.createElement("option", {value: station.station_name});
            end_option_element.setAttribute("value", station.station_name);

            start_station_element.appendChild(start_option_element);
            end_station_element.appendChild(end_option_element);
        }
    },
    methods: {
        renderTime: function (time) {
            return moment(time, "HHmm").format("DD/MM/YYYY HH:mm");
        },
        onSubmit: function (event) {
            let form = document.forms.trainService;

            let start_station_crs = convert_station_name_to_crs(form.elements.startStation.value);
            let end_station_crs = convert_station_name_to_crs(form.elements.endStation.value);
            let from_time = moment(form.elements.departureTime.value, "hh:mm").format("YYYY-MM-DD HH:mm:ss");

            let request_data = {
                "departure_station": start_station_crs,
                "arrival_station": end_station_crs,
                "from_time": from_time
            };

            let request = new XMLHttpRequest();
            request.open("POST", "{{ url }}/api/v1/performance");
            request.setRequestHeader('Content-Type', 'application/json');

            app.loading = true;

            request.send(JSON.stringify(request_data));

            request.onload = function() {
                if (request.status != 200) {
                    console.log("ERROR - response status is " + request.status);
                    return;
                }

                app.services = JSON.parse(request.response);
            };

            request.onreadystatechange = function () {
                if (request.readyState === XMLHttpRequest.DONE) {
                    app.loading = false;
                } else if (request.readyState === XMLHttpRequest.HEADERS_RECEIVED || request.readyState === XMLHttpRequest.LOADING) {
                    app.loading = true;
                }
            }
        }
    }
});

function convert_station_name_to_crs(station_name) {
    for (const station of crs_codes) {
        if (station.station_name == station_name) {
            return station.crs_code;
        }
    }

    console.log("ERROR - Unknown station " + station_name);
}
