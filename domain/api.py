"""Domain models relating to the API."""
from datetime import datetime

from pydantic import BaseModel


class PerformanceRequest(BaseModel):
    """A request for the performance of a service."""
    arrival_allowance: int
    """The number of minutes a service must arrive within from the set arrival time."""
    departure_station: str
    """The starting station of the service."""
    arrival_station: str
    """The end station of the service."""
    from_time: datetime
    """The beginning of the time range for the start of the service."""
