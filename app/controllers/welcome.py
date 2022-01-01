from dataclasses import dataclass

from blacksheep.server.controllers import Controller, get

from app.configuration import config


@dataclass
class IndexModel:
    development: str
    url: str

class Welcome(Controller):
    @get("/")
    def index(self):
        return self.view(model=IndexModel(str(config.show_error_details), config.url))
    
    @get("/about")
    def about(self):
        return self.view()
