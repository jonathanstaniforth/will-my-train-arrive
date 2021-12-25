from datetime import timedelta

from aiohttp import ClientSession
from blacksheep.server.controllers import ApiController, post
from blacksheep.server.bindings import FromJSON

from domain.api import PerformanceRequest
from domain.service import ServiceMetricRequest
from infrastructure.hsp import get_service_metrics


days = {
    1: "WEEKDAY",
    2: "WEEKDAY",
    3: "WEEKDAY",
    4: "WEEKDAY",
    5: "WEEKDAY",
    6: "SATURDAY",
    7: "SUNDAY",
}

class Performance(ApiController):

    @classmethod
    def version(cls) -> str:
        return "v1"

    @post()
    async def index(self, input: FromJSON[PerformanceRequest], http_client: ClientSession):
        request = input.value
        
        service_metric_request = ServiceMetricRequest(
            from_loc=request.departure_station,
            to_loc=request.arrival_station,
            from_time=request.from_time.time(),
            to_time=(request.from_time + timedelta(hours=1)).time(),
            from_date=request.from_time.date(),
            to_date=request.from_time.date(),
            days=days[request.from_time.date().isoweekday()]
        )

        service_metrics = await get_service_metrics(http_client, service_metric_request)

        services_performance = [{
            "arrival_time": service["serviceAttributesMetrics"]["gbtt_pta"],
            "departure_time": service["serviceAttributesMetrics"]["gbtt_ptd"],
            "on_time_percentage": service["Metrics"][0]["percent_tolerance"]
        } for service in service_metrics]

        return services_performance