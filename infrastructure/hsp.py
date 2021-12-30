from typing import Any

from aiohttp import ClientSession

from domain.service import ServiceMetricRequest


async def get_service_metrics(http_client, request: ServiceMetricRequest) -> Any:
    async with http_client.post(
        "/api/v1/serviceMetrics",
        data=request.json().encode()
    ) as response:
        response_body = await response.json()

    services_performance = []

    for service in response_body["Services"]:
        arrival_allowance = str(request.tolerance[0])

        for metric in service["Metrics"]:
            if metric["tolerance_value"] == arrival_allowance:
                percent_tolerance = metric["percent_tolerance"]

        services_performance.append({
            "arrival_time": service["serviceAttributesMetrics"]["gbtt_pta"],
            "departure_time": service["serviceAttributesMetrics"]["gbtt_ptd"],
            "on_time_percentage": percent_tolerance
        })
        
    return services_performance
