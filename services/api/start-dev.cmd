@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>&1
if %ERRORLEVEL% EQU 0 (
  py -3 -m uvicorn app.main:app --host 127.0.0.1 --port 8000
) else (
  python -m uvicorn app.main:app --host 127.0.0.1 --port 8000
)
