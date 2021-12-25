from base64 import standard_b64encode

from aiohttp import ClientSession
from jinja2 import PackageLoader
from blacksheep.server import Application
from blacksheep.server.templating import use_templates

from app import controllers
from app.configuration import config

app = Application(show_error_details=config.show_error_details)

use_templates(app, PackageLoader("app", "views"))

async def configure_http_client(app):
    http_client = ClientSession(config.hsp_api_url, headers={
        "Accept": "application/json",
        "Authorization": "Basic " + standard_b64encode(f"{config.hsp_api_username}:{config.hsp_api_password}".encode()).decode(),
        "Content-Type": "application/json"
    })

    app.services.add_instance(http_client)

async def dispose_http_client(app):
    http_client = app.services.get(ClientSession)
    await http_client.close()

app.on_start += configure_http_client
app.on_stop += dispose_http_client

app.serve_files("app/static")
