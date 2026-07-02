@echo off
setlocal
cd /d "%~dp0"
if exist node_modules\next\dist\bin\next (
  node node_modules\next\dist\bin\next dev --hostname 0.0.0.0
) else (
  echo Next.js dependencies are missing. Run: npm install
  exit /b 1
)
