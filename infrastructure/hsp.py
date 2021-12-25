from typing import Any

from aiohttp import ClientSession

from domain.service import ServiceMetricRequest


async def get_service_metrics(http_client, request: ServiceMetricRequest) -> Any:
    async with http_client.post(
        "/api/v1/serviceMetrics",
        data=request.json().encode()
    ) as response:
        response_body = await response.json()

    return response_body["Services"]
