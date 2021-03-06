import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import { forbidExtraProps } from 'airbnb-prop-types';
import moment from 'moment';
import omit from 'lodash/omit';

import 'react-dates/initialize';
import { DayPickerRangeController, DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import '../calendarStyling/styl.css';


// import DayPickerRangeController from '../../../../trial/react-dates/src/components/DayPickerRangeController';

// import ScrollableOrientationShape from '../src/shapes/ScrollableOrientationShape';

// import { START_DATE, END_DATE, HORIZONTAL_ORIENTATION } from '../src/constants';
// import isInclusivelyAfterDay from '../src/utils/isInclusivelyAfterDay';


import mod from './modalLike.scss';
import { Button, Modal, ButtonToolbar } from 'react-bootstrap';



// const propTypes = forbidExtraProps({
//   // example props for the demo
//   autoFocusEndDate: PropTypes.bool,
//   initialStartDate: momentPropTypes.momentObj,
//   initialEndDate: momentPropTypes.momentObj,
//   startDateOffset: PropTypes.func,
//   endDateOffset: PropTypes.func,
//   showInputs: PropTypes.bool,
//   minDate: momentPropTypes.momentObj,
//   maxDate: momentPropTypes.momentObj,

//   keepOpenOnDateSelect: PropTypes.bool,
//   minimumNights: PropTypes.number,
//   isOutsideRange: PropTypes.func,
//   isDayBlocked: PropTypes.func,
//   isDayHighlighted: PropTypes.func,

//   // DayPicker props
//   enableOutsideDays: PropTypes.bool,
//   numberOfMonths: PropTypes.number,
//   orientation: ScrollableOrientationShape,
//   verticalHeight: PropTypes.number,
//   withPortal: PropTypes.bool,
//   initialVisibleMonth: PropTypes.func,
//   renderCalendarInfo: PropTypes.func,
//   renderMonthElement: PropTypes.func,
//   renderMonthText: PropTypes.func,

//   navPrev: PropTypes.node,
//   navNext: PropTypes.node,

//   onPrevMonthClick: PropTypes.func,
//   onNextMonthClick: PropTypes.func,
//   onOutsideClick: PropTypes.func,
//   renderCalendarDay: PropTypes.func,
//   renderDayContents: PropTypes.func,
//   renderKeyboardShortcutsButton: PropTypes.func,

//   // i18n
//   monthFormat: PropTypes.string,

//   isRTL: PropTypes.bool,
// });

// const defaultProps = {
//   // example props for the demo
//   autoFocusEndDate: false,
//   initialStartDate: null,
//   initialEndDate: null,
//   startDateOffset: undefined,
//   endDateOffset: undefined,
//   showInputs: false,
//   minDate: null,
//   maxDate: null,

//   // day presentation and interaction related props
//   renderCalendarDay: undefined,
//   renderDayContents: null,
//   minimumNights: 1,
//   isDayBlocked: () => false,
//   isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
//   isDayHighlighted: () => false,
//   enableOutsideDays: false,

//   // calendar presentation and interaction related props
//   orientation: HORIZONTAL_ORIENTATION,
//   verticalHeight: undefined,
//   withPortal: false,
//   initialVisibleMonth: null,
//   numberOfMonths: 2,
//   onOutsideClick() { },
//   keepOpenOnDateSelect: false,
//   renderCalendarInfo: null,
//   isRTL: false,
//   renderMonthText: null,
//   renderMonthElement: null,
//   renderKeyboardShortcutsButton: undefined,

//   // navigation related props
//   navPrev: null,
//   navNext: null,
//   onPrevMonthClick() { },
//   onNextMonthClick() { },

//   // internationalization
//   monthFormat: 'MMMM YYYY',
// };

class DayPickerRangeControllerWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // focusedInput: props.autoFocusEndDate ? END_DATE : START_DATE,
      // startDate: props.initialStartDate,
      // endDate: props.initialEndDate,
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
    // this.onDateChange = this.onDateChange.bind(this);
    // this.onFocusChange = this.onFocusChange.bind(this);

    // this.onDatesChange = this.onDatesChange.bind(this);
    // this.onFocusChange = this.onFocusChange.bind(this);
  }

  // onDatesChange({ startDate, endDate }) {
  //   this.setState({ startDate, endDate });
  // }

  // onFocusChange(focusedInput) {
  //   this.setState({
  //     // Force the focusedInput to always be truthy so that dates are always selectable
  //     focusedInput: !focusedInput ? START_DATE : focusedInput,
  //   });
  // }

  // onDateChange(date) {
  //   this.setState({ date });
  // }

  // onFocusChange({ focused }) {
  //   this.setState({ focused });
  // }
  render() {
    const { focused, date } = this.state;


    // const { showInputs } = this.props;
    // const { focusedInput, startDate, endDate } = this.state;

    // const props = omit(this.props, [
    //   'autoFocus',
    //   'autoFocusEndDate',
    //   'initialStartDate',
    //   'initialEndDate',
    //   'showInputs',
    // ]);

    // const startDateString = startDate && startDate.format('YYYY-MM-DD');
    // const endDateString = endDate && endDate.format('YYYY-MM-DD');

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className={mod.title}>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body >
          <div style={{ height: '100%' }}>
            {/* {showInputs &&
              <div style={{ marginBottom: 16 }}>
                <input type="text" name="start date" value={startDateString} readOnly />
                <input type="text" name="end date" value={endDateString} readOnly />
              </div>
            }

            <DayPickerRangeController
              {...props}
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onFocusChange}
              focusedInput={focusedInput}
              startDate={startDate}
              endDate={endDate}
            /> */}
            <DateRangePicker
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              numberOfMonths={1}
              hideKeyboardShortcutsPanel
              // withPortal
              enableOutsideDays
              showDefaultInputIcon
            />
          </div>
        </Modal.Body>

      </Modal >

    );
  }
}

// DayPickerRangeControllerWrapper.propTypes = propTypes;
// DayPickerRangeControllerWrapper.defaultProps = defaultProps;

export default DayPickerRangeControllerWrapper;