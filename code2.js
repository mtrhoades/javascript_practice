class ScannerSuperClass {
    constructor(color, dpi, outputformat) {
      this.color = color;
      this.dpi = dpi;
      this.outputformat = outputformat;
      this.scannedDocuments = []
    }
  
scanDocuments(model, width, height,) {
    const scan = {
        model,
        width,
        height,
    }
    this.scannedDocuments.push(scan)
    }

    deleteScannedDocuments() {
        this.scannedDocuments = []
    }

    getScannedDocuments() {
        return this.scannedDocuments
    }

}

  const scanner = new ScannerSuperClass('black', '5px', 'pdf');

  scanner.scanDocuments('contract', '8inches', '4inches');
  console.log(scanner.getScannedDocuments());

  scanner.deleteScannedDocuments();
  console.log(scanner.getScannedDocuments());