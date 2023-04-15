.DEFAULT_GOAL := build

init:
	@echo "Initialising the project"
	@npm ci

test:
	@echo "Testing..."
	@npm run test-ci

clean:
	@echo "🛁 Cleaning..."
	@npm run clean

build: clean check
	@echo "🏗 Building..."
	@npm run build

check: --pre_check test
	@echo "✅"

publish: build
	@echo "📦 Publish package..."
	@./.scripts/publish.sh

--pre_check:
	@npm run clean
	@npm run lint
	@npm run type-check
