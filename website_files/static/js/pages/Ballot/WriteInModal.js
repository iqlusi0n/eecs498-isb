import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Modal from '../../components/Modal/Modal';
import TitleCopy from '../../components/Copy/TitleCopy';
import NavButton from '../../components/NavButton';
import TextInput from '../../components/Inputs/TextInput';

/** 
 * ISB Client WriteInModal Page Component 
 * @module WriteInModal 
 * @exports module:WriteInModal */
export default class WriteInModal extends Component {
    constructor(props) {
        super(props);

        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate(event) {
        event.preventDefault();
        const {
            updateWriteInValues
        } = this.props;
        const writeInValue = get(event, 'target.value', null);
        updateWriteInValues(writeInValue);
    }

    render() {
        const {
            writeInValue,
            onClear,
            onSave,
            onClose,
            copy
        } = this.props;

        return ( <
            Modal handleClose = {
                onClose
            }
            title = { < TitleCopy text = {
                    copy.ts
                }
                tabIndex = {
                    0
                }
                />}
                body = {
                    ( <
                        TextInput tabIndex = {
                            0
                        }
                        id = 'writeInValue'
                        label = {
                            copy.tt
                        }
                        value = {
                            writeInValue
                        }
                        onChange = {
                            this.onUpdate
                        }
                        maxLength = {
                            28
                        }
                        />
                    )
                }
                cancelButton = {
                    ( <
                        NavButton colorOption = 'white'
                        text = {
                            copy.tu
                        }
                        onClick = {
                            () => {
                                onClear();
                                onClose();
                            }
                        }
                        />
                    )
                }
                continueButton = {
                    ( <
                        NavButton colorOption = 'yellow'
                        text = {
                            copy.tv
                        }
                        onClick = {
                            (e) => {
                                onSave();
                                onClose(e, true);
                            }
                        }
                        />
                    )
                }
                />
            );
        }
    }

    WriteInModal.propTypes = {
        writeInValue: PropTypes.string,
        onClear: PropTypes.func,
        onSave: PropTypes.func,
        onClose: PropTypes.func,
    };

    WriteInModal.defaultProps = {
        writeInValue: '',
        onClose: () => null,
        onSave: () => null,
        onClear: () => null,
    };