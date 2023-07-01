import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "vsext" is now active!');

  let showMessage = vscode.commands.registerCommand("vsext.showMessage", () => {
    vscode.window.showInformationMessage("new modified message");
  });

  let showTime = vscode.commands.registerCommand("vsext.showTime", () => {
    const date = new Date().toISOString();
    vscode.window.showErrorMessage(date);
  });

  context.subscriptions.push(showMessage);
  context.subscriptions.push(showTime);
}

export function deactivate() {}
