.DEFAULT_GOAL := build

init:
	@echo "Initialising the project"
	@npm ci

build:
	@echo "🏗 Building..."
	@npm run build

publish: build
	@echo "📦 Publish package..."
	@./.scripts/publish.sh
