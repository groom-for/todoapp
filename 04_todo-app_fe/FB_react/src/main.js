const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // 1. 새로운 브라우저 창 생성
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // 보안을 위해 Node.js 기능을 비활성화 (필요하다면 나중에 설정 가능)
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  // 2. 중요! 빌드된 React 앱의 index.html 파일 로드
  // React 프로젝트를 빌드하면 생성되는 'build' 폴더 안의 index.html을 지정합니다.
  mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));

  // 개발자 도구 열기 (옵션)
  // mainWindow.webContents.openDevTools(); 
}

// 3. Electron 앱이 준비되면 창 생성 함수 호출
app.whenReady().then(createWindow);

// 4. 모든 창이 닫히면 앱 종료 (macOS 제외)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// 5. macOS에서 독(Dock) 아이콘 클릭 시 창 다시 열기
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});