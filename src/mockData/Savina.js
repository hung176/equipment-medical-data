export default [
  {
    errorcode: "00.????",
    error: "Device reset triggered: SW error. The error message may be caused by the software, hardware (Control PCB) or by strong electromagnetic interference (e.g. from cell/mobile phones).",
    causePosible: "Device reset triggered: SW error.The error message may be caused by the software, hardware (Control PCB) or by strong electromagnetic interference (e.g. from cell/mobile phones).",
    remedies: "1. Switch device off and on again. If the error does not reoccur, the device can be restored to normal use. \nIf the error occurs several times: 2. Replace the Control PCB."
  },
  {
    errorcode: "01.0000",
    error: "ROM test: Checksum procedure test not OK.",
    causePosible: "ROM test: Checksum procedure test not OK.",
    remedies: "1. Carry out software download using current software. 2. Replace the Control PCB.",
  },
  {
    errorcode: "01.0100",
    error: "ROM test: Checksum procedure test not OK.",
    causePosible: "ROM test: Checksum procedure test not OK.",
    remedies: "1. Carry out software download using current software. 2. Replace the Control PCB.",
  },
  {
    errorcode: "01.0101",
    error: "ROM test: error found during current checksum test.",
    causePosible: "ROM test: error found during current checksum test.",
    remedies: "1. Carry out SW download using current SW.If the error occurs several times: 2. Replace Control PCB.",
  },
  {
    errorcode: "01.0200",
    error: "Data retention: Read error.",
    causePosible: "Data retention: Read error.",
    remedies: "1. Switch device off and on again. If the error does not reoccur, the device can be restored to normal use.If the error occurs several times: 2. Replace Control PCB.",
  },
  {
    errorcode: "01.0201",
    error: "Data retention: Write error.",
    causePosible: "Data retention: Write error.",
    remedies: "1. Switch device off and on again. If the error does not reoccur, the device can be restored to normal use.If the error occurs several times: 2. Replace Control PCB.",
  },
  {
    errorcode: "01.0210",
    error: "Data retention: EEPROM read access error",
    causePosible: "Data retention: EEPROM read access error.",
    remedies: "1. Switch device off and on again. If the error does not reoccur, the device can be restored to normal use.If the error occurs several times: 2. Replace Control PCB.",
  },
  {
    errorcode: "01.0211",
    error: "Data retention: EEPROM write access error",
    causePosible: "Data retention: EEPROM write access error.",
    remedies: "1. Switch device off and on again. If the error does not reoccur, the device can be restored to normal use.If the error occurs several times: 2. Replace Control PCB.",
  },
  {
    errorcode: "01.0300",
    error: "Data retention (EEPROM), checksum error: Data structure EEPROM (Magic).",
    causePosible: "Data retention (EEPROM), checksum error: Data structure EEPROM (Magic).",
    remedies: "1. All data need to be re-entered in the EEPROM (MP) (see error codes 01.0301 to 01.0314) if the error could not be removed.2. Replace the Control PCB.",
  },
  {
    errorcode: "01.0301",
    error: "Data retention (EEPROM), checksum error: Bypass valve.",
    causePosible: "Data retention (EEPROM), checksum error: Bypass valve.",
    remedies: "1. Resetting of calibration class for bypass valve in Service Mode, Test 15.If the error occurs again: 2. Replace Control PCB.",
  },
  {
    errorcode: "01.0302",
    error: "Data retention (EEPROM), checksum error: Expiratory valve.",
    causePosible: "Data retention (EEPROM), checksum error: Expiratory valve.",
    remedies: "1. Resetting of calibration class for expiratory valve in DrägerService Mode Test 15.If the error occurs again: 2. Replace Control PCB.",
  },
  {
    errorcode: "01.0303",
    error: "Data retention (EEPROM), checksum error: Blower start speed (not used for the time being).",
    causePosible: "Data retention (EEPROM), checksum error: Blower start speed (not used for the time being).",
    remedies: "1. Switch device off and on again. If the error does not reoccur, the device can be restored to normal use. If the error occurs several times: 2. Replace Control PCB.",
  },
  {
    errorcode: "01.0304",
    error: "Data retention (EEPROM), checksum error: Fan start speed (not used for the time being).",
    causePosible: "Data retention (EEPROM), checksum error: Fan start speed (not used for the time being).",
    remedies: "1. Switch device off and on again. If the error does not reoccur, the device can be restored to normal use. If the error occurs several times: 2. Replace Control PCB.",
  },
  {
    errorcode: "01.0305",
    error: "Data retention (EEPROM), checksum error: Correction for leak in blower (not used for the time being).",
    causePosible: "Data retention (EEPROM), checksum error: Correction for leak in blower (not used for the time being).",
    remedies: "1. Switch device off and on again. If the error does not reoccur, the device can be restored to normal use.If the error occurs several times: 2. Replace Control PCB.",
  },
  {
    errorcode: "01.0306",
    error: "Data retention (EEPROM), checksum error: Spirolog sensor (not used for the time being).",
    causePosible: "Data retention (EEPROM), checksum error: Spirolog sensor (not used for the time being).",
    remedies: "1. Switch device off and on again. If the error does not reoccur, the device can be restored to normal use.If the error occurs several times: 2. Replace Control PCB.",
  },
  {
    errorcode: "01.0307",
    error: "Data retention (EEPROM), checksum error: Offset of O2 sensor 1.",
    causePosible: "Data retention (EEPROM), checksum error: Offset of O2 sensor 1.",
    remedies: "1. Select DrägerService mode Test 22. - Remove O2 sensors. - Calibrate O2 sensors. (offset calibration of O2 amplifier). - Reinstall O2 sensors. - Switch unit off and on. - Connect device to O2 supply. - Carry out a manual O2 calibration from the Config menu.If the error occurs again: 2. Replace the Control PCB.",
  },
  {
    errorcode: "01.0308",
    error: "Data retention (EEPROM), checksum error: Calibration of O2 sensor 1.",
    causePosible: "Data retention (EEPROM), checksum error: Calibration of O2 sensor 1.",
    remedies: "1. Select DrägerService mode Test 22. - Remove O2 sensors. - Calibrate O2 sensors. (offset calibration of O2 amplifier). - Reinstall O2 sensors. - Switch unit off and on. - Connect device to O2 supply. - Carry out a manual O2 calibration from the Config menu.If the error occurs again: 2. Replace the Control PCB.",
  },
  {
    errorcode: "01.0309",
    error: "Data retention (EEPROM), checksum error: Offset of O2 sensor 2.",
    causePosible: "Data retention (EEPROM), checksum error: Offset of O2 sensor 2.",
    remedies: "1) Select Service mode Test 22. - Remove O2 sensors. - Calibrate O2 sensors. (offset calibration of O2 amplifier). - Reinstall O2 sensors. - Switch unit off and on. - Connect device to O2 supply. - Carry out a manual O2 calibration from the Config menu.If the error occurs again: 2) Replace the Control PCB.",
  },
  {
    errorcode: "01.0310",
    error: "Data retention (EEPROM), checksum error: Calibration  of O2 sensor 2.",
    causePosible: "Data retention (EEPROM), checksum error: Calibration  of O2 sensor 2.",
    remedies: "1) Select Service mode Test 22. - Remove O2 sensors. - Calibrate O2 sensors. (offset calibration of O2 amplifier). - Reinstall O2 sensors. - Switch unit off and on. - Connect device to O2 supply. - Carry out a manual O2 calibration from the Config menu.If the error occurs again: 2) Replace the Control PCB.",
  },
  {
    errorcode: "01.0311",
    error: "Data retention (EEPROM), checksum error: Calibration of O2 supply pressure sensor S5 , ambient pressure sensors S6 and S7.",
    causePosible: "Data retention (EEPROM), checksum error: Calibration of O2 supply pressure sensor S5 , ambient pressure sensors S6 and S7.",
    remedies: "1) Disconnect O2 gas supply. - Unscrew O2 supply from device. - Start DrägerService mode Test 27. - Check pressure sensor as described in the PMS procedure, test step Reference pressure measurement of the three absolute pressure sensors. Calibrate pressure sensors, if necessary. - Measure current atmospheric pressure using a barometer. - Enter measured atmospheric pressure in device under Set ambient pressure.If the error occurs again: 2) Replace the Control PCB.",
  },
  {
    errorcode: "01.0312",
    error: "Data retention (EEPROM), checksum error: Pneumatics variant (not used for the time being).",
    causePosible: "Data retention (EEPROM), checksum error: Pneumatics variant (not used for the time being).",
    remedies: "1) Switch device off and on again. If the error does not reoccur, the device can be restored to normal use.If the error occurs several times: 2) Replace Control PCB."
  },
  {
    errorcode: "01.0313",
    error: "Data retention (EEPROM), checksum error (not used for the time being).",
    causePosible: "Data retention (EEPROM), checksum error (not used for the time being).",
    remedies: "1) Switch device off and on again. If the error does not reoccur, the device can be restored to normal use.If the error occurs several times: 2) Replace Control PCB."
  },
  {
    errorcode: "01.0314",
    error: "The checksum computation of the master processor is faulty.",
    causePosible: "Block in EEPROM of master processor faulty.",
    remedies: "Perform the hose check in Standby. If the error recurs, replace the Control PCB."
  },
  {
    errorcode: "01.0315",
    error: "The checksum computation of the master processor is faulty.",
    causePosible: "Block in EEPROM of master processor faulty.",
    remedies: "Perform the hose check in Standby. If the error recurs, replace the Control PCB."
  },
  {
    errorcode: "01.0316",
    error: "The checksum computation of the master processor is faulty.",
    causePosible: "Block in EEPROM of master processor faulty.",
    remedies: "Set the correct date of manufacture in the service mode. If the error recurs, replace the Control PCB."
  },
  {
    errorcode: "01.0317",
    error: "Monitoring of checksum in real-time clock of master processor.",
    causePosible: "Write/read error in real-time clock of master processor.",
    remedies: "1) Switch device off and on again. If the error does not recur, the device can be restored to normal use.2) Replace real-time clock.3) Replace printed circuit board."
  },
  {
    errorcode: "01.0318",
    error: "Monitoring of checksum in EEPROM of master processor.",
    causePosible: "Write/read error in EEPROM of master processor.",
    remedies: "1) Switch device off and on again. If the error does not recur, the device can be restored to normal use.If the error occurs several times: 2) Replace printed circuit board."
  },
  {
    errorcode: "01.1000",
    error: "Faulty values from data retention: Fan.",
    causePosible: "Faulty values from data retention: Fan.",
    remedies: "1) Switch device off and on again. If the error does not reoccur, the device can be restored to normal use.If the error occurs several times: 2) Replace Control PCB."
  },
  {
    errorcode: "01.1010",
    error: "Faulty values from data retention: Blower.",
    causePosible: "Faulty values from data retention: Blower.",
    remedies: "1) Switch device off and on again. If the error does not reoccur, the device can be restored to normal use.If the error occurs several times: 2) Replace Control PCB."
  },
  {
    errorcode: "01.1020",
    error: "Faulty values from data retention: Bypass valve calibration class.",
    causePosible: "Faulty values from data retention: Bypass valve calibration class.",
    remedies: "1) Resetting of calibration class for bypass valve in Service Mode, Test 15.If the error occurs again: 2) Replace the Control PCB."
  },
  {
    errorcode: "01.1030",
    error: "Faulty values from data retention: Expiratory valve calibration class.",
    causePosible: "Faulty values from data retention: Expiratory valve calibration class.",
    remedies: "1) Resetting of calibration class for bypass valve in Service Mode, Test 15.If the error occurs again: 2) Replace the Control PCB."
  },
  {
    errorcode: "01.1040",
    error: "FFaulty values from data retention: Offset of O2 sensor 1.",
    causePosible: "Faulty values from data retention: Offset of O2 sensor 1.",
    remedies: "1) Select DrägerService mode Test 22. - Remove O2 sensors. - Calibrate O2 sensors. (offset calibration of O2 amplifier) see error code. - Reinstall O2 sensors. - Switch unit off and on. - Connect the device to the O2 supply. - Carry out a manual O2 calibration from the Config menu.If the error occurs again: 2) Replace the Control PCB."
  },
  {
    errorcode: "01.1041",
    error: "Faulty values from data retention: Calibration of O2 sensor 1.",
    causePosible: "Faulty values from data retention: Calibration of O2 sensor 1.",
    remedies: "See error code 01.1040"
  },
  {
    errorcode: "01.1050",
    error: "Faulty values from data retention: Offset of O2 sensor 2.",
    causePosible: "Faulty values from data retention: Offset of O2 sensor 2.",
    remedies: "See error code 01.1040"
  },
  {
    errorcode: "01.1051",
    error: "Faulty values from data retention: Calibration of O2 sensor 2.",
    causePosible: "Faulty values from data retention: Calibration of O2 sensor 2.",
    remedies: "See error code 01.1040"
  },
  {
    errorcode: "01.2000",
    error: "Data structure in EEPROM older than newly installed SW.",
    causePosible: "Data structure in EEPROM older than newly installed SW.",
    remedies: "A more recent software has been installed by a download. This error message disappears when the device is switched off and back on."
  },
  {
    errorcode: "01.2001",
    error: "Data structure in EEPROM newer than installed SW.  Note: The latest software version should be installed.",
    causePosible: "Data structure in EEPROM newer than installed SW.  Note: The latest software version should be installed.",
    remedies: "An older software has been installed by a download. This error message disappears when the device is switched off and back on."
  },
  {
    errorcode: "02.0000",
    error: "Memory test: Error in the internal RAM.  The error message may be caused by the software or hardware (Control PCB) or by strong electromagnetic fields, e.g. mobile phones!",
    causePosible: "Memory test: Error in the internal RAM.  The error message may be caused by the software or hardware (Control PCB) or by strong electromagnetic fields, e.g. mobile phones!",
    remedies: "- Switch device off and on again. If the error does not recur, the device can continue in operation.  If the error recurs repeatedly replace the Control PCB."
  },
  {
    errorcode: "02.0100",
    error: "Memory test: Error in the external RAM.  The error message may be caused by the software or the hardware (Control PCB) or by strong electromagnetic fields, e.g. mobile phones!",
    causePosible: "Memory test: Error in the external RAM.  The error message may be caused by the software or the hardware (Control PCB) or by strong electromagnetic fields, e.g. mobile phones!",
    remedies: "- Switch device off and on again. If the error does not recur, the device can continue in operation.  If the error recurs repeatedly replace the Control PCB."
  },
  {
    errorcode: "03.????",
    error: "Device reset triggered: SW error.  The error message may be caused by the software or the hardware (Control PCB) or by strong electromagnetic fields, e.g. mobile phones!",
    causePosible: "Device reset triggered: SW error.  The error message may be caused by the software or the hardware (Control PCB) or by strong electromagnetic fields, e.g. mobile phones!",
    remedies: "- Switch device off and on again. If the error does not recur, the device can continue in operation.  If the error recurs repeatedly replace the Control PCB."
  },
  {
    errorcode: "04.????",
    error: "Device reset triggered: Software error. The error message may be caused by the software, the hardware",
    causePosible: "Device reset triggered: Software error. The error message may be caused by the software, the hardware",
    remedies: "1) Start the device in service mode, set configuration #33" + "Manufactured after 2016" + "to" + "No also fo"
  },
  {
    errorcode: "05.0000",
    error: "Watchdog is defective.The error message may be caused by the software, hardware (Control PCB) or by strong electromagnetic interference (e.g. from cell/mobile phones).",
    causePosible: "Watchdog is defective.The error message may be caused by the software, hardware (Control PCB) or by strong electromagnetic interference (e.g. from cell/mobile phones).",
    remedies: "1) Switch device off and on again. If the error does not reoccur, the device can be restored to normal use.If error occurs several times 2) Replace the Control PCB."
  },
  {
    errorcode: "06.????",
    error: "Monitoring functions of operating system",
    causePosible: "Timeout, incorrect ID, memory overflow or software error of the operating system.",
    remedies: "1) Switch device off and on again. If the error does not recur, the device can be restored to normal use.2) Replace Control PCB."
  },
]