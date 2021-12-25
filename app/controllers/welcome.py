from dataclasses import dataclass

from blacksheep.server.controllers import Controller, get

from app.configuration import config


@dataclass
class IndexModel:
    url: str

class Welcome(Controller):
    @get("/")
    def index(self):
        return self.view(model=IndexModel(config.url))
