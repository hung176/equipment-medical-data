export default {
  "00.????": {
    assembly: "Software Masterprozessor",
    description: "Device reset triggered: SW error",
    error: "Device reset triggered: SW error. The error message may be caused by the software, hardware (Control PCB) or by strong electromagnetic interference (e.g. from cell/mobile phones).",
    causePosible: "Device reset triggered: SW error.The error message may be caused by the software, hardware (Control PCB) or by strong electromagnetic interference (e.g. from cell/mobile phones).",
    remedies: "1. Switch device off and on again. If the error does not reoccur, the device can be restored to normal use. If the error occurs several times: 2. Replace the Control PCB."
  },
  "01.0000": {
    assembly: "Festspeicher Masterprozessor",
    description: "ROM test",
    error: "ROM test: Checksum procedure test not OK.",
    causePosible: "ROM test: Checksum procedure test not OK.",
    remedies: "1. Carry out software download using current software. 2. Replace the Control PCB.",
  },
  "01.0100": {
    assembly: "Festspeicher Masterprozessor",
    description: "ROM test",
    error: "ROM test: Checksum procedure test not OK.",
    causePosible: "ROM test: Checksum procedure test not OK.",
    remedies: "1. Carry out software download using current software. 2. Replace the Control PCB.",
  },
  "01.0101": {
    assembly: "Festspeicher Masterprozessor",
    description: "ROM test",
    error: "ROM test: error found during current checksum test.",
    causePosible: "ROM test: error found during current checksum test.",
    remedies: "1. Carry out SW download using current SW.If the error occurs several times: 2. Replace Control PCB.",
  },
  "01.0200": {
    assembly: "Festspeicher Masterprozessor",
    description: "Data retention: Read error",
    error: "Data retention: Read error.",
    causePosible: "Data retention: Read error.",
    remedies: "1. Switch device off and on again. If the error does not reoccur, the device can be restored to normal use.If the error occurs several times: 2. Replace Control PCB.",
  },
  "01.0201": {
    assembly: "Festspeicher Masterprozessor",
    description: "Data retention: Write error",
    error: "Data retention: Write error.",
    causePosible: "Data retention: Write error.",
    remedies: "1. Switch device off and on again. If the error does not reoccur, the device can be restored to normal use.If the error occurs several times: 2. Replace Control PCB.",
  },
  "01.0210": {
    assembly: "Festspeicher Masterprozessor",
    description: "Data retention: EEPROM error",
    error: "Data retention: EEPROM read access error",
    causePosible: "Data retention: EEPROM read access error.",
    remedies: "1. Switch device off and on again. If the error does not reoccur, the device can be restored to normal use.If the error occurs several times: 2. Replace Control PCB.",
  },
  "01.0211": {
    assembly: "Festspeicher Masterprozessor",
    description: "Data retention: EEPROM error",
    error: "Data retention: EEPROM write access error",
    causePosible: "Data retention: EEPROM write access error.",
    remedies: "1. Switch device off and on again. If the error does not reoccur, the device can be restored to normal use.If the error occurs several times: 2. Replace Control PCB.",
  },
  "01.0300": {
    assembly: "Festspeicher Masterprozessor",
    description: "Data retention: Checksum error",
    error: "Data retention (EEPROM), checksum error: Data structure EEPROM (Magic).",
    causePosible: "Data retention (EEPROM), checksum error: Data structure EEPROM (Magic).",
    remedies: "1. All data need to be re-entered in the EEPROM (MP) (see error codes 01.0301 to 01.0314) if the error could not be removed.2. Replace the Control PCB.",
  },
  "01.0301": {
    assembly: "Festspeicher Masterprozessor",
    description: "Data retention: Checksum error",
    error: "Data retention (EEPROM), checksum error: Bypass valve.",
    causePosible: "Data retention (EEPROM), checksum error: Bypass valve.",
    remedies: "1. Resetting of calibration class for bypass valve in Service Mode, Test 15.If the error occurs again: 2. Replace Control PCB.",
  },
}