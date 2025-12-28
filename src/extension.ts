import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('LazyDeveloperHelper activated 🗿');

  let disposable = vscode.commands.registerCommand('ldh-vsc.helloWorld', () => {
        vscode.window.showInformationMessage('LazyDeveloperHelper actived, finnaly xD');
  });

  context.subscriptions.push(disposable);
}
