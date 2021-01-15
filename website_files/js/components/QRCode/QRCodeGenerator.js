import React, {
    PureComponent
} from 'react';
import QRCode from 'qrcode.react';
import PropTypes from 'prop-types';

export const QR_CODE_TYPES = {
    ISB: 'ISB',
    RAVBM: 'RAV',
    UOCAVA: 'UOC',
};

class QRCodeGenerator extends PureComponent {
    static buildQRValue(selections, ballotPrecinctData, qrCodeType, hasWriteIns) {
        const codeVersion = 'A'; // Dictated by QR Code documentation
        const compressedSelections = Object.values(selections)
            .filter(contestSelections => contestSelections.length > 0)
            .reduce((prev, cur) => `${prev}${cur.join('/')}/`, '')
            .slice(0, -1);

        const writeIns = hasWriteIns ? 'Y' : 'N';
        const bpmJurisdiction = `${ballotPrecinctData.jurisdictionId}-${ballotPrecinctData.electionId}`;
        const bpmReportingUnit = ballotPrecinctData.reportingUnit;
        const bpmBallotStyle = ballotPrecinctData.ballotStyleId;
        const bpmParty = ballotPrecinctData.partyId;
        const bpmProvisionality = 'N';
        const bpmType = qrCodeType;
        const bpm = `22AB/${bpmReportingUnit}/${bpmBallotStyle}/${bpmJurisdiction}/${bpmParty}/${bpmProvisionality}/${bpmType}/A`;

        return `VER:${codeVersion}.SEL:${compressedSelections}.WRT:${writeIns}.BPM:${bpm}.`;
    }

    constructor(props) {
        super(props);

        const {
            size,
            selections,
            ballotPrecinctData,
            qrCodeType,
            hasWriteIns
        } = this.props;

        this.state = {
            value: QRCodeGenerator.buildQRValue(selections, ballotPrecinctData, qrCodeType, hasWriteIns),
            size,
            fgColor: '#000000',
            bgColor: '#FFFFFF',
            level: 'Q', // Level is currently dictated by the QR Code documentation
            renderAs: 'svg',
        };
    }

    render() {
        const {
            value,
            size,
            fgColor,
            bgColor,
            level,
            renderAs
        } = this.state;

        return ( <
            QRCode value = {
                value
            }
            size = {
                size
            }
            fgColor = {
                fgColor
            }
            bgColor = {
                bgColor
            }
            level = {
                level
            }
            renderAs = {
                renderAs
            }
            />
        );
    }
}

QRCodeGenerator.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    selections: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    ballotPrecinctData: PropTypes.shape({
        electionId: PropTypes.string.isRequired,
        reportingUnitId: PropTypes.string.isRequired,
        ballotStyleId: PropTypes.string.isRequired,
        partyId: PropTypes.string.isRequired,
    }).isRequired,
    qrCodeType: PropTypes.string.isRequired,
};

QRCodeGenerator.defaultProps = {
    size: 128,
};

export default QRCodeGenerator;