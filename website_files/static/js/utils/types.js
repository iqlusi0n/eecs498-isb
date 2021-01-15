import PropTypes from 'prop-types';

const {
    shape,
    oneOf,
    oneOfType,
    func,
    number,
    string,
    array,
    bool,
    object,
} = PropTypes;

const Location = shape({
    hash: string,
    key: string,
    pathname: string,
    search: string,
    state: oneOfType([array, bool, number, object, string]),
});

const History = shape({
    action: oneOf(['PUSH', 'REPLACE', 'POP']),
    block: func,
    createHref: func,
    go: func,
    goBack: func,
    goForward: func,
    length: number,
    listen: func,
    location: Location,
    push: func,
    replace: func,
});

export {
    Location,
    History
};