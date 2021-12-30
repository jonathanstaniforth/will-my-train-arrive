"""Domain models relating to the HSP API."""
from datetime import date, time
from enum import Enum

from pydantic import BaseModel

from domain.api import PerformanceRequest


class ServiceMetricRequest(BaseModel):
    """A HSP API service metric request."""
    from_loc: str
    to_loc: str
    from_time: time
    to_time: time
    from_date: date
    to_date: date
    days: str
    tolerance: list[int]

    class Config:
        json_encoders = {
            date: lambda value: value.strftime("%Y-%m-%d"),
            time: lambda value: value.strftime("%H%M"),
        }
