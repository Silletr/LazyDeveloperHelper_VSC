FOR FUTURE USING:
```typescript
// Work with Files/Projects 
const workspace = vscode.workspace.workspaceFolders?.[0];
if (workspace) {
  const filePath = vscode.Uri.joinPath(workspace.uri, 'path/to/file');
}

// Execute command in terminal (but first open it)
const terminal = vscode.window.createTerminal('LazyDev');
terminal.sendText('pip install numpy');
terminal.show();

// child_process for Python scripts 
import { spawn } from 'child_process';
const child = spawn('python3', ['path/to/installer.py', 'numpy']);
child.stdout.on('data', (data) => console.log(data.toString()));
```