@ECHO OFF
ECHO ==========================
ECHO Downloading Packages
ECHO ==========================
start cmd /k npm install
ECHO ==========================
@ECHO Taking a 10 Second Break for packages to download
ECHO ==========================
timeout /T 10 /nobreak
ECHO ==========================
@ECHO Starting Leaver Tool
ECHO ==========================
start cmd /k node .
exit /s
