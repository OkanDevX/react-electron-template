interface Window {
  electron: {
    sendMessage: (message: string) => Promise<any>;
    divideOperation: (data: {
      number1: number;
      number2: number;
    }) => Promise<any>;
    selectFile: () => Promise<string>;
    delayTest: (delay: number) => Promise<any>;
  };
}
