'use strict';

const TYPES = require('./../consts/types');


/**
 *
 */
class ConfirmationModel {
    /**
     * Initialize confirmation
     */
    constructor(confirmationPayload) {
        Object.assign(
            this,
            this._initConfirmationModel(confirmationPayload)
        );
    }


    /**
    * Getter for the base structure of an confirmation.
    *
    * @return {Object}
    */
    getDefaultConfirmation() {
        return {
            ID: null
        };
    }


    /**
     * Message formatter.
     * Formats the CONFIRMATION by overriding the default values found at DEFAULT.
     *
     * @param {Array} payload - parsed regex array received from the confirmation of a message.
     * @return {Object} message formated with the values extracted from the payload received.
     */
    _initConfirmationModel(payload) {
        if (!Array.isArray(payload)) {return null;} // if not an array.. return.

        let confirmation = this.getDefaultConfirmation();

        confirmation.ID = payload[0];

        return confirmation;
    }


    /**
     * Getter for the type of the message
     */
    getType() {
        return TYPES.CONFIRMATION;
    }
}

module.exports = ConfirmationModel;