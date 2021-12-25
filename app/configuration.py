from configuration.common import ConfigurationBuilder
from configuration.env import EnvironmentVariables
from configuration.yaml import YAMLFile

builder = ConfigurationBuilder()

builder.add_source(YAMLFile("settings.yaml"))
builder.add_source(YAMLFile(f"settings.dev.yaml", optional=True))
builder.add_source(EnvironmentVariables(prefix="APP_"))

config = builder.build()
