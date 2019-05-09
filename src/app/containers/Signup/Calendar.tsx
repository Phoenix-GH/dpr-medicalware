import * as React from 'react'
import BigCalendar from 'react-big-calendar';
var moment = require('moment');
import BlocksView from './CalendarBlocksView';
import DaysView from './CalendarDaysView';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

export namespace Calendar {
  export interface Props {
    defaultDate: Date;
    selectedDate: Date;
    selectedBlock: string;
    selectedHour: number;
    onBlockClick: Function;
    onHourClick: Function;
  }
}

class Calendar extends React.Component<Calendar.Props> {
  render() {
    const { selectedBlock } = this.props;
    return <BigCalendar
        {...this.props}
        localizer={{} as any}
        defaultView={selectedBlock as any}
        views={{ blocks: BlocksView, days: DaysView } as any}
    />
  }
}

export default Calendar;
